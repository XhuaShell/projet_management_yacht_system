import { Router } from "express";
import { ping } from '../controller/index.controller'

const router =  Router();

router.get('/ping', ping())

export default router;