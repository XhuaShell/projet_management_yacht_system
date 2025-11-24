import { RepositoryBase } from "../RepositoryBase.js";
import { TipoYate } from "../../model/TipoYate.js";
import { pool } from "../config/mysql.config.db.js";
import { str, int } from "../Validaciones.js";

export class TipoYateMysqlRepository extends RepositoryBase {
    async getAll() {
        const [rows] = await pool.query("SELECT * FROM tipo_yate");

        return rows.map(
            (row) =>
                new TipoYate({
                    id_tipo: int(row.id_tipo),
                    nombre:  String(row.nombre),
                    descripcion: row.descripcion ?? null,
                })
        );
    }

    async findById(id) {
        const [rows] = await pool.query(
            "SELECT * FROM tipo_yate WHERE id_tipo = ?",
            [int(id)]
        );
        return rows.length > 0 ? new TipoYate(rows[0]) : null;
    }

    async findByNombre(nombre) {
        const [rows] = await pool.query(
            "SELECT * FROM tipo_yate WHERE nombre = ?",
            [nombre]
        );
        return rows.length > 0 ? new TipoYate(rows[0]) : null;
    }

    async save(tipoYate) {
        const existente = await this.findByNombre(tipoYate.nombre);
        if (existente) throw new Error("ERROR: El nombre del tipo ya existe.");

        const [result] = await pool.query(
            `
            INSERT INTO tipo_yate (
                nombre,
                descripcion
            ) VALUES ( ? ,  ? );
        `,
            [tipoYate.nombre, tipoYate.descripcion ?? null]
        );

        return result.affectedRows > 0
            ? await this.findById(result.insertId)
            : null;
    }

    async put(tipoYate) {
        // verificar existencia
        const existente = await this.findById(tipoYate.id_tipo);
        if (!existente) throw new Error("ERROR: El tipo de yate no existe.");

        // verificar nombre único si lo cambia
        if (tipoYate.nombre && tipoYate.nombre !== existente.nombre) {
            const repetido = await this.findByNombre(tipoYate.nombre);
            if (repetido)
                throw new Error(
                    "ERROR: Ya existe un tipo de yate con ese nombre."
                );
        }

        const sql = `
            UPDATE tipo_yate
            SET nombre = ?, descripcion = ?
            WHERE id_tipo = ?
        `;

        const params = [
             String(tipoYate.nombre),
            tipoYate.descripcion ?? null,
            int(tipoYate.id_tipo),
        ];

        const [result] = await pool.query(sql, params);
        return result.affectedRows > 0;
    }

    async deleteById(id) {
        const sql = "DELETE FROM tipo_yate WHERE id_tipo = ?";
        const [result] = await pool.query(sql, [int(id)]);
        return result.affectedRows > 0;
    }
}
