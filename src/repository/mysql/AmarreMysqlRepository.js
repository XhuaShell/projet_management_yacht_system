import { RepositoryBase } from "../RepositoryBase.js";
import { Amarre } from "../../model/Amarre.js";
import { pool } from "../config/mysql.config.db.js";
import { date, int, str } from "../Validaciones.js";
import { ZonaMsqlRepository } from "./ZonaMysqlRepository.js";
import { UsuarioMysqlRepository } from "./UsuarioMysqlRepository.js";

export class AmarreMysqlRepository extends RepositoryBase {
    constructor() {
        super(); // NECESARIO SI EXTENDES RepositoryBase

        this.REPOSITORY = {
            ZonaRepository: new ZonaMsqlRepository(),
            UsuarioRepository: new UsuarioMysqlRepository(),
        };
    }

    async getAll() {
        const [rows] = await pool.query("SELECT * FROM amarres");

        return rows.map((row) =>
            new Amarre({
                num_amarre: int(row.num_amarre),
                id_zona: str(row.id_zona),
                usuario_propietario_cedula: row.usuario_propietario_cedula 
                    ? str(row.usuario_propietario_cedula) 
                    : null,
                fecha_compra: row.fecha_compra ? new Date(row.fecha_compra) : null,
            })
        );
    }

    async findByNum(num_amarre) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE num_amarre = ?",
            [num_amarre]
        );

        return rows.length > 0
            ? new Amarre({
                  num_amarre: int(rows[0].num_amarre),
                  id_zona: str(rows[0].id_zona),
                  usuario_propietario_cedula: rows[0].usuario_propietario_cedula
                      ? str(rows[0].usuario_propietario_cedula)
                      : null,
                  fecha_compra: rows[0].fecha_compra ? new Date(rows[0].fecha_compra) : null,
              })
            : null;
    }

    async getAllByPropietario(cedula) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE usuario_propietario_cedula = ?",
            [cedula]
        );

        return rows.map((row) =>
            new Amarre({
                num_amarre: int(row.num_amarre),
                id_zona: str(row.id_zona),
                usuario_propietario_cedula: row.usuario_propietario_cedula
                    ? str(row.usuario_propietario_cedula)
                    : null,
                fecha_compra: row.fecha_compra ? new Date(row.fecha_compra) : null,
            })
        );
    }

    async getAllByZona(id_zona) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE id_zona = ?",
            [id_zona]
        );

        return rows.map((row) =>
            new Amarre({
                num_amarre: int(row.num_amarre),
                id_zona: str(row.id_zona),
                usuario_propietario_cedula: row.usuario_propietario_cedula
                    ? str(row.usuario_propietario_cedula)
                    : null,
                fecha_compra: row.fecha_compra ? new Date(row.fecha_compra) : null,
            })
        );
    }

    async save(amarre) {
        // asegurar que num_amarre no exista
        if (await this.findByNum(amarre.num_amarre)) {
            throw new Error("ERROR: El número de amarre ya existe.");
        }

        // zona existente
        const zona = await this.REPOSITORY.ZonaRepository.findById(amarre.id_zona);
        if (!zona) throw new Error("ERROR: La zona no existe.");

        // usuario propietario (si viene)
        if (amarre.usuario_propietario_cedula) {
            const usr = await this.REPOSITORY.UsuarioRepository.findById(
                amarre.usuario_propietario_cedula
            );
            if (!usr) throw new Error("ERROR: El usuario propietario no existe.");
        }

        // validar fecha
        if (amarre.fecha_compra && date(amarre.fecha_compra) === null) {
            throw new Error("ERROR: Formato de fecha inválido.");
        }

        const sql = `
            INSERT INTO amarres (
                num_amarre,
                id_zona,
                usuario_propietario_cedula,
                fecha_compra
            ) VALUES (?, ?, ?, ?)
        `;

        const params = [
            int(amarre.num_amarre),
            str(amarre.id_zona),
            amarre.usuario_propietario_cedula
                ? str(amarre.usuario_propietario_cedula)
                : null,
            amarre.fecha_compra ? date(amarre.fecha_compra) : null,
        ];

        const [result] = await pool.query(sql, params);

        return result.affectedRows > 0 ? this.findByNum(amarre.num_amarre) : null;
    }

    async put(amarre) {
        // usuario propietario (si viene)
        if (amarre.usuario_propietario_cedula) {
            const usr = await this.REPOSITORY.UsuarioRepository.findById(
                amarre.usuario_propietario_cedula
            );
            if (!usr) throw new Error("ERROR: El usuario propietario no existe.");
        }

        if (amarre.fecha_compra && date(amarre.fecha_compra) === null) {
            throw new Error("ERROR: Formato de fecha inválido.");
        }

        const sql = `
            UPDATE amarres
            SET usuario_propietario_cedula = ?, fecha_compra = ?
            WHERE num_amarre = ?
        `;

        const params = [
            amarre.usuario_propietario_cedula
                ? str(amarre.usuario_propietario_cedula)
                : null,
            amarre.fecha_compra ? date(amarre.fecha_compra) : null,
            int(amarre.num_amarre),
        ];

        const [result] = await pool.query(sql, params);
        return result.affectedRows > 0;
    }

    async deleteByNum(num) {
        const sql = "DELETE FROM amarres WHERE num_amarre = ?";
        const [result] = await pool.query(sql, [int(num)]);
        return result.affectedRows > 0;
    }
}
