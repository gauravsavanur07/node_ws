var express=require('express');

var router = express.Router();

router.post('/page',function(req,res){


    var email=req.body.email;
    var passwd = req.body.pass;
    var date = req.body.date1;
    var age = req.body.age;
    
     console.log("sdfghj",passwd);
    if(email=="gauravsavanur07@gmail.com"&&passwd=="123456"){
    res.render('page',{eml:email,passw:passwd, dat:date});
}

})

module.exports=router;