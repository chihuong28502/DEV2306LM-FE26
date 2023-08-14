// tổng số chẵn số lẻ trong mảng gán làm biến riêng
var arr=[0,1,2,3,4,5,6,7,8,9]
var evenNumber =[];
var odd =[];

var sumEvenNumber=0;
var sumOdd = 0;
    for(let i=0; i<arr.length; i++){
        if(arr[i] %2 == 0){
            sumEvenNumber += arr[i];
            evenNumber.push(arr[i]);
        }else if(arr[i] %2 != 0){     
            odd.push(arr[i]);
            sumEvenNumber += arr[i];
        }
        
    }
    
    
    console.log("Số chẵn là: "+evenNumber+"\nTổng chẵn: "+sumEvenNumber+
    "\nSố lẻ là: "+odd+"\nTổng số lẻ: "+sumOdd) 