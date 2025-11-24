import { RepositoryBase } from "../RepositoryBase.js";
import { Yate } from "../../model/Yate.js";
import { str, int, float } from "../Validaciones.js";

import { pool } from "../config/mysql.config.db.js";
import { EmpleadoMysqlRepository } from "./EmpleadoMysqlRepository.js";
import { UsuarioMysqlRepository } from "./UsuarioMysqlRepository.js";
import { TipoYateMysqlRepository } from "./TipoYateMysqlRepository.js";

const dber = {
    EmpleadoMysqlRepository,
};

export class YateMysqlRepository extends RepositoryBase {
    constructor() {
        super();

        this.REPOSITORY = {
            TipoYateRepository: new TipoYateMysqlRepository(),
            UsuarioRepository: new UsuarioMysqlRepository(),
        };
    }

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM yates");

        return rows.map(
            (row) =>
                new Yate({
                    matricula: String(row.matricula),
                    nombre: String(row.nombre),
                    eslora: row.eslora !== null ? float(row.eslora) : null,
                    manga: row.manga !== null ? float(row.manga) : null,
                    calado: row.calado !== null ? float(row.calado) : null,
                    usuario_dueno_cedula: String(row.usuario_dueno_cedula),
                    id_tipo: row.id_tipo !== null ? int(row.id_tipo) : null,
                    empleado_cargo:
                        row.empleado_cargo !== null
                            ? int(row.empleado_cargo)
                            : null,
                })
        );
    }

    async findByMatricula(matricula) {
        const [rows] = await pool.query(
            "SELECT * FROM yates WHERE matricula = ?",
            [str(matricula)]
        );
        return rows.length > 0 ? new Yate(rows[0]) : null;
    }

    async findByNombre(nombre) {
        const [rows] = await pool.query(
            "SELECT * FROM yates WHERE nombre = ?",
            [str(nombre)]
        );
        return rows.length > 0 ? new Yate(rows[0]) : null;
    }

    async getAllByDueno(cedula) {
        const [rows] = await pool.query(
            "SELECT * FROM yates WHERE usuario_dueno_cedula = ?",
            [str(cedula)]
        );

        return rows.map(
            (row) =>
                new Yate({
                    matricula: String(row.matricula),
                    nombre: String(row.nombre),
                    eslora: row.eslora !== null ? float(row.eslora) : null,
                    manga: row.manga !== null ? float(row.manga) : null,
                    calado: row.calado !== null ? float(row.calado) : null,
                    usuario_dueno_cedula: String(row.usuario_dueno_cedula),
                    id_tipo: row.id_tipo !== null ? int(row.id_tipo) : null,
                    empleado_cargo:
                        row.empleado_cargo !== null
                            ? int(row.empleado_cargo)
                            : null,
                })
        );
    }

    async save(yate) {
        // matrícula única
        if (await this.findByMatricula(yate.matricula)) {
            throw new Error("ERROR: La matrícula ya existe.");
        }

        // nombre único
        if (await this.findByNombre(yate.nombre)) {
            throw new Error("ERROR: Ya existe un yate con ese nombre.");
        }

        // dueño existente
        const dueno = await this.REPOSITORY.UsuarioRepository.findById(
            yate.usuario_dueno_cedula
        );
        if (!dueno) throw new Error("ERROR: El usuario dueño no existe.");

        // tipo existente
        if (yate.id_tipo) {
            const tipo = await this.REPOSITORY.TipoYateRepository.findById(
                yate.id_tipo
            );
            if (!tipo)
                throw new Error("ERROR: El tipo de yate (id_tipo) no existe.");
        }

        // empleado cargo existente si viene
        if (yate.empleado_cargo) {
            const emp = await dber.EmpleadoRepository.findById(
                yate.empleado_cargo
            );
            if (!emp) throw new Error("ERROR: El empleado asignado no existe.");
        }

        const sql = `
            INSERT INTO yates (
                matricula,
                nombre,
                eslora,
                manga,
                calado,
                usuario_dueno_cedula,
                id_tipo,
                empleado_cargo
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;

        const params = [
            String(yate.matricula),
            String(yate.nombre),
            yate.eslora ?? null,
            yate.manga ?? null,
            yate.calado ?? null,
            String(yate.usuario_dueno_cedula),
            yate.id_tipo ?? null,
            yate.empleado_cargo ?? null,
        ];

        const [result] = await pool.query(sql, params);

        return result.affectedRows > 0
            ? await this.findByMatricula(yate.matricula)
            : null;
    }

    async put(yate) {
        // verificar existencia
        const existente = await this.findByMatricula(yate.matricula);
        if (!existente) throw new Error("ERROR: El yate no existe.");

        // validar nombre único si cambió
        if (yate.nombre && yate.nombre !== existente.nombre) {
            const repetido = await this.findByNombre(yate.nombre);
            if (repetido)
                throw new Error("ERROR: Ya existe otro yate con ese nombre.");
        }

        // dueño existente
        if (yate.usuario_dueno_cedula) {
            const dueno = await this.REPOSITORY.UsuarioRepository.findById(
                yate.usuario_dueno_cedula
            );
            if (!dueno) throw new Error("ERROR: El usuario dueño no existe.");
        }

        // tipo existente
        if (yate.id_tipo) {
            const tipo = await this.REPOSITORY.TipoYateRepository.findById(
                yate.id_tipo
            );
            if (!tipo) throw new Error("ERROR: El tipo de yate no existe.");
        }

        // empleado
        if (yate.empleado_cargo) {
            const emp = await this.REPOSITORY.EmpleadoRepository.findById(
                yate.empleado_cargo
            );
            if (!emp) throw new Error("ERROR: El empleado asignado no existe.");
        }

        const sql = `
            UPDATE yates
            SET 
                nombre = ?, 
                eslora = ?, 
                manga = ?, 
                calado = ?, 
                usuario_dueno_cedula = ?, 
                id_tipo = ?, 
                empleado_cargo = ?
            WHERE matricula = ?
        `;

        const params = [
            str(yate.nombre),
            yate.eslora ?? null,
            yate.manga ?? null,
            yate.calado ?? null,
            str(yate.usuario_dueno_cedula),
            yate.id_tipo ?? null,
            yate.empleado_cargo ?? null,
            str(yate.matricula),
        ];

        const [result] = await pool.query(sql, params);
        return result.affectedRows > 0;
    }

    async deleteByMatricula(matricula) {
        const sql = "DELETE FROM yates WHERE matricula = ?";
        const [result] = await pool.query(sql, [str(matricula)]);
        return result.affectedRows > 0;
    }
}
