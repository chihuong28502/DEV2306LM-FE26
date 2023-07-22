// biến . quy tấc đặt tên
// các kiểu đật tên
// phân biệt hoa thường


// <datatype> <name-vari>;
// <datatype> <name-vari> = <value>;

// numner int float ....
// string
// mảng array,objects
// tự định nghĩa

var x = 2; // type of x = number
var y = "100"; // type of string = number

// Tương tác với biến
// + - * / % note -> với phép + :"dev" + "js" = "devjs";
//  phép toán so sánh < > <= >= == === 


// if else // switch case
// if (x == y) {
    
//     console.log("x trùng y")
// }else{

//     console.log("x= "+x+ " y = "+y)
// }
// var a = 0;
// var b = 0;
// console.log("a = "+a+"\nb= "+b)
// biện luận số nghiệm của phương trình bậc nhất 1 ẩn có dạng a*x+b =0

// if(a == 0) {
//     if(b == 0) {
//         console.log("phương trình vô số nghiệm");

//     }else{
//         console.log(" phương trình vô nghiệm");

//     }
// }else{
//     console.log("nghiệm của phương trình là (-b)/a = "+ -b/a);

// }
// 
// if(a == 0=== b  || b== 0) 
// {
//     console.log("phương trình vô số nghiệm");

// }
// else if(a == 0 ){
//     console.log(" phương trình vô nghiệm");
// }else {
    
//     console.log("nghiệm của phương trình là (-b)/a = "+ -b/a);
// }

// loop for ; while
// syntax:


// tất cả các số lẻ từ 0 =>20
// for(let i= 0 ;i<=100;i++){
//     if(i%5 == 0 ){
//         console.log(i)
//     }
// }


// array
// Khái niệm   là tập hợp các phần tử 
//                  giá trị index tương ưng từ 0 -> length-1 
//khai báo
// khai báo. sử dụng tương tác
var array = [1,5,9,100,55,66,66,66,4,5,66,65,66,76,109,23,66,34,23,43,34];
// đếm số lần suất hiện của 66
// đếm số lần suất hiện của các phần tử có giá trị khác nhau

  //BTVN3: log ra màn hình số lần xuất hiện của mỗi phần tử có giá trị khác nhau 
 // > phần tử có giá trị là 1 xuất hiện 1 lần
 //  > phần tử có giá trị là 5 xuất hiện 1 lần
 // > phần tử có giá trị là 55 xuất hiện 2 lần
// debugger;

// Bài 1 đếm số lần suất hiện của 66
var sum = 0;
var x= 66;
for(var i=0; i<array.length;i++){
    if(array[i] == x){
        sum++
    }
}
console.log("Phần tử "+x+" xuất hiện "+sum+" lần")

