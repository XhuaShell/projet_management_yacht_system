import {yates} from '../repository/pruebaArray.js';

export const getSocio=(req, res) => {
    const dato=req.body;
    console.log(dato);
    res.send(`Socio ${dato.nombre}`);
};

export const createSocio=(req,res) => {
    const {}=req.body;


} 