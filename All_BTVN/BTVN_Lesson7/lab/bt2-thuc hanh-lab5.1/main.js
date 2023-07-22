
var array= [0,1,2,3,4,5,6,7,8,9]
function check(arr){
    const Arr =[]
    for(var i=0; i<arr.length; i++){
        Arr.push(i)
        const newStr = Arr.join("");    
        document.write(newStr + "<br>")    
    }
}
check(array)

