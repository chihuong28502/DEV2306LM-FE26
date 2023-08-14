// biến
// toán tử
// array
// cấu trúc ddkien rẽ nhánh , loop
// sử dụng function.

// hàm -- function
// chia nhỏ tác vụ => để dễ control và phát triển + tái sử dụng code

// tổng 2 số
function sum(a,b){
    var sum = parseInt(a)+ parseInt(b);
    console.log(sum)
}

// sum(1,'3')
// biến toàn cục vầ biến cục bộ
//syntax: khai báo + (function) ; cách sử dụng 


var array = [1,2,3,4,5,6,7,'9'];
function sumArr(arr){
    var sum = i = 0
    for(i; i < arr.length; i++){
        if(arr[i]%3 === 0 && typeof arr[i] === 'number'){
            sum +=  arr[i];
        }
    }
    console.log(sum)
}

// sumArr(array)


// định hình các bước cần thực hiện <xây dựng quy trình>
// tương ứng mỗi bước => 1 function
// các functions : tương tác với nhau => xác định được các ảnh hưởng của function 1 tới function 2
//                                    ==> đánh giá ảnh hưởng
// ==> SOLID




// DOM

var userInfor1 ={
    height: 171,
    address: "HN",
    name: "John",
    password: "1"
};

var userInfor2 ={
    height: 171,
    address: "HN",
    name: "test",
    password: "1"
};
var userInfor3 ={
    height: 171,
    address: "HN",
    name: "js",
    password: "1"
};
var listUserInfor = [userInfor1, userInfor2, userInfor3];
function getUserInfor(){
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    if(userName == '' || password == ''){
        alert("nhập thiếu")
    }else{
        let check = false;
        for(let i= 0; i<listUserInfor.length;i++){
            if(listUserInfor[i].name == userName &&listUserInfor[i].password == password){
                check = true;
            } 
        }
        if(check) alert("đúng");
        else alert("sai");
    }
    console.log('userName: ', userName)
    console.log('password: ', password)
}
// object
// syntax 
var obj = {
    username : 'test',
    password : '123456'
};
var obj1={};
obj1.username = "test1";
obj1.password = "12342";

// tương tác với object thông qua thuộc tính
// <tên obj>.<tên thuộc tính>.

var listObj = [obj, obj1]



// regex
// tách hàm
function preCheck(){
    var userName = document.getElementById('userName').value;
    var password = document.getElementById('password').value;
    if(userName == '' || password == ''){
        alert("nhập thiếu")
    
    }else{
        checkData(userName, password)
    }
}
function checkData(userName, password){
    let check = false;
        for(let i= 0; i<listUserInfor.length;i++){
            if(listUserInfor[i].name == userName &&listUserInfor[i].password == password){
                check = true;
            } 
        }
        if(check) alert("đúng");
        else alert("sai");
}
// btvn: tạo 1 arrayobject  về 3 thành phố - mỗi tp lấy 3 quận huyện 
// - mỗi quận huyện gồm 3 phường
// viết funtion: khi nhập tên phường => log ra tên quận huyện - thành phố tương ứng

