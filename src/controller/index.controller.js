import { UsuarioMysqlRepository } from "../repository/mysql/UsuarioMysqlRepository.js";
import { Usuario } from "../model/Usuario.js";

const BD = new UsuarioMysqlRepository();

export const autenticarUsuario = async function (req, res) {
    const { mail, contrasena } = req.body;

    try {
        if (!mail || !contrasena)
            throw new Error("El mail y la contraseña son obligatorios");

        const user = await BD.validarUsuarioContrasena(mail, contrasena);

        req.session.usuario = user.toJSON();

        if (user.tipo_usuario === "SOCIO") {
            req.session.panelInfo = {
                titulo: "Panel Socio",
                link_panel: "/socio/panel",
                secciones: [
                    {
                        titulo: "Amarres",
                        botones: [
                            {
                                nombre: "Zonas",
                                link: "/zona/lista",
                            },
                            {
                                nombre: "Estadísticas",
                                link: "",
                            },
                        ],
                    },
                    {
                        titulo: "Gestion",
                        botones: [
                            {
                                nombre: "Usuarios",
                                link: "",
                            },
                            {
                                nombre: "Reportes",
                                link: "",
                            },
                            {
                                nombre: "Registros",
                                link: "",
                            },
                        ],
                    },
                    {
                        titulo: "Cuenta",
                        botones: [
                            {
                                nombre: "Actualización",
                                link: "/socio/informacion",
                            },
                        ],
                    },
                ],
            };
            return res.redirect("/socio/panel");
        } else {
            req.session.panelInfo = {
                titulo: "Panel de Administrador",
                link_panel: "/admin/panel",
                secciones: [
                    {
                        titulo: "Inicio",
                        botones: [
                            {
                                nombre: "Amarres",
                                link: "/amarre/lista",
                            },
                            {
                                nombre: "Yates",
                                link: "/yate/lista",
                            },
                        ],
                    },
                    {
                        titulo: "Gestion",
                        botones: [
                            {
                                nombre: "Zonas",
                                link: "/zona/lista",
                            },
                            {
                                nombre: "Empleados",
                                link: "/funcionNoTerminada",
                            },
                            {
                                nombre: "Ventas",
                                link: "/funcionNoTerminada",
                            },
                            {
                                nombre: "Servicios",
                                link: "/funcionNoTerminada",
                            },
                            {
                                nombre: "Ventas",
                                link: "/funcionNoTerminada",
                            },
                        ],
                    },
                    {
                        titulo: "Cuenta",
                        botones: [
                            {
                                nombre: "Actualización",
                                link: "/socio/informacion",
                            },
                        ],
                    },
                ],
            };
            return res.redirect("/admin/panel");
        }
    } catch (error) {
        console.log(error);
        return res.status(400).json({ mensaje: error.message });
    }
};

export const getPanelSocio = async (req, res) => {
    console.log("SESION:", req.session);
    console.log("USUARIO:", req.session.usuario);
    console.log("INFO PANEL: ", req.session.panelInfo);

    res.render("panelSocio", {
        usuario: req.session.usuario,
        panelInfo: req.session.panelInfo,
    });
};

export const getPanelAdmin = async (req, res) => {
    console.log("SESION:", req.session);
    console.log("USUARIO:", req.session.usuario);
    console.log("INFO PANEL: ", req.session.panelInfo);

    res.render("adminPanel", {
        usuario: req.session.usuario,
        panelInfo: req.session.panelInfo,
    });
};

export const funcionNoTerminada = async (req, res) => {
    res.render('funcionNoTerminada', { 
        usuario: req.session.usuario,
        panelInfo: req.session.panelInfo,
    });
}