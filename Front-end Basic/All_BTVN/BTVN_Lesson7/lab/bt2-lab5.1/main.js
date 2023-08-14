function check(){
    if(myform.age.value >=18){
        document.writeln("<P><H4><i>du tuoi</i></H4></P>"+ myform.name.value);
    }else{
        document.writeln("<P><H4><i>ko du tuoi</i></H4></P>"+ myform.name.value);

    }
}
function focusName(){
    if(myform.name.value == ""){
        alert("nhap ten")
        myform.name.focus(); 
        return false;
    }
}

