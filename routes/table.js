var express = require('express');
var database = require('../database/database');
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
            console.log(len);
            if (len > 0) {

                var stringfy = JSON.stringify(result);



                var account_name = result.rows[0].ad_ch_name;
                var account_number = result.rows[0].ad_n_acct_number;
                var acc_status = result.rows[0].ad_ch_acct_status;
                var acc_curr_balance = result.rows[0].ad_n_current_bal;
                var acc_type = result.rows[0].ad_ch_acct_type;
                var open_date = result.rows[0].ad_ch_current_type;
                var close_date = result.rows[0].ad_d_last_tran_date;

                //Account Edit



            }


            console.log("Renewal Details", open_date, close_date, account_name, account_number, acc_status, acc_curr_balance, acc_type);

            // res.render('table',{result:stringfy,accdetails:account_id,name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance});
            res.render('table', { open: open_date, close: close_date, result: stringfy, name: account_name, number: account_number, status: acc_status, balance: acc_curr_balance, type: acc_type });
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
            console.log(len);
            if (len > 0) {

                var stringfy = JSON.stringify(result);



                var account_name = result.rows[0].ad_ch_name;
                var account_number = result.rows[0].ad_n_acct_number;
                var acc_status = result.rows[0].ad_ch_acct_status;
                var acc_curr_balance = result.rows[0].ad_n_current_bal;
                var acc_type = result.rows[0].ad_ch_acct_type;
                var open_date = result.rows[0].ad_ch_current_type;
                var close_date = result.rows[0].ad_d_last_tran_date;

                //Account Edit



            }


            console.log("Renewal Details", open_date, close_date, account_name, account_number, acc_status, acc_curr_balance, acc_type);

            // res.render('table',{result:stringfy,accdetails:account_id,name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance});
            res.render('table_edit', { open: open_date, close: close_date, result: stringfy, name: account_name, number: account_number, status: acc_status, balance: acc_curr_balance, type: acc_type });
        });

    });
});

router.get('/table_add', function (_req, res, _next) {
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
            console.log(len);
            if (len > 0) {

                var stringfy = JSON.stringify(result);



                var account_name = result.rows[0].ad_ch_name;
                var account_number = result.rows[0].ad_n_acct_number;
                var acc_status = result.rows[0].ad_ch_acct_status;
                var acc_curr_balance = result.rows[0].ad_n_current_bal;
                var acc_type = result.rows[0].ad_ch_acct_type;
                var open_date = result.rows[0].ad_ch_current_type;
                var close_date = result.rows[0].ad_d_last_tran_date;

                //Account Edit



            }


            console.log("Renewal Details", open_date, close_date, account_name, account_number, acc_status, acc_curr_balance, acc_type);

            // res.render('table',{result:stringfy,accdetails:account_id,name:account_name,date:account_number,amt:acc_status,install:acc_curr_balance});
            res.render('table', { open: open_date, close: close_date, result: stringfy, name: account_name, number: account_number, status: acc_status, balance: acc_curr_balance, type: acc_type });
        });

    });
});

router.post('/', function (req, res) {


    var divtype = req.query.key;
    console.log("DIV TYPE", divtype);

    var account_name = req.body.ad_ch_name;
    var account_number = req.body.ad_n_acct_number;
    var acc_status = req.body.ad_ch_acct_status;
    var acc_curr_balance = req.body.ad_n_current_bal;

    console.log("Renewal Details", account_name, account_number, acc_status, acc_curr_balance);

    res.render('table', { name: account_name, date: account_number, amt: acc_status, install: acc_curr_balance, pagetype: divtype });
})



//Inserting values Database  Add Btn 
router.post('/table_add', function (req, res) {
    var divtype = req.query.key;
    console.log("DIV_TYPE", divtype);

    database.connect(function (err, done) {
        if (err) {
            console.log("not able to get connection " + err);
            res.status(400).send(err);
        }



        var id = req.body.ad_ch_acct_id;
        var name = req.body.ad_ch_name;
        var status = req.body.ad_ch_acct_status;
        var open_date = req.body.ad_ch_opn_date;
        var close_date = req.body.ad_d_last_tran_date;

        database.query("INSERT into account_details(account_name,account_number,acc_status,acc_cur_balance,acc_type,open_date,close_dat) values($1,$2,$3,$4,$5,$6),[INSERT into account_details(account_name,account_number,acc_status,acc_cur_balance,acc_type,open_date,close_dat]", function (_req, result) {
            res.render('table_add', { pagetype: divtype, id: id, name: name, stat: status, open: open_date, close: close_date });

        });
    });
})


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
        var account_number = req.body.number;
        var acc_status = req.body.status;
        var acc_curr_balance = req.body.balance;
        var acc_type = req.body.type;
        var open_date = req.body.open_date;
        var close_date = req.body.close_date;

        database.query('INSERT INTO  account_details(account_name,account_number,acc_status,acc_cur_balance,acc_type,open_date,close_date) values($1,$2,$3,$4,$5,$6),[account_name,account_number,acc_status,acc_cur_balance,acc_type,open_date,close_date]', function (_req, result) {

            console.log("Account Details", res);
            res.render('table_edit', { pagetype: divtype, name: account_name, num: account_number, cur: acc_curr_balance, status: acc_status, dat: date, type: acc_type, open: open_date, close: close_date });
        });
    });
});


module.exports = router;