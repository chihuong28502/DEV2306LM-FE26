
// var array = [1,5,9,100,55,66,66,66,4,5,66,65,66,76,109,23,66,34,23,43,34];
var array1 = [1,1,1,1,1,2,3,4,1,2,2,3,4,5,6,7,8,9,0]
var array = array1.sort()
// Bài 2 đếm số lần suất hiện của 66


var sum = 0;
var x= 1;
for(var i=0; i<array.length;i++){
    if(array[i] == x){
        sum++
    }
}
console.log("Phần tử "+x+" xuất hiện "+sum+" lần");

