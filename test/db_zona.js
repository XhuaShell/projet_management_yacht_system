import { Zona } from "../src/model/Zona.js";
import { REPOSITORY } from "../src/repository.config.js";

// Elimina todas las zonas para iniciar limpito
import { pool } from "../src/repository/config/mysql.config.db.js";
await pool.query("DELETE FROM zonas");

/* INSERCIÓN CON ERRORES */
try {
    console.log(
        await REPOSITORY.ZonaRepository.save(
            new Zona({
                id_zona: "A",                // OK
                cuota_administracion: "nope", // ERROR: debería ser float
                capacidad: -20,               // ERROR: capacidad inválida
                profundidad: null,
                dim_max_eslora: 20,
                dim_max_manga: 10,
                dim_max_calado: 5,
                dim_min_eslora: 15,
                dim_min_manga: 8,
                dim_min_calado: 3,
            })
        )
    );
} catch (error) {
    console.error("❌ Error esperado en inserción mala:", error.message);
}

/* INSERCIÓN NORMAL */
try {
    console.log(
        await REPOSITORY.ZonaRepository.save(
            new Zona({
                id_zona: "Z",
                cuota_administracion: 150000.0,
                capacidad: 25,
                profundidad: 12.5,
                dim_max_eslora: 40.0,
                dim_max_manga: 15.0,
                dim_max_calado: 6.0,
                dim_min_eslora: 10.0,
                dim_min_manga: 5.0,
                dim_min_calado: 2.0,
            })
        )
    );
} catch (error) {
    console.error("❌ Error inesperado al insertar zona correcta:", error.message);
}

/* PRIMERA IMPRESIÓN */
let zonas = await REPOSITORY.ZonaRepository.getAll();

console.log("📌 Zonas en la BD:");
zonas.forEach((z) => console.log(z.toJSON()));
