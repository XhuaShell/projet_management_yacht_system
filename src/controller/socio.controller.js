
import {UsuarioMysqlRepository} from '../repository/mysql/UsuarioMysqlRepository.js'

import { Usuario } from '../model/Usuario.js';
const nombreP="socio"; 
const BD = new UsuarioMysqlRepository();


//req a server 
export const mostrarFormulario=(req, res) => {
    res.render(`${nombreP}/Formulario`);
    
};
export const mostrarLista=(req,res) =>{
    //mi solucion seria: carga la pagina sin valores, poner un boton y formulario y ahi si hacer la consulta despues del get
    res.render(`${nombreP}/Lista`)
}
export const mostrarActualizacion=(req,res)=>{
    res.render(`${nombreP}/FormularioEdicion`)
}
export const mostrarEliminacion=(req,res)=>{
    res.render(`${nombreP}/Deleter`)
}
export const mostrarmain=(req,res)=>{
    res.render(`${nombreP}/main`)
}



//req a BD
export const create=async(req,res) => {
    const {codigo,nombre,cedula,fecha_vinculacion,direccion,telefono,contraseña,email}=req.body;
    const nuevo_Usuario = new Usuario({
        cedula: String(cedula),
        nombre,
        direccion,
        telefono,
        fecha_vinculacion,
        contrasena: String(contraseña),
        mail: email,   // porque tu constructor lo exige
        tipo_usuario: "SOCIO" // si quieres
    });
    BD.save(nuevo_Usuario);
    res.redirect(`/${nombreP}/main`);
} 
//consulta get
export const get=(req,res)=>{
    const objetosCons=BD.getAll;
    res.render(`${nombreP}/Lista`,{objetosCons});
}

//consulta update
export const parch=(req, res) => {
    const {nombre, cedula, fecha_vinculacion, direccion, telefono } = req.body;
    const codigo= req.body.cod;
    // Buscar el socio por código (convertir a número si tu código es número)
    const indice = socios.findIndex(s => s.codigo == codigo);

    if (indice === -1) {
        return res.send("Socio no encontrado");
    }

    // Modificar SOLO si el dato fue enviado y no está vacío
    if (nombre) socios[indice].nombre = nombre;
    if (cedula) socios[indice].cedula = cedula;
    if (fecha_vinculacion) socios[indice].fecha_vinculacion = fecha_vinculacion;
    if (direccion) socios[indice].direccion = direccion;
    if (telefono) socios[indice].telefono = telefono;

    console.log("SOCIO ACTUALIZADO:", socios[indice]);

    res.send("Socio actualizado correctamente");
};

//delete de socio
export const deleter=(req, res) => {
    const { codigo, nombre, cedula, fecha_vinculacion, direccion, telefono } = req.body;

    // Buscar el socio por código (convertir a número si tu código es número)
    const indice = socios.findIndex(s => s.codigo == codigo);

    if (indice === -1) {
        return res.send("Socio no encontrado");
    }

    socios.splice(indice,1);

    console.log("SOCIO eliminado:", socios[indice] );

    res.send("Socio eliminado correctamente");
};



