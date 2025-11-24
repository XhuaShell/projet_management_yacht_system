import express from "express";
import ejs from "ejs";



import { PORT } from "./config.js";
import { fileURLToPath } from 'url';
import { dirname } from "path";
import path from "path";

import amarreRouter from "./routes/amarre.routes.js";
import asignacionRouter from "./routes/asignacion.routes.js";
import clubRouter from "./routes/club.routes.js";
import empleadoRouter from "./routes/empleado.routes.js";
import formsRouter from "./routes/forms.routes.js";
import indexRouter from "./routes/index.routes.js";
import pagoRouter from "./routes/pago.routes.js";
import socioRouter from "./routes/socio.routes.js";
import yateRouter from "./routes/yate.routes.js";
import zonaRouter from "./routes/zona.routes.js";
import tipoyateRouter from "./routes/tipoyate.routes.js"
import methodOverride from "method-override";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride('_method'));

app.use(zonaRouter);
app.use(tipoyateRouter);
app.use(amarreRouter);
app.use(asignacionRouter);
app.use(clubRouter);
app.use(empleadoRouter);
app.use(formsRouter);
app.use(indexRouter);
app.use(pagoRouter);
app.use(socioRouter);
app.use(yateRouter);

app.use('/public', express.static(path.join(__dirname, "public")))

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));
