var pg = require('pg');

var config = {
    user: 'postgres',
    database: 'postgres',
    password: 'NURTURE_123',
    host:'192.168.168.6',


}
var pool = new pg.Pool(config);

pool.connect(function(err, client,done){
    if(err){
        console.log("error in connecting", err)
    }
    done();
});

module.exports = pool;