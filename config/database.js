const { Pool } = require('pg');
require('dotenv').config();

if (!process.env.DB_URL) {
  throw new Error('DB_URL no esta definid en la variable de Entorno');
}

const pool = new Pool({
  connectionString: process.env.DB_URL,
  ssl: {
    rejectUnauthorized: false
   }
});

pool.connect()
  .then(() => console.log('La coneccion fue exitosa'))
  .catch((err) => {
    console.error('La Coneccion a la base de datos fallo:', err.stack);
    process.exit(1);
  })

module.exports = { pool };
