import { TipoYate } from "../src/model/TipoYate.js";
import { REPOSITORY } from "../src/repository.config.js";
import { pool } from "../src/repository/config/mysql.config.db.js";

// LIMPIEZA PARA EMPEZAR FRESCO
await pool.query("DELETE FROM tipo_yate");

console.log("🧹 Tabla 'tipo_yate' limpia\n");

// ===============================
//     INSERTAR DOS TIPOS DE YATE
// ===============================

console.log("=== INSERTANDO TIPOS DE YATE ===\n");

// Tipo 1: Yate a Vela (solo nombre)
try {
    const tipo1 = new TipoYate({
        nombre: "Yate a Vela",
        descripcion: null,
    });
    console.log("Tipo 1 insertado:", await REPOSITORY.TipoYateRepository.save(tipo1));
} catch (e) {
    console.error("❌ Error inesperado al insertar Tipo 1:", e.message);
}

// Tipo 2: Catamarán (con descripción)
try {
    const tipo2 = new TipoYate({
        nombre: "Catamarán",
        descripcion: "Barco multicasco con dos cascos paralelos de igual tamaño.",
    });
    console.log("Tipo 2 insertado:", await REPOSITORY.TipoYateRepository.save(tipo2));
} catch (e) {
    console.error("❌ Error inesperado al insertar Tipo 2:", e.message);
}

console.log("\n📌 Tipos insertados correctamente.\n");

// ===============================
//     PROBAR REGLA DE NOMBRE ÚNICO (save)
// ===============================

console.log("=== PROBANDO NOMBRE ÚNICO (save) ===\n");

// ERROR ESPERADO: nombre 'Catamarán' ya existe
try {
    await REPOSITORY.TipoYateRepository.save(
        new TipoYate({
            nombre: "Catamarán",
            descripcion: "Este debería fallar.",
        })
    );
} catch (e) {
    console.error("✔️ Error esperado:", e.message);
}

// ===============================
//     PROBAR CONSULTAS (findById y findByNombre)
// ===============================

console.log("\n=== PROBANDO CONSULTAS ===\n");

let tipoVela = await REPOSITORY.TipoYateRepository.findByNombre("Yate a Vela");
console.log("🔎 Encontrado por Nombre ('Yate a Vela'):", tipoVela.toJSON());

const idCatamaran = 25; // Asumiendo que el ID del Catamarán es 2
let tipoCatamaran = await REPOSITORY.TipoYateRepository.findById(idCatamaran);
console.log(`🔎 Encontrado por ID (${idCatamaran}):`, tipoCatamaran.toJSON());

// ===============================
//     PROBAR ACTUALIZACIÓN (put)
// ===============================

console.log("\n=== ACTUALIZANDO TIPO DE YATE (put) ===\n");

try {
    const updated = await REPOSITORY.TipoYateRepository.put(
        new TipoYate({
            id_tipo: tipoVela.id_tipo,
            nombre: "Yate de Lujo", // Cambiando el nombre
            descripcion: "Eslora > 24 metros, full equip.", // Agregando descripción
        })
    );
    console.log("PUT result:", updated);

    // Verificar el cambio
    tipoVela = await REPOSITORY.TipoYateRepository.findById(tipoVela.id_tipo);
    console.log("Tipo actualizado:", tipoVela.toJSON());
} catch (e) {
    console.error("❌ Error inesperado en put:", e.message);
}

// ===============================
//     PROBAR DELETE
// ===============================

console.log("\n=== ELIMINANDO TIPO DE YATE (id=2) ===\n");

try {
    console.log("Delete result:", await REPOSITORY.TipoYateRepository.deleteById(idCatamaran));
} catch (e) {
    console.error("❌ Error eliminando tipo de yate:", e.message);
}

// ===============================
//     CONSULTA FINAL
// ===============================

console.log("\n📌 TIPOS DE YATE FINALES EN BD:");
let tiposFinales = await REPOSITORY.TipoYateRepository.getAll();
tiposFinales.forEach((t) => console.log(t.toJSON()));

console.log("\n🏁 TEST COMPLETO FINALIZADO. 💀\n");
