import { RepositoryBase } from "../RepositoryBase.js";
import { Amarre } from "../../model/Amarre.js";
import { pool } from "../config/mysql.config.db.js";
import { REPOSITORY } from "../../repository.config.js";
import { date, int, str } from "../Validaciones.js";

export class AmarreMysqlRepository extends RepositoryBase {
    //corregido con chatgpt
    async getAll() {
    const [rows] = await pool.query("SELECT * FROM amarres");

    return rows.map(
        (row) =>
            new Amarre({
                num_amarre: Number(row.num_amarre),        // convertir a número
                id_zona: String(row.id_zona),              // convertir a string
                usuario_propietario_cedula: row.usuario_propietario_cedula
                    ? String(row.usuario_propietario_cedula)
                    : null,                                 // si es null en DB
                fecha_compra: row.fecha_compra
                    ? new Date(row.fecha_compra)            // convertir a Date
                    : null,
            })
    );
}

    async findByNum(num_amarre) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE num_amarre = ?",
            [num_amarre]
        );
        return rows.length > 0 ? new Amarre(rows[0]) : null;
    }

    async getAllByPropietario(cedula) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE usuario_propietario_cedula = ?",
            [cedula]
        );
        return rows.map(
            (row) =>
                new Amarre({
                    num_amarre: int(row.num_amarre),
                    id_zona: str(row.id_zona),
                    usuario_propietario_cedula: str(
                        row.usuario_propietario_cedula
                        // Transexual.
                    ),
                    fecha_compra:
                        date(row.fecha_compra) != null
                            ? row.fecha_compra
                            : null,
                })
        );
    }

    async getAllByZona(id_zona) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE id_zona = ?",
            [id_zona]
        );
        return rows.map(
            (row) =>
                new Amarre({
                    num_amarre: int(row.num_amarre),
                    id_zona: str(row.id_zona),
                    usuario_propietario_cedula: str(
                        row.usuario_propietario_cedula
                        // Transexual.
                    ),
                    fecha_compra:
                        date(row.fecha_compra) != null
                            ? row.fecha_compra
                            : null,
                })
        );
    }

    async getAllByPropietario(cedula) {
        const [rows] = await pool.query(
            "SELECT * FROM amarres WHERE usuario_propietario_cedula = ?",
            [cedula]
        );
        return rows.map(
            (row) =>
                new Amarre({
                    num_amarre: int(row.num_amarre),
                    id_zona: str(row.id_zona),
                    usuario_propietario_cedula: str(
                        row.usuario_propietario_cedula
                        // Transexual.
                    ),
                    fecha_compra: date(row.fecha_compra),
                })
        );
    }

    async save(amarre) {
        // num_amarre único
        if (await this.findByNum(amarre.num_amarre)) {
            throw new Error("ERROR: El número de amarre ya existe.");
        }

        // zona existente
        const zona = await REPOSITORY.ZonaRepository.findById(amarre.id_zona);
        if (!zona) throw new Error("ERROR: La zona no existe.");

        // usuario propietario si viene
        if (amarre.usuario_propietario_cedula) {
            const usr = await REPOSITORY.UsuarioRepository.findById(
                amarre.usuario_propietario_cedula
            );
            if (!usr)
                throw new Error("ERROR: El usuario propietario no existe.");
        }

        // fecha válida si viene
        if (amarre.fecha_compra && date(amarre.fecha_compra) === null) {
            throw new Error("ERROR: Formato de fecha inválido.");
        }

        const num_amarre = amarre.num_amarre;
        const id_zona = amarre.id_zona;
        const usuario = amarre.usuario_propietario_cedula ?? null;
        const fecha = amarre.fecha_compra ?? null;

        const sql = `
        INSERT INTO amarres (
            num_amarre,
            id_zona,
            usuario_propietario_cedula,
            fecha_compra
        ) VALUES (?, ?, ?, ?);
    `;

        const [result] = await pool.query(sql, [
            num_amarre,
            id_zona,
            usuario,
            fecha,
        ]);

        return result.affectedRows > 0
            ? await this.findByNum(num_amarre) // -> Devuelve un amarre si se logró hacer la insercion ñam ñam
            : null; // -> se va al carajo aquí
    }

    /**
     * Solo se puede actualizar el propietario y la fecha de compra.
     * @param {*} amarre
     */
    async put(amarre) {
        // usuario propietario si viene
        if (amarre.usuario_propietario_cedula) {
            const usr = await REPOSITORY.UsuarioRepository.findById(
                amarre.usuario_propietario_cedula
            );
            if (!usr)
                throw new Error("ERROR: El usuario propietario no existe.");
        }

        // fecha válida si viene
        if (amarre.fecha_compra && date(amarre.fecha_compra) === null) {
            throw new Error("ERROR: Formato de fecha inválido.");
        }

        const sql = `
        UPDATE amarres
        SET 
            usuario_propietario_cedula = ?, 
            fecha_compra = ?
        WHERE num_amarre = ?
    `;

        const params = [
            str(amarre.usuario_propietario_cedula),
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
