import { RepositoryBase } from "../RepositoryBase.js";
import { Zona } from "../../model/Zona.js";
import { pool } from "../config/mysql.config.db.js";

import { int, float, str } from "../Validaciones.js";

/*
constructor(zona = {}) {
    if (
        typeof zona.id_zona !== "string" ||
        typeof zona.cuota_administracion !== "number" ||
        typeof zona.capacidad !== "number" ||
        typeof zona.profundidad !== "number"
    ) {
        throw new Error("Información no ingresada correctamente");
    }

    this.id_zona = zona.id_zona ?? null;
    this.cuota_administracion = zona.cuota_administracion ?? null;
    this.capacidad = zona.capacidad ?? null;
    this.profundidad = zona.profundidad ?? null;
    this.dim_max_eslora = zona.dim_max_eslora ?? null;
    this.dim_max_manga = zona.dim_max_manga ?? null;
    this.dim_max_calado = zona.dim_max_calado ?? null;
    this.dim_min_eslora = zona.dim_min_eslora ?? null;
    this.dim_min_manga = zona.dim_min_manga ?? null;
    this.dim_min_calado = zona.dim_min_calado ?? null;
}
*/

export class ZonaMsqlRepository extends RepositoryBase {
    async getAll() {
        const [rows] = await pool.query("SELECT * FROM zonas");
        return rows.map(
            (row) =>
                new Zona({
                    id_zona: str(row.id_zona),
                    cuota_administracion: float(row.cuota_administracion),
                    capacidad: int(row.capacidad),
                    profundidad: float(row.profundidad),
                    dim_max_eslora: float(row.dim_max_eslora),
                    dim_max_manga: float(row.dim_max_manga),
                    dim_max_calado: float(row.dim_max_calado),
                    dim_min_eslora: float(row.dim_min_eslora),
                    dim_min_manga: float(row.dim_min_manga),
                    dim_min_calado: float(row.dim_min_calado),
                })
        );
    }

    async findById(id) {
        const [rows] = await pool.query(
            "SELECT * FROM zonas WHERE id_zona = ?",
            [id]
        );
        return rows.length > 0 ? new Zona(rows[0]) : null;
    }

    /**
     *
     * @param { Se tiene que entregar un objeto completo con todos los datos de Zona} zona
     * @returns
     */
    async save(zona) {
        if (await this.findById(zona.id_zona)) {
            throw new Error("La zona ya existe. No se puede insertar.");
        }
        const [result] = await pool.query(
            ` INSERT INTO zonas
                ( 
                    id_zona, 
                    cuota_administracion, 
                    capacidad, profundidad, 
                    dim_max_eslora, 
                    dim_max_manga, 
                    dim_max_calado, 
                    dim_min_eslora, 
                    dim_min_manga, 
                    dim_min_calado 
                )
                 VALUES ( ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,
            [
                zona.id_zona,
                zona.cuota_administracion,
                zona.capacidad,
                zona.profundidad,
                zona.dim_max_eslora,
                zona.dim_max_manga,
                zona.dim_max_calado,
                zona.dim_min_eslora,
                zona.dim_min_manga,
                zona.dim_min_calado,
            ]
        );
        if (result.affectedRows > 0) {
            return await this.findById(zona.id_zona); // usar lo que tú ya tienes
        }

        return null;
    }
}
