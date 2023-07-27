var number = "";
var pheptinh = "";
function getValue(val){
    num = document.getElementById('number').value;
    document.getElementById('number').value =num + "" +val;
}
function pheptoan(val){
    number = document.getElementById('number').value;
    document.getElementById('number').value ="";
    pheptinh = val;
}
function ketqua(){
    ketquaTinh = 0;
    switch(pheptinh){
        case "+":
            ketquaTinh = parseInt(number) + parseInt(document.getElementById('number').value);
        break;
        case "-" :
            ketquaTinh = parseInt(number) - parseInt(document.getElementById('number').value);
        break;
        case "*" :
            ketquaTinh = parseInt(number) * parseInt(document.getElementById('number').value);
        break;
        case "/" :
            ketquaTinh = parseInt(number) / parseInt(document.getElementById('number').value);
        break;
    }
    document.getElementById("number").value =ketquaTinh;
}
function reset(){
    number= "";
    pheptinh= "";
    document.getElementById("number").value ="";
}