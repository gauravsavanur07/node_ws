var pg = require('pg');


var config = {
    user: 'postgres',
    database: 'postgres',
    password: 'NURTURE_123',
    host:'192.168.168.6',


}

var pool = new pg.Pool(config);


module.exports = pool;
