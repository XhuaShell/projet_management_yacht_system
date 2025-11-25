import { UsuarioMysqlRepository } from "../repository/mysql/UsuarioMysqlRepository.js";

import { Usuario } from "../model/Usuario.js";
const nombreP = "socio";
const BD = new UsuarioMysqlRepository();

//req a server
export const mostrarFormulario = (req, res) => {
    res.render(`${nombreP}/Formulario`);
};
export const mostrarLista = (req, res) => {
    //mi solucion seria: carga la pagina sin valores, poner un boton y formulario y ahi si hacer la consulta despues del get
    res.render(`${nombreP}/Lista`, { objetosCons: [] }); // inicial vacío
};
export const mostrarActualizacion = (req, res) => {
    res.render(`${nombreP}/FormularioEdicion`, {
        usuario: req.session.usuario,
        panelInfo: req.session.panelInfo,
    });
};
export const mostrarEliminacion = (req, res) => {
    res.render(`${nombreP}/Deleter`);
};
export const mostrarmain = (req, res) => {
    res.render(`${nombreP}/main`);
};

export const verUsuarioInfo = (req, res) => {
    res.render(`${nombreP}/usuarioInfo`, {
        usuario: req.session.usuario,
        panelInfo: req.session.panelInfo,
    });
};

//req a BD
export const create = async (req, res) => {
    try {
        const {
            codigo,
            nombre,
            cedula,
            fecha_vinculacion,
            direccion,
            telefono,
            contraseña,
            email,
        } = req.body;
        const nuevo_Usuario = new Usuario({
            cedula: String(cedula),
            nombre,
            direccion,
            telefono,
            fecha_vinculacion,
            contrasena: String(contraseña),
            mail: email, // porque tu constructor lo exige
            tipo_usuario: "SOCIO", // si quieres
        });
        await BD.save(nuevo_Usuario);
    } catch (Error) {
        return res.status(303).send(`${Error}`);
    }
    res.redirect(`/login`);
};

//consulta get
export const get = async (req, res) => {
    try {
        const objetosCons = await BD.getAll(); // array de usuarios
        console.log(objetosCons);
        // PASAR OBJETO: la clave objetosCons será la variable en EJS
        res.render(`${nombreP}/Lista`, { objetosCons });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error al obtener la lista de socios");
    }
};

//consulta update
export const parch = async (req, res) => {
    try {
        const { nombre, fecha_vinculacion, direccion, telefono } = req.body;
        const codigo = req.session.usuario.cedula; // suponiendo que el código identifica al socio

        console.log(codigo);
        // Buscar al socio por código para validar existencia
        const socioExistente = await BD.findById(codigo);
        if (!socioExistente) {
            return res.status(404).send("Socio no encontrado");
        }

        // Construir objeto con solo los campos enviados
        const data = {};
        if (nombre) data.nombre = nombre;
        if (fecha_vinculacion) data.fecha_vinculacion = fecha_vinculacion;
        if (direccion) data.direccion = direccion;
        if (telefono) data.telefono = telefono;

        // Actualizar usando BD.put
        const socioActualizado = await BD.put(codigo, data);

        req.session.usuario = socioActualizado.toJSON();

        if (socioActualizado.tipo_usuario === "SOCIO") {
            res.render("panelSocio", {
                usuario: req.session.usuario,
                panelInfo: req.session.panelInfo,
            });
        } else {
            res.render("adminPanel", {
                usuario: req.session.usuario,
                panelInfo: req.session.panelInfo,
            });
        }
    } catch (err) {
        console.error(err);
        res.status(500).send(`Error al actualizar socio: ${err.message}`);
    }
};

//delete de socio
export const deleter = (req, res) => {
    const { codigo } = req.body;

    BD.delete(codigo);

    console.log("SOCIO eliminado:");

    res.send("Socio eliminado correctamente");
};
