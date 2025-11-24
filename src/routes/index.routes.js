import { Router } from "express";
import { autenticarUsuario } from "../controller/index.controller.js";

const router = Router();

router.get("/", (req, res) => res.render("index"));
router.get("/login", (req, res) => res.render("login"));

router.post("/autenticar/login", autenticarUsuario);

export default router;
