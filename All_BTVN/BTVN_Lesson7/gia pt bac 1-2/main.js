const a = prompt("a:");
const b = prompt("b:");
const c = prompt("c:");
if(a == 0){
    ptb1(b,c)
}else{
    ptb2(a,b,c)
}
function ptb1(b,c){
    if(b == 0){
        if(c==0){
            document.write("vô số nghiệm")
        }else{
            document.write("ko có nghiệm")
        }
    }else{
        var nghiem = (-b/c)
        document.write("nghiệm là: " + nghiem)
    }
}
function ptb2(a,b,c){
    var alpha = b*b -4*a*c;
    if(alpha<0){
        document.write("pt bac 2 vô nghiệm")
    }else if(alpha>0){
        document.write("2 nghiệm :<br> X1="+((-b+Math.sqrt(alpha))/(2*a)))
        document.write("<br> X2="+((-b-Math.sqrt(alpha))/(2*a)))

    }

}

