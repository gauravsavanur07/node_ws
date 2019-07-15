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
// router.post()




router.post('/table_add', function (req, res) {



    var id = req.body.ad_ch_acct_id;
    var name = req.body.ad_ch_name;
    var status = req.body.ad_ch_acct_status;
    var open_date = req.body.ad_ch_opn_date;
    var close_date = req.body.ad_d_last_tran_date;

    res.render('table_add', { id: id, name: name, stat: status, open: open_date, close: close_date });

})

router.post('/table_edit', function (req, res) {
    var divtype = req.query.key;
    console.log("DIV_TYPE", divtype);


    var account_name = req.body.ad_ch_name;
    var account_number = req.body.ad_n_acct_number;
    var acc_status = req.body.ad_ch_acct_status;
    var acc_curr_balance = req.body.ad_n_current_bal;
    var acc_type = req.body.ad_ch_acct_type;
    var open_date = req.body.ad_ch_current_type;
    var close_date = req.body.ad_d_last_tran_date;

    res.render('table_edit', { name: account_name, num: account_number, cur: acc_curr_balance, status: acc_status, dat: date, type: acc_type, open: open_date, close: close_date, pagetype: divtype });

})

module.exports = router;