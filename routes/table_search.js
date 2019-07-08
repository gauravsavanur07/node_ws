var express=require('express');

var router = express.Router();


router.post('/table_search',function(req,res){


    res.render('table_search',{eml:email,passw:passwd, dat:date});

});

module.exports=router;