import express from "express";
import session from "express-session";
import ejs from "ejs";

import { PORT } from "./config.js";
import { fileURLToPath } from "url";
import { dirname } from "path";
import path from "path";

import amarreRouter from "./routes/amarre.routes.js";
import asignacionRouter from "./routes/asignacion.routes.js";
import indexRouter from "./routes/index.routes.js"; 
import socioRouter from "./routes/socio.routes.js";
import yateRouter from "./routes/yate.routes.js";
import zonaRouter from "./routes/zona.routes.js";
import tipoyateRouter from "./routes/tipoyate.routes.js";
import methodOverride from "method-override";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.use(
    session({
        secret: "tu_secreto",
        resave: false,
        saveUninitialized: false,
        cookie: { secure: false },
    })
);

app.use("/", indexRouter);

// Éste es in middleware global para exponer variables en las demás vistas
app.use((req, res, next) => {
    res.locals.usuario = req.session.usuario || null;
    res.locals.panelInfo = req.session.panelInfo || { secciones: [] };
    next();
});

app.use("/socio", socioRouter);
app.use("/yate", yateRouter);
app.use("/amarre", amarreRouter);
app.use("/asignacion", asignacionRouter);
app.use("/zona", zonaRouter);
app.use("/tipoyate", tipoyateRouter);

app.use("/public", express.static(path.join(__dirname, "public")));

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
