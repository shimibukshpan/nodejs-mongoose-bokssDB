const mysql      = require('mysql');
let connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'forms'
});
 
const conectStatus = function(error){
    if(error){
        console.error('error conection' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
}
connection.connect(conectStatus);

module.exports = connection;
