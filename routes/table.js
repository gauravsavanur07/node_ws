var express = require('express');
var database = require('../database/database');
var moment = require('moment');
var router = express.Router();

router.get('/', function (_req, res, _next) {
    database.connect(function (err, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        database.query('SELECT * from account_details', function (_req, result) {
            // closing the connection;
            if (err) {
                console.log(err);
                console.log("null ");
                res.status(400).send();
            }
            var len = result.rows.length;
            var cand = result.rows
            console.log(len);
            if (len > 0) {

                var cd = JSON.stringify(cand);




                // var account_name = result.rows[1].ad_ch_name;
                // var account_number = result.rows[1].ad_n_acct_number;
                // var acc_status = result.rows[1].ad_ch_acct_status;
                // var acc_curr_balance = result.rows[1].ad_n_current_bal;
                // var acc_type = result.rows[1].ad_ch_acct_type;
                // var open_date = result.rows[1].ad_ch_current_type;
                // var close_date = result.rows[1].ad_d_last_tran_date;

                //Account Edit



            }


            console.log("Renewal Details", cd);
            console.log("details", cand);

            // res.render('table',{result:stringfy,accdetails:account_id,name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance});
            res.render('table', { r: cd, qw: cand ,moment:moment});
        });

    });
});
router.get('/table_edit', function (_req, res, _next) {
    database.connect(function (err, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }
        database.query('SELECT * from account_details', function (_req, result) {
            // closing the connection;
            if (err) {
                console.log(err);
                console.log("null ");
                res.status(400).send();
            }
            var len = result.rows.length;
            var cand = result.rows
            console.log(len);
            if (len > 0) {

                var cd = JSON.stringify(cand);




                // var account_name = result.rows[1].ad_ch_name;
                // var account_number = result.rows[1].ad_n_acct_number;
                // var acc_status = result.rows[1].ad_ch_acct_status;
                // var acc_curr_balance = result.rows[1].ad_n_current_bal;
                // var acc_type = result.rows[1].ad_ch_acct_type;
                // var open_date = result.rows[1].ad_ch_current_type;
                // var close_date = result.rows[1].ad_d_last_tran_date;

                //Account Edit



            }


            console.log("Renewal Details", cd);
            console.log("details", cand);




            // res.render('table',{result:stringfy,accdetails:account_id,name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance});
            res.render('table', { r: cd, qw: cand ,moment:moment});

        });

    });
});

// router.get('/table_add', function (_req, res, _next) {
//     database.connect(function (err, done) {
//         if (err) {
//             console.log("not able to get connection " + err);
//             res.status(400).send(err);
//         }
//         database.query('SELECT * from account_details', function (_req, result) {
//             // closing the connection;
//             if (err) {
//                 console.log(err);
//                 console.log("null ");
//                 res.status(400).send();
//             }
//             var len = result.rows.length;
//             var cand = result.rows
//             console.log(len);
//             if (len > 0) {

//                 var cd = JSON.stringify(cand);




//                 // var account_name = result.rows[1].ad_ch_name;
//                 // var account_number = result.rows[1].ad_n_acct_number;
//                 // var acc_status = result.rows[1].ad_ch_acct_status;
//                 // var acc_curr_balance = result.rows[1].ad_n_current_bal;
//                 // var acc_type = result.rows[1].ad_ch_acct_type;
//                 // var open_date = result.rows[1].ad_ch_current_type;
//                 // var close_date = result.rows[1].ad_d_last_tran_date;

//                 //Account Edit



//             }


//             console.log("Renewal Details", cd);
//             console.log("details", cand);




//             // res.render('table',{result:stringfy,accdetails:account_id,name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance});
//             res.render('table', { r: cd, qw: cand,moment:moment });

//         });
//     });
// });

router.post('/', function (req, res) {
    


    database.connect(function (err, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }




        var account_name = req.body.name;
        var number = req.body.number;
        var acc_status = req.body.status;
        var acc_curr_balance = req.body.balance;
        var acc_type = req.body.type;
        var open_date = req.body.open_date;
        var close_date = req.body.close_date;

        database.query('insert into  account_details("account_name,number,acc_status,acc_curr_balance,acc_type,open_date,close_date) values($1,$2,$3,$4,$5,$6,$7)",[account_name,number,acc_status,acc_curr_balance,acc_type,open_date,close_date]', function (_req, result) {

            

            res.render('table', { name: account_name, number: number, balance: acc_curr_balance, status: acc_status, type: acc_type, open: open_date, close: close_date,moment:moment });
        });
    });
})

//table_add :

//Inserting values Database  Add Btn 
router.post('/table_add', function (req, res) {
    
   
    database.connect(function (err, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }




        var account_name = req.body.name;
        var number = req.body.number;
        var status = req.body.status;
        var balance = req.body.balance;
        var type = req.body.type;
        var open_date = req.body.open_date;
        var close_date = req.body.close_date;

        var jsonString = '{"user_name" : account_name, "number": number, "status":status, balance:"balance", type:"type", open_date:"open_date", close_date:"close_date"}';

        database.query('insert into  account_details("account_name,number,status,balance,type,open_date,close_date) values($1,$2,$3,$4,$5,$6,$7)",[account_name,number,status,balance,type,open_date,close_date]', function (_req, result) {

            // req.flash('success_msg', 'Record Added Successfully');
            // res.locals.message = req.flash();

            res.render('table_add', { name: account_name, number: number, balance: balance, status: status, type: type, open: open_date, close: close_date,moment:moment,jsp:jsonString });
        });
    });
})

