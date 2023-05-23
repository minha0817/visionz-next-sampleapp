import mysql from "mysql2";


const dbPool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "kimminha!24",
  database: "VisonZ_Practice",
}).promise();

console.log('DB Pool Created!!');
export default dbPool; 

