function Export2Doc(element, filename = reptitle){
  
    var preHtml = "<html xmlns:o='urn:schemas-microsoft-com:office:office' xmlns:w='urn:schemas-microsoft-com:office:word' xmlns='http://www.w3.org/TR/REC-html40'><head><meta charset='utf-8'><title>Export HTML To Doc</title></head><body>";
    var postHtml = "</body></html>";
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