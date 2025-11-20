import express from 'express';
import { pool } from './db.js'

const app = express();

app.get('/ping', async (req, res) => {
    const result = await pool.query("SELECT 1 + 1 AS result");
    res.json(result[0])
})

app.get('/empleados', (req, res) => res.send('Obteniendo datos'));
app.post('/empleados', (req, res) => res.send('Agregando datos'));
app.put('/empleados', (req, res) => res.send('Actualizando datos'));
app.delete('/empleados', (req, res) => res.send('Eliminando datos'));

app.listen(3000);

