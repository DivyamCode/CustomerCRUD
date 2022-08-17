const mysql = require('mysql');
const con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"user"
});
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});
con.query("CREATE DATABASE IF NOT EXISTS user ", function (err, result) {
  if (err) throw err;
  console.log("Database created");
})

var sql1 = "CREATE TABLE IF NOT EXISTS user(id INT AUTO_INCREMENT PRIMARY KEY,name VARCHAR(255), email VARCHAR(255),phoneNo VARCHAR(20),posted_date DATETIME)";
con.query(sql1, function (err, result) {
    if (err) throw err;
    console.log("Table created");
})
module.exports = con;

