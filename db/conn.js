//importing packages
const mySql = require("mysql2");

//creating connection
const pool = mySql.createPool({
  host: "localhost",
  user: process.env.USER,
  port: process.env.DBPORT,
  database: process.env.DATABASE,
  password: process.env.PASSWORD,
});
pool.getConnection((err, connection) => {
  if (err) {
    console.error("Error connecting to the database:", err.message);
  } else {
    console.log(
      "Connection to the database has been established successfully!"
    );
    connection.release(); // Release the connection back to the pool
  }
});
module.exports = pool;
