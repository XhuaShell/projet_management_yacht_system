
import {AmarreMysqlRepository} from '../repository/mysql/AmarreMysqlRepository.js'

import { Amarre } from '../model/Amarre.js';
const nombreP="amarre"; 
const BD = new AmarreMysqlRepository();


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
    num_amarre,
    id_zona,
    usuario_propietario_cedula,
    fecha_compra
    }=req.body;

    const amarre = new Amarre({
    num_amarre: Number(req.body.num_amarre),
    id_zona: req.body.id_zona,
    usuario_propietario_cedula: req.body.usuario_propietario_cedula, 
    fecha_compra: req.body.fecha_compra
    });

    BD.save(amarre);
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
    res.status(500).send("Error al obtener la lista de Amarre");
  }
}

//consulta update
export const parch = async (req, res) => {
  const {
    id_zona,
    usuario_propietario_cedula,
    fecha_compra
    } = req.body;
  const codigo = req.body.num_amarre; // suponiendo que el código identifica al socio

  try {
    // Buscar al socio por código para validar existencia
    const socioExistente = await BD.findByNum(codigo);
    if (!socioExistente) {
      return res.status(404).send("Amarre no encontrado");
    }

    // Construir objeto con solo los campos enviados
    const data = {};
    if (id_zona) data.id_zona = id_zona; 
    if (usuario_propietario_cedula) data.usuario_propietario_cedula = usuario_propietario_cedula;
    if (fecha_compra) data.fecha_compra = fecha_compra;

    // Actualizar usando BD.put
    const AmarreActualizado = await BD.put(codigo, data);

    res.redirect(`/${nombreP}/main`)
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error al actualizar Empleado: ${err.message}`);
  }
};

//delete de socio
export const deleter=(req, res) => {
    const { codigo } = req.body;
    
    BD.delete(codigo);

    console.log("Amarre eliminado:" );

    res.send("Amarre eliminado correctamente");
};