//edit tale 
//Inserting Values into a table EDIT Button 
router.post('/table_edit', function (req, res) {
    var divtype = 'EDIT';
    console.log("DIV_TYPE", divtype);

    database.connect(function (err, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }


        var account_name = req.body.name;
        var number = req.body.number;
        var acc_status = req.body.status;
        var acc_curr_balance = req.body.balance;
        var acc_type = req.body.type;
        var open_date = req.body.open_date;
        var close_date = req.body.close_date;

        console.log("Account Details", account_name, number, acc_status, acc_curr_balance, acc_type, open_date, close_date)

        database.query('insert into  account_details(account_name,number,acc_status,acc_curr_balance,acc_type,open_date,close_date) values($1,$2,$3,$4,$5,$6,$7),[account_name,number,acc_status,acc_curr_balance,acc_type,open_date,close_date]', function (err, result) {

            console.log("Account Details");

            req.flash('success_msg', 'Record Deleted Successfully');
            res.locals.message = req.flash();

            res.render('table', { pagetype: divtype,moment:moment });
        });
    });
});
//Deleting Values from the table 
router.post('./table_delete', function (req, res) {
    var number = req.body.number;
    database.query("update account_details set number = $1 order by id", ['N'], function (err, searchres) {
        // req.flash('success_msg', 'Record Deleted Successfully');
        // res.locals.message = req.flash();
        res.render('/table', {
            num: searchres,
            nums: number,
            moment:moment
        });
    });
});

router.post('./table_search', function (req, res) {
    console.log("Search Particular Record");
    var account_name = req.body.name;
    var number = req.body.number;
    var acc_status = req.body.status;
    var acc_curr_balance = req.body.balance;
    var acc_type = req.body.type;
    var open_date = req.body.open_date;
    var close_date = req.body.close_date;

    if (account_name != "" && number != "" && acc_status && acc_curr_balance && acc_type && open_date && close_date) {
        account_name = req.body.name;
        number = req.body.number;
        acc_status = req.body.status;
        acc_curr_balance = req.body.balance;
        acc_type = req.body.type;
        open_date = req.body.open_date;
        close_date = req.body.close_date;
    }
    else if (account_name != '' && number == '' && acc_status == '' && acc_curr_balance == '' && acc_type == '' && close_date == "select") {
        account_name = req.body.name;
        number = null;
        acc_status = null;
        acc_curr_balance = null;
        acc_type = null;
        open_date = null;
        close_date = null;

    }
    else if (
        account_name = 'Select' && number != '' && acc_status != '' && acc_renw_date_and == '' && acc_renw_mem_id == 'Select') {
        account_name = null;
        number = req.body.number;
        acc_status = null;
        acc_curr_balance = null;
        acc_type = null;
        open_date = null;
        close_date = null;
    }
    else if (account_name = 'Select' && number == '' && acc_status != '' && acc_curr_balance != '' && open_date == 'Select' && close_date == '') {
        account_name == null;
        number == null;
        acc_status = req.body.status;
        acc_curr_balance = req.body.balance;
        acc_type = null;
        open_date == null;
        close_date == null;
    }
    else if(account_name == 'Select' && number == '' && acc_status == '' && acc_curr_balance == '' && open_date == '') {
        account_name = req.body.name;
        number = req.body.number;
        acc_status = null;
        acc_curr_balance = null;
        open_date = null;

    }
     else if (account_name != '' && number == '' && acc_status == '' && acc_curr_balance == '' && open_date == '' && close_date == 'Select') {
        account_name = req.body.account_name;
        number = req.body.number;
        acc_status = null;
        open_date = null;
        close_date = null;


    }
    else if (account_name == 'Select' && number == '' && acc_status != ' ' && open_date != '' && close_date != '') {
        account_name = null;
        number = null;
        acc_status = null;
        acc_curr_balance = null;
        open_date = req.body.open_date;
        close_date = req.body.close_date;

    }
    else if (account_name == 'Select' && number != '' && acc_status != '' && acc_curr_balance != '' && open_date != '' && close_date != 'Select') {
        account_name = null;
        number = req.body.number;
        acc_status = req.body.status;
        acc_curr_balance = req.body.balance;
        open_date = req.body.open_date;
        close_date = req.body.close_date;
    }

    database.query("select * from account_details where (account_name = $1 or number = $2 or (open_date between $3 and $4)or close_date = $5)", [account_name, number, status, acc_curr_balance, acc_type, open_date, close_date], function (err, searchres) {
        // req.flash('success_msg', 'Record Found Successfully');
        // res.locals.message = req.flash();
        res.render('table', {
            acc: searchres.rows,
            moment:moment
        })
    })




});


module.exports = router;