import { Router } from "express";
import { autenticarUsuario, getPanelAdmin, getPanelSocio } from "../controller/index.controller.js";

const router = Router();

router.get("/", (req, res) => res.render("index"));
router.get("/login", (req, res) => res.render("login"));

router.post("/autenticar/login", autenticarUsuario);

// Peticiones de usuarios logueadas
router.get('/socio/panel', getPanelSocio)
router.get('/admin/panel', getPanelAdmin)

export default router;
