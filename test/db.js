import { Usuario } from "../src/model/Usuario.js";
import { REPOSITORY } from "../src/repository.config.js";

// Elimina los usuarios para la prueva
import { pool } from "../src/repository/config/mysql.config.db.js";
await pool.query("DELETE FROM usuarios");

/* TIPO DE USUARIO */
try {
    console.log(
        await REPOSITORY.UsuarioRepository.save(
            new Usuario({
                cedula: "1111",
                nombre: "prueva",
                direccion: "Kr xxx # xxx - xxx XXX",
                telefono: "3001234561",
                fecha_vinculacion: "2020-01-01",
                contrasena: "123456",
                mail: "prueva",
                tipo_usuario: "ARTURO",
            })
        )
    );
} catch (error) {
    console.error(error);
}

/* INSERSION NORNAL */
try {
    console.log(
        await REPOSITORY.UsuarioRepository.save(
            new Usuario({
                cedula: "1034324101",
                nombre: "Jose Ca",
                direccion: "Kr xxx # xxx - xxx XXX",
                telefono: "3001234561",
                fecha_vinculacion: "2020-01-01",
                contrasena: "123456",
                mail: "jd34lesu@gmail.com",
                tipo_usuario: "SOCIO",
            })
        )
    );
} catch (error) {
    console.error(error);
}

/* PRIMERA IMPRESION */
let usuarios = await REPOSITORY.UsuarioRepository.getAll();

usuarios.forEach((element) => {
    console.log(element.toJSON());
});

/* PRUEBA mail */
try {
    console.log(
        await REPOSITORY.UsuarioRepository.put("1034324101", {
            nombre: "Armando Bronca",
            mail: "jd34lesu@gmail.com",
        })
    );
} catch (error) {
    console.error(error);
}

/* ACTUALIZACION */
try {
    console.log(
        await REPOSITORY.UsuarioRepository.put("1034324101", {
            nombre: "Juan Manuel",
            direccion: "Kr xxx # xxx - xxx XXX",
            telefono: "3001234561",
            fecha_vinculacion: "2020-01-01",
        })
    );
} catch (error) {
    console.log(error);
}

usuarios = await REPOSITORY.UsuarioRepository.getAll();

usuarios.forEach((element) => {
    console.log(element.toJSON());
});

/* ACTUALIZACION FALLIDA*/
try {
    console.log(await REPOSITORY.UsuarioRepository.delete("2034324101"));
} catch (error) {
    console.log(error);
}

/* ACTUALIZACION DE VERDAD*/
try {
    console.log(await REPOSITORY.UsuarioRepository.delete("1034324101"));
} catch (error) {
    console.log(error);
}