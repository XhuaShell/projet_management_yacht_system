import { Zona } from "../src/model/Zona.js";
import { Usuario } from "../src/model/Usuario.js";
import { Amarre } from "../src/model/Amarre.js";

import { REPOSITORY } from "../src/repository.config.js";
import { pool } from "../src/repository/config/mysql.config.db.js";

// LIMPIEZA PARA EMPEZAR FRESCO
await pool.query("DELETE FROM amarres");
await pool.query("DELETE FROM usuarios");
await pool.query("DELETE FROM zonas");

console.log("🧹 Base de datos limpia\n");

// ===============================
//   INSERTAR DOS ZONAS
// ===============================

console.log("=== INSERTANDO ZONAS ===\n");

try {
    console.log(
        await REPOSITORY.ZonaRepository.save(
            new Zona({
                id_zona: "A",
                cuota_administracion: 200000.0,
                capacidad: 30,
                profundidad: 10,
                dim_max_eslora: 40,
                dim_max_manga: 15,
                dim_max_calado: 5,
                dim_min_eslora: 10,
                dim_min_manga: 5,
                dim_min_calado: 2,
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado:", e.message);
}

try {
    console.log(
        await REPOSITORY.ZonaRepository.save(
            new Zona({
                id_zona: "B",
                cuota_administracion: 180000.0,
                capacidad: 20,
                profundidad: 8,
                dim_max_eslora: 30,
                dim_max_manga: 12,
                dim_max_calado: 4,
                dim_min_eslora: 9,
                dim_min_manga: 4,
                dim_min_calado: 2,
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado:", e.message);
}

console.log("\n📌 Zonas insertadas correctamente.\n");

// ===============================
//   INSERTAR DOS USUARIOS
// ===============================

console.log("=== INSERTANDO USUARIOS ===\n");

try {
    console.log(
        await REPOSITORY.UsuarioRepository.save(
            new Usuario({
                cedula: "10101010",
                nombre: "Nico Doom",
                direccion: "Kr 1 # 2 - 3",
                telefono: "3000000001",
                fecha_vinculacion: "2021-05-10",
                contrasena: "abc123",
                mail: "nico@example.com",
                tipo_usuario: "SOCIO",
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado en usuario 1:", e.message);
}

try {
    console.log(
        await REPOSITORY.UsuarioRepository.save(
            new Usuario({
                cedula: "20202020",
                nombre: "Laura Hell",
                direccion: "Cll 45 # 12 - 44",
                telefono: "3000000002",
                fecha_vinculacion: "2022-01-01",
                contrasena: "pass456",
                mail: "laura@example.com",
                tipo_usuario: "SOCIO",
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado en usuario 2:", e.message);
}

console.log("\n📌 Usuarios insertados.\n");

// ===============================
//   PROBAR AMARRES
// ===============================

console.log("=== INSERTANDO AMARRES ===\n");

// INSERCIÓN CORRECTA
try {
    console.log(
        await REPOSITORY.AmarreRepository.save(
            new Amarre({
                num_amarre: 1,
                id_zona: "A",
                usuario_propietario_cedula: "10101010",
                fecha_compra: "2023-01-10",
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado al insertar amarre 1:", e.message);
}

// INSERCIÓN CON CAMPOS OPCIONALES (solo num_amarre + zona)
try {
    console.log(
        await REPOSITORY.AmarreRepository.save(
            new Amarre({
                num_amarre: 2,
                id_zona: "B",
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado al insertar amarre 2:", e.message);
}

// ERROR ESPERADO: zona inexistente
try {
    await REPOSITORY.AmarreRepository.save(
        new Amarre({
            num_amarre: 3,
            id_zona: "NOEXISTE",
        })
    );
} catch (e) {
    console.error("✔️ Error esperado:", e.message);
}

// ===============================
//   PROBAR ACTUALIZACIÓN (PUT)
// ===============================

console.log("\n=== ACTUALIZANDO AMARRE ===\n");

// Cambiar propietario y fecha
try {
    const updated = await REPOSITORY.AmarreRepository.put(
        new Amarre({
            num_amarre: 2,
            usuario_propietario_cedula: "20202020",
            fecha_compra: "2024-02-10",
        })
    );
    console.log("PUT result:", updated);
} catch (e) {
    console.error("❌ Error inesperado en put:", e.message);
}

// ===============================
//   PROBAR DELETE
// ===============================

console.log("\n=== ELIMINANDO AMARRE 1 ===\n");

try {
    console.log(await REPOSITORY.AmarreRepository.deleteByNum(1));
} catch (e) {
    console.error("❌ Error eliminando amarre:", e.message);
}

// ===============================
//   CONSULTA FINAL
// ===============================

console.log("\n📌 AMARRES FINALES EN BD:");
let amarres = await REPOSITORY.AmarreRepository.getAll();
amarres.forEach((a) => console.log(a.toJSON()));

// ===============================
//   ELIMINAR USUARIOS (PRUEBA)
// ===============================

console.log("\n=== ELIMINANDO USUARIOS ===\n");

try {
    console.log(await REPOSITORY.UsuarioRepository.delete("10101010"));
} catch (e) {
    console.error(e);
}

try {
    console.log(await REPOSITORY.UsuarioRepository.delete("20202020"));
} catch (e) {
    console.error(e);
}

console.log("\n🏁 TEST COMPLETO FINALIZADO.\n");
