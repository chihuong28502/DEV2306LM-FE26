var formatSdt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
var formatGmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


function checkEmail() {
    const email = document.getElementById('txtEmail');
    const noticeEmail = document.getElementById('noticeEmail');
    if(email.value.match(formatGmail)){
        noticeEmail.innerHTML = "Email ok"
    }else if(email.value === ""){
        noticeEmail.innerHTML = "Email rỗng"
    }else{
        noticeEmail.innerHTML = "Sai định dạng"

    }
}
function checkTel() {
    const tel = document.getElementById('txtTel');
    const noticeTel = document.getElementById('noticeTel');
    if(tel.value.match(formatSdt)){
        formatSdt.innerHTML = "Số điện thoại  ok"

    }else if(tel.value == ""){
        noticeTel.innerHTML = "Số điện thoại rỗng";
    }else{
        noticeTel.innerHTML = "Sai định dạng số điện thoại";
    }
}
function checkUser(){
    const userName = document.getElementById('txtUserName');
    const noticeName = document.getElementById('noticeName');

    if(userName.value == ""){
        noticeName.innerHTML= "Nhập tên";
    }else{
        noticeName.innerHTML= "ok";
    }
}
function checkPass(){
    const password = document.getElementById('txtPass');    
    const noticePass = document.getElementById('noticePass');
    
    if(password.value == ""){
        noticePass.innerHTML= "Nhập mật khẩu";
    }else if(password.value.length <7){
        noticePass.innerHTML= "Ngắn";
    }else{
        noticePass.innerHTML= "ok";
        
    }
}
