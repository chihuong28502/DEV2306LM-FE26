
let curArray= [5, 2, 3, 5, 2, 3, 2, 4,4,4,4,4];
const array = curArray.sort();

// function loopThrough(array , value) {
//         let  count =0;
//         for (let i = 0; i < array.length; i++){
//             if(array[i] == value){
//                 count++;
//             }
//         }
//         console.log("số "+ value +" xuât hiện "+ count +" lần");
// }

// var newArr = array.reduce(arrayHandler ,[]);
// function arrayHandler(accumulator, element){
//     if(accumulator.indexOf(element) === -1){
//         accumulator.push(element)
//     }
//     return accumulator

// }

// for(var j = 0 ; j<newArr.length;j++){
//     loopThrough(array,newArr[j]);
// }

// chữa
var max = array.length ;
var arrayTemp = [];
for(var i = 0; i<max ; i++){
    let check = true;
    for(var j = i ; j<max; j++) {
        if(array[i] ==array[j] && i != j) check = false;
    }
    if(check ) arrayTemp.push(array[i]);
    
}
var maxTemp = arrayTemp.length;
for(var i = 0; i< maxTemp ; i++){
    let count = 0;
    for(var j = 0 ;j< max;j++){
        if(arrayTemp[i] == array[j]){
            count++;
        }
    }
    console.log("phan tu "+arrayTemp[i]+" xuat hien "+count+" laan");
}

// if(arrayTemp.indexOf(array[i]) === -1){
//     arrayTemp.push(array[i])
// }

