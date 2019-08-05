var express = require('express');
var router = express.Router();
var database = require('../database/database');
var fs = require('fs');

router.get('./generateReport', generateReportHubFun);

pgdbconnect.query("SELECT rm_ch_report_id,rm_ch_report_name,rm_report_file_sys_details->'sqlfilename' as sqlfilename,rm_report_file_sys_details->'reporttitle' as reporttitle from public.report_maintenance",function(err, reportList){
    if(err){
        console.error('Error with table query', err);
    }
    else{
        if(reportList.rowCount!=0){
            list = reportList.rows;
            console.log("List", list);
            var list_count = reportList.rowCount;
            console.log("list_count", list_count);
        }
        res.render('reportHub/reportsList', {
            list:list,
            list_count:list_count,
            headerlist:0,
            rowcnt:0,datalist:0,
            title:0
        });
    }
});
router.post('./reportHub',function(req,res){
    var filename = req.body.filename;
    var title = req.body.reportfileName;
    var edate = req.body.EndDate;
    var sdate = req.body.StartDate;

    console.log("file name",filename);
    console.log("hi date from file",sdate);
    console.log("hi date empIdModal",edate);
    console.log("hi file name",title);

    var filepath1='C:/Users/trainee/Desktop/mypacs/PACS/sql_files/';
    filepath1+=filename;
    console.log("hi filename",title);
    var sql1 = fs.readFileSync(filepath1).toString();
    console.log(sql1);
    var data='001';
    var sdate = '13-11-2040';
    var edate = '7-4-2079';

       console.log("dates getting passed");
       console.log("sdateedate 1st",sdate);
       console.log("eedate 1st",edate);
   
       database.query(sql1,[sdate,edate],function(err,reportList)){
        if (err) 
        {
            console.error('Error with table try method query', err);
        } 
        else 
        {
            console.log("to hit the  try method query",reportList )
           if(reportList.rowCount!=0)
           {                  
            list=reportList.rows 
            console.log("start:::::::::",Object.keys(list).length);
            headerarr=[];
             for(var j=0;j<1;j++)
             { if(list.hasOwnProperty(j))
                { for(var prop in list[j]){
                     if(list[j].hasOwnProperty(prop))
                { console.log(prop);
                     headerarr.push(prop)  ; 
            }               
             } 
            } 
        }
        headerarr1=[];
        console.log("headers length",headerarr.length);
        for(var obj in list)
        { if(list.hasOwnProperty(obj))
           { for(var prop in list[obj]){
                if(list[obj].hasOwnProperty(prop))
           { 
            headerarr1.push(prop);  
       }
       
        } 
        console.log("header length",)
       } 
   } 
console.log("midddddddddd:::::::::");
        dataarr=[];
        for(var obj in list)
        { if(list.hasOwnProperty(obj))
           { for(var prop in list[obj]){
                if(list[obj].hasOwnProperty(prop))
           { 
            dataarr.push(list[obj][prop]);   
       }
        } 
       } 
   }   console.log("enddddd:::::::::");

   console.log("headerlist1",headerarr1);
        console.log("rwcount",reportList.rowCount);
        console.log(Object.keys(list).length);

        console.log("headerarr1",headerarr);
        console.log("datalist",dataarr);

        tarr=[];
       for(var h=0;h<headerarr.length;h++){
                for(var i=0;i<dataarr.length;i++){
                tarr.push([headerarr1[h],dataarr[i]])
            h=i+1;
            }
        }
         console.log("qqqqqqqqqqqqq",tarr)
         console.log("ttttttttttt",headerarr.length,reportList.rowCount)
       res.render('reportHub/pdf',{
           title:title,
           headerlist:headerarr,
            datalist:dataarr,
            headerlist1:headerarr1,
            rowcnt:reportList.rowCount,
            tdcnt:headerarr.length,
            tarr:tarr
       });
            }
            }
       });
    });
    
module.exports=router;

  

})