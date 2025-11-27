import { config } from 'dotenv'

config()

// export const PORT = /*process.env.PORT ||*/ 3000; 
// export const DB_HOST = /*process.env.DB_HOST ||*/ 'localhost';
// export const DB_USER =  /*process.env.DB_USER ||*/ 'root';
// export const DB_PASSWORD = /*process.env.DB_PASSWORD ||*/ ''; 
// export const DB_PORT = /*process.env.DB_PORT ||*/ 3306;
// export const DB_DATABASE = /*process.env.DB_DATABASE ||*/ 'club_yates_db';

<<<<<<< HEAD
export const PORT = /* process.env.PORT || */ 3000; 
export const DB_HOST = /* process.env.DB_HOST || */ 'localhost';
export const DB_USER =  /* process.env.DB_USER || */ 'root';
export const DB_PASSWORD = /* process.env.DB_PASSWORD | */ ''; 
export const DB_PORT = /* process.env.DB_PORT || */ 3306;
export const DB_DATABASE = /* process.env.DB_DATABASE || */ 'club_yates_db';
=======
// export const PORT = process.env.PORT || 3000; 
// export const DB_HOST = process.env.DB_HOST || 'localhost';
// export const DB_USER =  process.env.DB_USER || 'root';
// export const DB_PASSWORD = process.env.DB_PASSWORD || ''; 
// export const DB_PORT = process.env.DB_PORT || 3306;
// export const DB_DATABASE = process.env.DB_DATABASE || 'club_yates_db';

export const {
    PORT = 3000,
    DB_HOST = 'localhost',
    DB_USER = 'root',
    DB_PASSWORD = '',
    DB_PORT = 3306,
    DB_DATABASE = 'club_yates_db',
} = process.env;
>>>>>>> fd49a41e360bb559db876267125bd956c43e5fb6
