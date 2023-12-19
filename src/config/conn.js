const mysql = require("mysql2");

require("dotenv").config();

const pool = mysql.createPool({
  host: process.env.HOST,
  user: process.env.USER,
  password: process.env.PASSWORD,
  port: 3306,
  database: process.env.DATABASE,
  connectionLimit: 10,
  waitForConnections: true,
  queueLimit: 0,
});

pool.getConnection((err, conn) => {
  if (err) {
    console.log("Hubo un error al conectarse a la DB" + err);
  } else {
    console.log("conexion a la Base de datos exitosa ");
    conn.release();
  }
});

module.exports = {
  conn: pool.promise(),
};
