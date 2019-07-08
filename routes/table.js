var express=require('express');

var router = express.Router();

router.post('/table', function(req,res){
    res.render(table);
});

router.get('/table',function(req,client,res){
    // var select_body = req.body_selec_body;
    // var lower_body = req.body_lwe_lmt;
    // var upper_body = req.body.upr_limit;
    // var acc_num = req.body.acc_num;


    // console.log("select_account", select_body);
    // console.log("lower_limit", lower_body);
    // console.log("upper_limit", upper_body);
    // console.log("acc_num",acc_num);


    // client.query('SELECT * from account_renewal_detail' ,function(err,result) {
        
    //     done(); // closing the connection;
    //     if(err){
    //         console.log("err");
    //         res.status(400).send();
    //     }
    //    console.log('account_renewal_details', rest);

    //    req.flash("Success Message", "Data inserted Successfully");
    //    req.locals.message = new flash();

    //    res.render('table',{
    //        pageType:divtype
    //    });
      
    
// var acc_renew_acc_mem_search = req.body.acc_renew_acc_typ_sear;
// var acc_renew_renew_date = req.body.acc_renew_renew_date;
// var acc_renew_renew_amount = req.body.acc_renew_renew_amount;
// var acc_renew_install_amount = req.body.acc_renew_install_amount;

// console.log("Renewal Details", acc_renew_acc_mem_search, acc_renew_renew_date,acc_renew_install_amount,acc_renew_renew_amount );

// res.render('table',{renew:acc_renew_acc_mem_search,date:acc_renew_renew_date,amt:renew_amount,install:acc_renew_install_amount});


//       });


    
//     res.render('table',{body:select_body,lb:lower_body,up:upper_body,acnm:acc_num});


router.post('/table', function(req,res){
var divtype = req.query.key; 
console.log("DIV TYPE", divtype);

var account_name = req.body.ad_ch_name;
var account_number= req.body.ad_n_acct_number;
var acc_status = req.body.ad_ch_acct_status;
var acc_curr_balance = req.body.ad_n_current_bal;

console.log("Renewal Details", account_name, account_number,acc_status,acc_curr_balance );

res.render('table',{name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance,pagetype:divtype});
    });
// router.post()
});

router.post('/')


module.exports=router;