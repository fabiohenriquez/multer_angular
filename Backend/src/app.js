var mysql = require('mysql2');

var conexion = mysql.createConnection({
    host: 'localhost',
    database:'futv',
    user: 'root',
    password: 'impactmobilefabiohenriquez'

});

conexion.connect(function(error){
  if(error){
    throw error;
  }else{
    console.log("Conexion exitosa");
  }

});

module.exports = conexion;
