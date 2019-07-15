function numeric(empod){
    var charCode = (empod.which) ? empod.which :empod.l=keyCode;
    if(charCode != 48 && charCode >57 )
    return false;
    
}
function alpha(alpbts){
    var charCode = (alpbts.which) ? alpbts.which : alpbts.keyCode;
    if(charCode >31 && charCode <65 || charCode >90  && charCode <97 || charCode >122 &&charCode >47 || charCode <58)
    return false;
}
function openingAmount(empcd){
    var charCode = (empcd.which) ? empcd.which : empcd.keyCode;
    if(charCode != 48 && charCode >31 && (charCode <46 || charCode >57))
    return false;
    return true;
}
function clearEditAmount(){
    document.getElementById('acc_edit_mem_sear_ed').value="";
    document.getElementById('acc_mem_id').value="";
    document.getElementById('acc_edit_instal_amount_ed').value="";
    document.getElementById('renewal_edit').value="";

}
function add_account_limit(){
    var acc_type = document.getElementById("sel_acct").value;
    if(acc_type == ""){
        document.getElementById("sel_acct").focus();;;;
        return false;
    }
}
   function Submit(){
       if(acc_type == ""){

       }
   } 



