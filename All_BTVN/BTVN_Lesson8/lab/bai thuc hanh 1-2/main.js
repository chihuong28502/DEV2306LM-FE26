

function check(){
    var userName = document.getElementById('userName');
    var password = document.getElementById('password');
    var txtNotifyUser = document.getElementById('txtNotifyUser');
    var txtNotifyPass = document.getElementById('txtNotifyPass');
    
    if(userName.value === ""){
        txtNotifyUser.innerHTML = 'nhập tên';
        txtNotifyUser.className="error";
        userName.focus();
    }else if(password.value == ""){
        txtNotifyPass.innerHTML = 'nhập password';
        txtNotifyPass.className="error";
        password.focus();
    }else{
        alert("login success")
    }
    
}