import {yates} from '../repository/pruebaArray.js';
import {Socio} from '../model/socio.js'
import { render } from 'ejs';

//pagina
export const getFormularioSocio=(req, res) => {
    res.render('formulario')
};

export const createSocio=(req,res) => {
    const {codigo,nombre,cedula,fecha_vinculacion,direccion,telefono}=req.body;
    const nuevo_socio=new Socio(codigo,nombre,cedula,fecha_vinculacion,direccion,telefono);
    yates.push(nuevo_socio);
    console.log(yates);
    res.redirect('/index');
} 

export const getSocio=(req,res) =>{
    res.send(yates);
}