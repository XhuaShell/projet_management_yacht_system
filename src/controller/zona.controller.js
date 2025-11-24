import { ZonaMsqlRepository } from "../repository/mysql/ZonaMysqlRepository.js";

import { Zona } from "../model/Zona.js";
const nombreP = "zona";
const BD = new ZonaMsqlRepository();

//req a server
export const mostrarFormulario = (req, res) => {
    res.render(`${nombreP}/Formulario`);
};
export const mostrarLista = (req, res) => {
    //mi solucion seria: carga la pagina sin valores, poner un boton y formulario y ahi si hacer la consulta despues del get
    res.render(`${nombreP}/Lista`, {
        objetosCons: [],
        usuario: req.session.usuario,
        panelInfo: req.session.panelInfo,
    }); // inicial vacío
};
export const mostrarmain = (req, res) => {
    res.render(`${nombreP}/main`);
};

//req a BD
export const create = async (req, res) => {
    const {
        id_zona,
        cuota_administracion,
        capacidad,
        profundidad,
        dim_max_eslora,
        dim_max_manga,
        dim_max_calado,
        dim_min_eslora,
        dim_min_manga,
        dim_min_calado,
    } = req.body;
    const nuevo_Usuario = new Zona({
        id_zona,
        cuota_administracion,
        capacidad,
        profundidad,
        dim_max_eslora,
        dim_max_manga,
        dim_max_calado,
        dim_min_eslora,
        dim_min_manga,
        dim_min_calado,
    });
    BD.save(nuevo_Usuario);
    res.redirect(`/${nombreP}/main`);
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
        res.status(500).send("Error al obtener la lista de Empleados");
    }
};
