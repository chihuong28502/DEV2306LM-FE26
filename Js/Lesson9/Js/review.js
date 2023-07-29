var list =[
    {
        thanh_pho:"HN",
        arrQuan :[
            {
                quan: "thanh xuân 1",
                arrPhuong : [
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 1"
                    }
                ]
            },
            {
                quan: "thanh xuân 2",
                arrPhuong : [
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 1"
                    }
                ]
            },
            {
                quan: "thanh xuân 3",arrPhuong : [
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 1"
                    }
                ]
            }
        ]
    },
    {
        thanh_pho:"HN",
        arrQuan :[
            {
                quan: "thanh xuân 1",
                arrPhuong : [
                    {
                        phuong : "phuong 1"
                    },
                    {
                        phuong : "phuong 12"
                    },
                    {
                        phuong : "phuong 1"
                    }
                ]
            },
            {
                quan: "thanh xuân 21",
                arrPhuong : [
                    {
                        phuong : "phuong 121"
                    },
                    {
                        phuong : "phuong 111"
                    },
                    {
                        phuong : "phuong 1111"
                    }
                ]
            },
            {
                quan: "thanh xuân 31",
                arrPhuong : [
                    {
                        phuong : "phuong 21"
                    },
                    {
                        phuong : "phuong 31"
                    },
                    {
                        phuong : "phuong 41"
                    }
                ]
            }
        ]
    },
    {
        thanh_pho:"HN1",
        arrQuan :[
            {
                quan: "thanh xuân 145",
                arrPhuong : [
                    {
                        phuong : "phuong 154"
                    },
                    {
                        phuong : "phuong 134"
                    },
                    {
                        phuong : "phuong 134"
                    }
                ]
            },
            {
                quan: "thanh xuân 223",
                arrPhuong : [
                    {
                        phuong : "phuong 123"
                    },
                    {
                        phuong : "phuong 1343"
                    },
                    {
                        phuong : "phuong 1343"
                    }
                ]
            },
            {
                quan: "thanh xuân 334",arrPhuong : [
                    {
                        phuong : "phuong 13434"
                    },
                    {
                        phuong : "phuong 1343434"
                    },
                    {
                        phuong : "phuong 12323"
                    }
                ]
            }
        ]
    }
]
const listTemp = [];


for(var i = 0; i<list.length ; i++){
    for(var j = 0; j < list[i].arrQuan.length;j++){
        for(var k = 0; k<list[i].arrQuan[j].arrPhuong.length;k++){
            let objTemp = {};
            objTemp.tenTP = list[i].thanh_pho;
            objTemp.tenQuan = list[i].arrQuan[j].quan;
            objTemp.tenPhuong = list[i].arrQuan[j].arrPhuong[k].phuong;
            listTemp.push(objTemp);
        }
    }
}
function search(name ){
    for( let i = 0; i < listTemp.length; i++){
        if(listTemp[i].tenPhuong ===  name){
            
            console.log(listTemp[i].tenQuan + "" + listTemp[i].tenTP)
        }
    }
    
}
var x = search("phuong 123")

