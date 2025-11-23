import { createPool } from 'mysql2/promise';
import {DB_DATABASE, DB_PASSWORD, DB_USER, DB_PORT, DB_HOST} from '../../config.js';

export const pool = createPool({
    hostname: DB_HOST,
    port: DB_PORT,
    user: DB_USER,
    database: DB_DATABASE,
    password: DB_PASSWORD,
})
