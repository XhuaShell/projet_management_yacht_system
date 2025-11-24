
import {TipoYateMysqlRepository} from '../repository/mysql/TipoYateMysqlRepository.js'
const nombreP="tipoyate"; 
import { TipoYate } from '../model/TipoYate.js';
const BD = new TipoYateMysqlRepository();


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
    id_tipo,
    nombre,
    descripcion
    }=req.body;
    const nuevo_Usuario = new TipoYate({
    id_tipo:Number(id_tipo),
    nombre,
    descripcion
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
    res.status(500).send("Error al obtener la lista de Empleados");
  }
}

//consulta update
/*  export const parch = async (req, res) => {
  const { 
    nombre,
    descripcion
      } = req.body;

  const codigo = req.body.id_tipo; // suponiendo que el código identifica al socio
      console.log(codigo)
    // Buscar al socio por código para validar existencia
    const socioExistente = await BD.findById(codigo);
    if (!socioExistente) {
      return res.status(404).send("Tipo no encontrado");
    }

    // Construir objeto con solo los campos enviados
    const data = {};
    if (nombre) data.nombre = nombre; 
    if (descripcion) data.descripcion = descripcion;

    // Actualizar usando BD.put
    const empleadoActualizado = await BD.put(codigo, data);

    res.redirect(`/${nombre}/main`)
 
}; */

//delete de socio
export const deleter=(req, res) => {
    const { codigo } = req.body;
    
    BD.deleteById(codigo);

    console.log("Empleado eliminado:" );

    res.send("Empleado eliminado correctamente");
}; 



