
let curArray= [5, 2, 3, 5, 2, 3, 2, 4,4,4,4,4];
const array = curArray.sort()


function loopThrough(array , value) {
        let  count =0;
        for (let i = 0; i < array.length; i++){
            if(array[i] == value){
                count++;
            }
        }
        
        console.log("số "+ value +" xuât hiện "+ count +" lần");
}

var newArr = array.reduce(arrayHandler ,[]);
function arrayHandler(accumulator, element){
    if(accumulator.indexOf(element) === -1){
        accumulator.push(element)
    }
    return accumulator

}



for(var j = 0 ; j<newArr.length;j++){
    loopThrough(array,newArr[j]);
}



