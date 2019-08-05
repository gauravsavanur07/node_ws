function downloadCSV()(csv, filename){
    var csvFile;
    var downloadLink;

    csvFile = new Blob([csv], {type: "text/csv"});

    downloadLink = document.createElement("a");
    downloadLink.download = filename;

    downloadLink.download = filename;

    downloadLink.href = window.URL.createObjectURL(csvFile);

    downloadLink.click();



}

function exportTableToCSV(filename) {
    var csv = [];
    var rows = document.querySelectorAll("table tr");
    
    for (var i = 0; i < rows.length; i++) {
        var row = [], cols = rows[i].querySelectorAll("td, th");
        
        for (var j = 0; j < cols.length; j++) 
            row.push(cols[j].innerText);
        
        csv.push(row.join(","));        
    }

    // Download CSV file
    downloadCSV(csv.join("\n"), filename);
}

2

 function exportToExcel() {
        var tab_text = "<tr bgcolor='#87AFC6'>";
        var textRange; var j = 0, rows = '';
        tab = document.getElementById('student-detail');
        tab_text = tab_text + tab.rows[0].innerHTML + "</tr>";
        var tableData = $('#student-detail').DataTable().rows().data();
        for (var i = 0; i < tableData.length; i++) {
            rows += '<tr>'
                + '<td>' + tableData[i].value1 + '</td>'
                + '<td>' + tableData[i].value2 + '</td>'
                + '<td>' + tableData[i].value3 + '</td>'
                + '<td>' + tableData[i].value4 + '</td>'
                + '<td>' + tableData[i].value5 + '</td>'
                + '<td>' + tableData[i].value6 + '</td>'
                + '<td>' + tableData[i].value7 + '</td>'
                + '<td>' +  tableData[i].value8 + '</td>'
                + '<td>' + tableData[i].value9 + '</td>'
                + '<td>' + tableData[i].value10 + '</td>'
                + '</tr>';
        }
        tab_text += rows;
        var data_type = 'data:application/vnd.ms-excel;base64,',
            template = '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:x="urn:schemas-microsoft-com:office:excel" xmlns="http://www.w3.org/TR/REC-html40"><head><!--[if gte mso 9]><xml><x:ExcelWorkbook><x:ExcelWorksheets><x:ExcelWorksheet><x:Name>{worksheet}</x:Name><x:WorksheetOptions><x:DisplayGridlines/></x:WorksheetOptions></x:ExcelWorksheet></x:ExcelWorksheets></x:ExcelWorkbook></xml><![endif]--></head><body><table border="2px">{table}</table></body></html>',
            base64 = function (s) {
                return window.btoa(unescape(encodeURIComponent(s)))
            },
            format = function (s, c) {
                return s.replace(/{(\w+)}/g, function (m, p) {
                    return c[p];
                })
            }

        var ctx = {
            worksheet: "Sheet 1" || 'Worksheet',
            table: tab_text
        }
        document.getElementById("dlink").href = data_type + base64(format(template, ctx));
        document.getElementById("dlink").download = "StudentDetails.xls";
        document.getElementById("dlink").traget = "_blank";
        document.getElementById("dlink").click();
    }
function Export2Doc(element, filename = reptitle){
  
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</html></html>";
    var html = preHtml+document.getElementById(element).innerHTML+postHtml;
    
    var blob = new Blob(['\ufeff', html], {
    type: 'application/msword'
    });
    
    // Specify link url
    var url = 'data:application/vnd.ms-word;charset=utf-8,' + encodeURIComponent(html);
    
    // Specify file name
    filename = filename?filename+'.doc':'document.doc';
    
    // Create download link element
    var downloadLink = document.createElement("a");
    
    document.body.appendChild(downloadLink);
    
    if(navigator.msSaveOrOpenBlob ){
    navigator.msSaveOrOpenBlob(blob, filename);
    }else{
    
    downloadLink.href = url;
    
    downloadLink.download = document.getElementById('reptitle').value;
    
    downloadLink.click();
    }
    
    document.body.removeChild(downloadLink);
    }
