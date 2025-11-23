import { Router } from "express";

import { getAmarres, postAmarre, deleteAmarre } from "../controller/amarre.controller.js";

const router =  Router();

//Meddleware

router.use( (req, res, next) => {
    tokenExist(req.body.token)
})

// Router
router.route('/amarre')
    .get(getAmarres)
    .post(postAmarre)
    .delete(deleteAmarre);

export default router;