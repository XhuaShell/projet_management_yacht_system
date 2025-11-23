import {empleados} from '../repository/pruebaArray.js';
import {Empleado} from '../model/Empleado.js'
import { render } from 'ejs';


//req a server 
export const mostrarFormulario=(req, res) => {
    res.render('empleado/Formulario',)
};
export const mostrarLista=(req,res) =>{
    //mi solucion seria: carga la pagina sin valores, poner un boton y formulario y ahi si hacer la consulta despues del get
    res.render('empleado/Lista',{empleados})
}
export const mostrarActualizacion=(req,res)=>{
    res.render('empleado/FormularioEdicion')
}
export const mostrarEliminacion=(req,res)=>{
    res.render('empleado/Deleter')
}



//req a BD
export const create=(req,res) => {
    const {codigo,
        cedula,
        nombre,
        direccion,
        fecha_vinculacion,
        salario,
        telefono
    }=req.body;
    const nuevo_empleado=new Empleado(codigo,cedula,nombre,direccion,fecha_vinculacion,salario,telefono);
    empleados.push(nuevo_empleado);
    console.log(empleados);
    res.redirect('/empleado');
} 
//consulta get
export const getSocio=(req,res)=>{

}

//consulta update
export const parch=(req, res) => {
    const {cedula,nombre,direccion,fecha_vinculacion,salario,telefono} = req.body;
    const codigo= req.body.codigo;
    // Buscar el socio por código (convertir a número si tu código es número)
    const indice = empleados.findIndex(s => s.codigo == codigo);

    if (indice === -1) {
        return res.send("empleado no encontrado");
    }

    // Modificar SOLO si el dato fue enviado y no está vacío
    if (nombre) empleados[indice].nombre = nombre;
    if (cedula) empleados[indice].cedula = cedula;
    if (fecha_vinculacion) empleados[indice].fecha_vinculacion = fecha_vinculacion;
    if (direccion) empleados[indice].direccion = direccion;
    if (salario) empleados[indice].salario = salario;
    if (telefono) empleados[indice].telefono = telefono;

    console.log("Empleado ACTUALIZADO:", empleados[indice]);

    res.send("Empleado actualizado correctamente");
};

//delete de socio
export const deleter=(req, res) => {
    const { codigo, nombre, cedula, fecha_vinculacion, direccion, telefono } = req.body;

    // Buscar el socio por código (convertir a número si tu código es número)
    const indice = empleados.findIndex(s => s.codigo == codigo);

    if (indice === -1) {
        return res.send("empleados no encontrado");
    }

    empleados.splice(indice,1);

    console.log("empleado eliminado:", empleados[indice] );

    res.send("empleado eliminado correctamente");
};