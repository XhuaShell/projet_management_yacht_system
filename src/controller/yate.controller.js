
import {YateMysqlRepository} from '../repository/mysql/YateMysqlRepository.js'
import { TipoYateMysqlRepository } from '../repository/mysql/TipoYateMysqlRepository.js';
import { Yate } from '../model/Yate.js';

const nombreP="yate"; 
const BD = new YateMysqlRepository();
const BDTY= new TipoYateMysqlRepository();//consulta a la base de datos de los tipos de llate, para asi saber q tipos estan disponibles
const tipos  = await BDTY.getAll();
//req a server 
export const mostrarFormulario = async (req, res) => {
  try {
     // obtiene el array de tipos
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
    res.render(`${nombreP}/FormularioEdicion`,{tipos})
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
    id_tipo: Number(req.body.id_tipo)

    });
    console.log("REQ BODY:", req.body);

    const saved = await BD.save(yate);
    console.log(yate);
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

  const matricula = req.body.matricula; // identificador del yate

  try {
    console.log("Actualizando yates con matrícula:", matricula);
    const yateExistente = await BD.findByMatricula(String(matricula));
    if (!yateExistente) return res.status(404).send("Yate no encontrado");

    const data = {};
    data.matricula=matricula;
    if (nombre) data.nombre = nombre;

    // Validación segura de campos numéricos
    if (eslora !== undefined && eslora !== "") {
      const esloraNum = Number(eslora);
      if (isNaN(esloraNum)) return res.status(400).send("La 200eslora debe ser un número");
      data.eslora = esloraNum;
    }

    if (manga !== undefined && manga !== "") {
      const mangaNum = Number(manga);
      if (isNaN(mangaNum)) return res.status(400).send("La manga debe ser un número");
      data.manga = mangaNum;
    }

    if (calado !== undefined && calado !== "") {
      const caladoNum = Number(calado);
      if (isNaN(caladoNum)) return res.status(400).send("El calado debe ser un número");
      data.calado = caladoNum;
    }

    if (usuario_dueno_cedula) data.usuario_dueno_cedula = usuario_dueno_cedula;
    if (id_tipo) data.id_tipo = Number(id_tipo);
    if (empleado_cargo) data.empleado_cargo = Number(empleado_cargo);
    console.log("Estoy antes de put y data.matricula es:",data.matricula);
    const yateActualizado = await BD.put(data);

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

    BD.deleteByMatricula(matricula);

    console.log("Yate eliminado:", matricula);

    res.send("Yate eliminado correctamente");
};




