const mysql = require('mysql');

const mysqlConnection = mysql.createConnection({
    host: '10.40.2.64',
    user: 'root',
    password: 'N3CR02M4!',
    database: 'pruebasApiRest'
});

mysqlConnection.connect(function(err){

    if(err){
console.log(err);
return;
    }else{
        console.log('Db is connected')
    }

});
module.exports = mysqlConnection;