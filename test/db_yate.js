import { Yate } from "../src/model/Yate.js";
import { Usuario } from "../src/model/Usuario.js";
import { TipoYate } from "../src/model/TipoYate.js";

import { pool } from "../src/repository/config/mysql.config.db.js";
import { UsuarioMysqlRepository } from "../src/repository/mysql/UsuarioMysqlRepository.js";
import { TipoYateMysqlRepository } from "../src/repository/mysql/TipoYateMysqlRepository.js";
import { YateMysqlRepository } from "../src/repository/mysql/YateMysqlRepository.js";

const REPOSITORY = {
    UsuarioRepository: new UsuarioMysqlRepository(),
    TipoYateRepository: new TipoYateMysqlRepository(),
    YateRepository: new YateMysqlRepository()
};

// ===============================
//   LIMPIEZA DE LA BD (para nacer de nuevo como la tusa)
// ===============================

await pool.query("DELETE FROM yates");
await pool.query("DELETE FROM usuarios");
await pool.query("DELETE FROM tipo_yate");

console.log("🧹 Base de datos limpia (yates, usuarios, tipo_yate)\n");

// ===============================
//   CREAR FORÁNEAS BÁSICAS
// ===============================

console.log("=== INSERTANDO USUARIOS Y TIPOS ===\n");

try {
    console.log(
        await REPOSITORY.UsuarioRepository.save(
            new Usuario({
                cedula: "123",
                nombre: "Pepito",
                direccion: "Cll falsa",
                telefono: "3001111111",
                fecha_vinculacion: "2021-01-01",
                contrasena: "123",
                mail: "p@p.com",
                tipo_usuario: "SOCIO",
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado usuario:", e.message);
}

try {
    console.log(
        await REPOSITORY.TipoYateRepository.save(
            new TipoYate({
                id_tipo: null,
                nombre: "LANCHITA",
                descripcion: "Lancha humilde como mi promedio",
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado tipo:", e.message);
}

console.log("\n📌 Foráneas creadas.\n");

// ===============================
//   INSERTAR YATES
// ===============================

console.log("=== INSERTANDO YATES ===\n");

// INSERCIÓN CORRECTA
try {
    console.log(
        await REPOSITORY.YateRepository.save(
            new Yate({
                matricula: "ABC123",
                nombre: "MiPrimerYate",
                eslora: 12.5,
                manga: 4.2,
                calado: 2.1,
                usuario_dueno_cedula: "123",
                id_tipo: 1,
                empleado_cargo: null,
            })
        )
    );
} catch (e) {
    console.error("❌ Error inesperado al insertar yate 1:", e.message);
}

/** 
// ERROR ESPERADO: matrícula duplicada
try {
    await REPOSITORY.YateRepository.save(
        new Yate({
            matricula: "ABC123",
            nombre: "Duplicado",
            eslora: 10,
            manga: 3,
            calado: 2,
            usuario_dueno_cedula: "123",
            id_tipo: 1,
        })
    );
} catch (e) {
    console.error("✔️ Error esperado (matrícula duplicada):", e.message);
}

// ERROR ESPERADO: dueño inexistente
try {
    await REPOSITORY.YateRepository.save(
        new Yate({
            matricula: "XYZ999",
            nombre: "DueñoFantasma",
            eslora: 10,
            manga: 3,
            calado: 1.5,
            usuario_dueno_cedula: "999999",
            id_tipo: 1,
        })
    );
} catch (e) {
    console.error("✔️ Error esperado (dueño no existe):", e.message);
}

// ERROR ESPERADO: tipo inexistente
try {
    await REPOSITORY.YateRepository.save(
        new Yate({
            matricula: "TYT777",
            nombre: "TipoFail",
            eslora: 12,
            manga: 4,
            calado: 2,
            usuario_dueno_cedula: "123",
            id_tipo: 9999,
        })
    );
} catch (e) {
    console.error("✔️ Error esperado (tipo no existe):", e.message);
}

console.log("\n📌 Yates probados para inserción.\n");

// ===============================
//   GET ALL Y GET BY
// ===============================

console.log("=== CONSULTAS YATE ===\n");

let yates = await REPOSITORY.YateRepository.getAll();
yates.forEach((y) => console.log(y.toJSON()));

console.log("\nfindByMatricula('ABC123'):");
console.log(await REPOSITORY.YateRepository.findByMatricula("ABC123"));

console.log("\nfindByNombre('MiPrimerYate'):");
console.log(await REPOSITORY.YateRepository.findByNombre("MiPrimerYate"));

// ===============================
//   PROBAR PUT
// ===============================

console.log("\n=== ACTUALIZACIÓN DEL YATE ===\n");

// Actualización válida
try {
    const updated = await REPOSITORY.YateRepository.put(
        new Yate({
            matricula: "ABC123",
            nombre: "MiYateActualizado",
            eslora: 13.0,
        })
    );
    console.log("PUT result:", updated);
} catch (e) {
    console.error("❌ Error inesperado en PUT:", e.message);
}

// ERROR ESPERADO: put de matrícula inexistente
try {
    await REPOSITORY.YateRepository.put(
        new Yate({
            matricula: "NOEXISTE",
            nombre: "Fail",
        })
    );
} catch (e) {
    console.error("✔️ Error esperado (yate no existe):", e.message);
}

// ===============================
//   DELETE
// ===============================

console.log("\n=== ELIMINANDO YATE ===\n");

try {
    console.log(await REPOSITORY.YateRepository.deleteByMatricula("ABC123"));
} catch (e) {
    console.error("❌ Error eliminando yate:", e.message);
}

// ===============================
//   CONSULTA FINAL
// ===============================

console.log("\n📌 YATES FINALES EN BD:");
yates = await REPOSITORY.YateRepository.getAll();
yates.forEach((y) => console.log(y.toJSON()));

console.log("\n🏁 TEST COMPLETO FINALIZADO.\n");

*/
