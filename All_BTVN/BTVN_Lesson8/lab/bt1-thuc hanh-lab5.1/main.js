function check(){
    var password= document.form.password.value;
    if(form.userName.value ==""){
        alert("điền tên");
    }else if(password.length>= 8 && form.userName.value != ""){
        alert("mat khau dung , ten dung");

    }else if(password.length < 8){
        alert("sai mk")
    }
}

