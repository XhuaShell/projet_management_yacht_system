import { RepositoryBase } from "../RepositoryBase.js";
import { Usuario } from "../../model/Usuario.js";
import { pool } from "../config/mysql.config.db.js";

export class UsuarioMysqlRepository extends RepositoryBase {
    async getAll() {
        const [rows] = await pool.query("SELECT * FROM usuarios");
        return rows.map((row) => new Usuario(row));
    }

    async findById(cedula) {
        const [rows] = await pool.query(
            "SELECT * FROM usuarios WHERE cedula = ?",
            [cedula]
        );
        return rows.length > 0 ? new Usuario(rows[0]) : null;
    }

    async findByMail(mail) {
        const [rows] = await pool.query(
            "SELECT * FROM usuarios WHERE mail = ?",
            [mail]
        );
        return rows.length > 0 ? new Usuario(rows[0]) : null;
    }

    async save(usuario) {
        if (await this.findById(usuario.cedula)) {
            throw new Error(
                "ERROR: La cédula que intentaste usar ya está registrada."
            );
        }

        if (await this.findByMail(usuario.mail)) {
            throw new Error(
                "ERROR: El mail que intentaste usar ya está registrado."
            );
        }

        const tipo = usuario.tipo_usuario;
        if (tipo !== "ADMIN" && tipo !== "SOCIO") {
            throw new Error(
                "ERROR: El tipo de usuario no es válido. Debe ser 'ADMIN' o 'SOCIO'."
            );
        }

        const [result] = await pool.query(
            ` INSERT INTO usuarios 
            ( cedula, nombre, direccion, telefono, fecha_vinculacion, contrasena, mail, tipo_usuario )
             VALUES ( ?, ?, ?, ?, ?, ?, ?, ?);`,
            [
                usuario.cedula,
                usuario.nombre,
                usuario.direccion,
                usuario.telefono,
                usuario.fecha_vinculacion,
                usuario.contrasena,
                usuario.mail,
                usuario.tipo_usuario,
            ]
        );
        if (result.affectedRows > 0) {
            return new Usuario(usuario); // usar lo que tú ya tienes
        }

        return null;
    }

    async put(cedula, data) {
        if (data.cedula || data.mail) {
            throw new Error(
                `No puedes actualizar el dato:${data.cedula ? "cedula" : ""} ${
                    data.mail ? "mail" : ""
                } `
            );
        }

        const campos = Object.keys(data);
        const valores = Object.values(data);

        if (campos.length === 0) return null;

        // UPDATE usuarios SET campo1=?, campo2=?, ... WHERE cedula=?
        const setQuery = campos.map((campo) => `${campo} = ?`).join(", ");

        const [result] = await pool.query(
            `UPDATE usuarios SET ${setQuery} WHERE cedula = ?`,
            [...valores, cedula]
        );

        return result.affectedRows > 0 ? this.findById(cedula) : null;
    }

    /**
     * Elimina un usuario de la base de datos;
     *  
     * @param {*} cedula 
     * @returns false si no se encontró la cedula 
     * @returns true si se eliminó correctamente
     
     */
    async delete(cedula) {
        const [result] = await pool.query(
            "DELETE FROM usuarios WHERE cedula = ?",
            [cedula]
        );

        return result.affectedRows > 0;
    }
}
