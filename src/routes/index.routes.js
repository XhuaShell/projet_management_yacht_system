import { Router } from "express";
import { ping } from '../controller/index.controller.js'

const router =  Router();

router.get('/index', (req, res) => {
   res.render('index')
    //res.render('index');
})

export default router;