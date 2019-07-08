var express=require('express');

var router = express.Router();


router.post('/table_add',function(req,res){


    res.render('table_add',{eml:email,passw:passwd, dat:date});

});

module.exports=router;
//Meta Mask Wallet -puzzle over candy excuse warrior enough fiction grace grant layer salmon gossip