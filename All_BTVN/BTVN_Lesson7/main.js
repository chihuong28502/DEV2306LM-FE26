
// var array = [1,5,9,100,55,66,66,66,4,5,66,65,66,76,109,23,66,34,23,43,34];
var array = [1,1,1,1,1,2,3,4,1,2,2,3,4,5,6,7,8,9,0]

// Bài 2 đếm số lần suất hiện của 66


// var sum = 0;
// var x= 66;
// for(var i=0; i<array.length;i++){
//     if(array[i] == x){
//         sum++
//     }
// }
// console.log("Phần tử "+x+" xuất hiện "+sum+" lần");



//BTVN3: log ra màn hình số lần xuất hiện của mỗi phần tử có giá trị khác nhau 
 // > phần tử có giá trị là 1 xuất hiện 1 lần
 //  > phần tử có giá trị là 5 xuất hiện 1 lần
 // > phần tử có giá trị là 55 xuất hiện 2 lần
// debugger


var sortArr = array.sort();
var i = 0;
var newArr = []
var newArr = [sortArr[0]]
for(i; i<array.length; i++) {
    var count=0;
    for(var j = 1; j<array.length-1;j++){
        if(array[i] == array[j]){
            count++
        }
    }
}

for (let i = 0; i < sortArr.length; i++) {
    if (sortArr[i] !== sortArr[i - 1]) {
    newArr.push(sortArr[i])
}
}
for(let i = 0; i < newArr.length; i++){
    console.log(newArr[i] + "" + count )
}


    
    

// var sum = 0;
// var x= 66;
// for(var i=0; i<array.length;i++){
//     if(array[i] == x){
//         sum++
//     }
// }
// console.log("Phần tử "+x+" xuất hiện "+sum+" lần");

    /*Tạo hàm đếm số lần xuất hiện của một phần tử trong mảng JavaScript*/





/*đếm số lần xuất hiện của các phần tử duy nhất*/
