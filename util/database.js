const mysql = require('mysql2'); // stating this is using sql2

const pool = mysql.createPool({ //pulling from the local server
    host: 'localhost',
    user: 'root',
    database: 'node-complete',
    password: 'Davy892!'
});

module.exports = pool.promise(); 

