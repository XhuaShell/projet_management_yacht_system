
import {YateMysqlRepository} from '../repository/mysql/YateMysqlRepository.js'
import { TipoYateMysqlRepository } from '../repository/mysql/TipoYateMysqlRepository.js';
import { Yate } from '../model/Yate.js';

const nombreP="yate"; 
const BD = new YateMysqlRepository();
const BDTY= new TipoYateMysqlRepository();//consulta a la base de datos de los tipos de llate, para asi saber q tipos estan disponibles

//req a server 
export const mostrarFormulario = async (req, res) => {
  try {
    const tipos  = await BDTY.getAll(); // obtiene el array de tipos
    res.render(`${nombreP}/Formulario`, { tipos});
  } catch (err) {
    console.error(err);
    res.status(500).send("Error al cargar el formulario");
  }
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
    matricula,
    nombre,
    eslora,
    manga,
    calado,
    usuario_dueno_cedula,
    id_tipo,
    empleado_cargo
    }=req.body;
    const yate = new Yate({
    matricula: String(req.body.matricula),
    nombre: String(req.body.nombre),
    eslora: Number(req.body.eslora),
    manga: Number(req.body.manga),
    calado: Number(req.body.calado),
    usuario_dueno_cedula: String(req.body.usuario_dueno_cedula),
    id_tipo: Number(req.body.id_tipo),
    empleado_cargo: Number(req.body.empleado_cargo)
    });
    res.send(yate);

    BD.save(yate);
    /* res.redirect(`/${nombreP}/main`); */
} 
//consulta get
export const get = async (req, res) => {
  try {
    const objetosCons = await BD.getAll(); // array de yates
    console.log(objetosCons);

    // PASAR OBJETO: la clave objetosCons será la variable en EJS
    res.render(`${nombreP}/Lista`, { objetosCons });

  } catch (err) {
    console.error(err);
    res.status(500).send("Error al obtener la lista de Yates");
  }
}


//consulta update
export const patch = async (req, res) => {
  const {
    nombre,
    eslora,
    manga,
    calado,
    usuario_dueno_cedula,
    id_tipo,
    empleado_cargo
  } = req.body;

  const matricula = req.body.matricula; // suponiendo que la matrícula identifica al yate

  try {
    // Buscar el yate por matrícula para validar existencia
    const yateExistente = await BD.findByMatricula(matricula);
    if (!yateExistente) {
      return res.status(404).send("Yate no encontrado");
    }

    // Construir objeto con solo los campos enviados
    const data = {};
    if (nombre) data.nombre = nombre;
    if (eslora) data.eslora = Number(eslora);
    if (manga) data.manga = Number(manga);
    if (calado) data.calado = Number(calado);
    if (usuario_dueno_cedula) data.usuario_dueno_cedula = usuario_dueno_cedula;
    if (id_tipo) data.id_tipo = id_tipo;
    if (empleado_cargo) data.empleado_cargo = empleado_cargo;

    // Actualizar usando BD.put
    const yateActualizado = await BD.put(matricula, data);

    res.redirect(`/${nombreP}/main`);
  } catch (err) {
    console.error(err);
    res.status(500).send(`Error al actualizar Yate: ${err.message}`);
  }
};


//delete de socio
// Delete de Yate
export const deleter = (req, res) => {
    const { matricula } = req.body;

    BD.delete(matricula);

    console.log("Yate eliminado:", matricula);

    res.send("Yate eliminado correctamente");
};




