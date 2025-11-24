import { UsuarioMysqlRepository } from "../repository/mysql/UsuarioMysqlRepository.js";
import { Usuario } from "../model/Usuario.js";

const nombreP = "empleado";
const BD = new UsuarioMysqlRepository();

export const autenticarUsuario = async function (req, res) {
    const { mail, contrasena } = req.body;

    try {
        if (!mail || !contrasena)
            throw new Error("El mail y la contraseña son obligatorios");

        const user = await BD.validarUsuarioContrasena(mail, contrasena);

        //console.log(user.toJSON());

        if (user.tipo_usuario === 'SOCIO') {
            return res.render("panelSocio");
        } else {
            return res.render("panelAdmin");
        }

    } catch (error) {
        console.log(error);

        return res.status(400).json({ mensaje: error.message });
    }
};
