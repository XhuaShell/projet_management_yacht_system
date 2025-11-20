import express from 'express';
import { PORT } from './config.js' 

import { amarreRouter } from './routes/amarre.routes.js'
import { asignacionRouter } from './routes/asignacion.routes.js'
import { clubRouter } from './routes/club.routes.js'
import { empleadoRouter } from './routes/empleado.routes.js'
import { formsRouter } from './routes/forms.routes.js'
import { indexRouter } from './routes/index.routes.js'
import { pagoRouter } from './routes/pago.routes.js'
import { socioRouter } from './routes/socio.routes.js'
import { yateRouter } from './routes/yate.routes.js'

export const app = express();

app.use(amarreRouter);
app.use(asignacionRouter);
app.use(clubRouter);
app.use(empleadoRouter);
app.use(formsRouter);
app.use(indexRouter);
app.use(pagoRouter);
app.use(socioRouter);
app.use(yateRouter);

app.listen(PORT, () => console.log(`Escuchando en el puerto ${PORT}`));

