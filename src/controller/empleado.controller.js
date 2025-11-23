
import {EmpleadoMysqlRepository} from '../repository/mysql/EmpleadoMysqlRepository.js'

import { Usuario } from '../model/Usuario.js';
const nombreP="empleado"; 
const BD = new EmpleadoMysqlRepository();


//req a server 
export const mostrarFormulario=(req, res) => {
    res.render(`${nombreP}/Formulario`);
    
};
export const mostrarLista=(req,res) =>{
    //mi solucion seria: carga la pagina sin valores, poner un boton y formulario y ahi si hacer la consulta despues del get
    res.render(`${nombreP}/Lista`, { objetosCons: [] }); // inicial vacío
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
    const {
    id_empleado,
    cedula,
    nombre,
    salario,
    direccion,
    telefono,
    correo}=req.body;
    const nuevo_Usuario = new Empleado({
        id_empleado,
        cedula,
        nombre,
        salario,
        direccion,
        telefono,
        correo
    });
    BD.save(nuevo_Usuario);
    res.redirect(`/${nombreP}/main`);
} 
//consulta get
export const get=async(req,res)=>{
   try {
    const objetosCons = await BD.getAll(); // array de usuarios
    console.log(objetosCons);
    // PASAR OBJETO: la clave objetosCons será la variable en EJS
    res.render(`${nombreP}/Lista`, { objetosCons }); 
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener la lista de socios");
  }
}

//consulta update
export const parch = async (req, res) => {
  const { nombre, cedula, fecha_vinculacion, direccion, telefono } = req.body;
  const codigo = req.body.cedula; // suponiendo que el código identifica al socio

  try {
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

    res.send({
      message: "Socio actualizado correctamente",
      socio: socioActualizado
    });
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error al actualizar socio: ${err.message}`);
  }
};

//delete de socio
export const deleter=(req, res) => {
    const { codigo } = req.body;
    
    BD.delete(codigo);

    console.log("SOCIO eliminado:" );

    res.send("Socio eliminado correctamente");
};



