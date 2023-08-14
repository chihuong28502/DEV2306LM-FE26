
// btvn: tạo 1 arrayobject  về 3 thành phố - mỗi tp lấy 3 quận huyện 
// - mỗi quận huyện gồm 3 phường
// viết funtion: khi nhập tên phường => log ra tên quận huyện - thành phố tương ứng

const listCity = 
[
    {
        nameCity: "Hà Nội",
        Huyen: [{
            tenHuyen: 'Phúc Thọ',
            listTenXa: [{
                tenXa:  'Liên Hiệp'
            },
            {
                tenXa: 'Tam Hiệp'
            },
            {
                tenXa: 'Hiệp Thuận'
            }]
        },
        {
            tenHuyen:'Thanh Xuân',
            listTenXa: [{
                tenXa:'Thanh Xuân Nam'
            },
            {
                tenXa:'Thanh Xuân Bắc'
            },
            {
                tenXa:'Thanh Trì'
            }]
        },
        {
            tenHuyen:'Mỹ Đình',
            listTenXa: [{
                tenXa:'Xa1_Mỹ Đình'
            },
            {
                tenXa:'Xa2_Mỹ Đình'
            },
            {
                tenXa:'Xa3_Mỹ Đình'
            }]
        }]
    },
    {
        nameCity:'city1',
        Huyen:[
            {
                tenHuyen:'huyen1_city1',
                listTenXa:[
                    {
                        tenXa: 'Xa1_huyen1_city1'
                    },
                    {
                        tenXa: 'Xa2_huyen1_city1'
                    },
                    {
                        tenXa: 'Xa3_huyen1_city1'
                    }]
            },
            {
                tenHuyen:'huyen2_city1',
                listTenXa:[
                    {
                        tenXa:'Xa1_huyen2_city1'
                    },
                    {
                        tenXa:'Xa2_huyen2_city1'
                    },
                    {
                        tenXa:'Xa3_huyen2_city1'
                    }]
            },
            {
                tenHuyen:'huyen3_city1',
                listTenXa:[
                    {
                        tenXa:'Xa1_huyen3_city1'
                    },
                    {
                        tenXa: 'Xa2_huyen3_city1'
                    },
                    {
                        tenXa:'Xa3_huyen3_city1'
                    }]
            }]
    },
    {
        nameCity:'city2',
        Huyen:[
            {
                tenHuyen:'huyen1_city2',
                listTenXa:[
                    {
                        tenXa:'Xa1_huyen1_city2'
                    },
                    {
                        tenXa:'Xa2_huyen1_city2'
                    },
                    {
                        tenXa: 'Xa3_huyen1_city2'
                    }
                ]
            },
            {
                tenHuyen:'huyen2_city2',
                listTenXa:[
                    {
                        tenXa:'Xa1_huyen2_city2'
                    },
                    {
                        tenXa:'Xa2_huyen2_city2'
                    },
                    {
                        tenXa:'Xa3_huyen2_city2'
                    }
                ]
            },
            {
                tenHuyen:'huyen3_city2',
                listTenXa:[
                    {
                        tenXa:'Xa1_huyen3_city2'
                    },
                    {
                        tenXa:'Xa2_huyen3_city2'
                    },
                    {
                        tenXa:'Xa3_huyen3_city2'
                    }
                ]
            }]
    }
]
// city>huyen>listTenXa>tenxa

// nhập vào ten THÀNH PHỐ show ra all tên thành phố , huyện , xã
function getLocation(x){
    for(let i=0; i<listCity.length; i++){
        for(let j=0; j<listCity[i].Huyen.length; j++){
            for(let k=0; k<listCity[i].Huyen[i].listTenXa.length; k++){
                if(listCity[i].nameCity === x){
                    console.table("Thành phố: "+listCity[i].nameCity+" / "+ listCity[i].Huyen[j].tenHuyen+"/"+listCity[i].Huyen[j].listTenXa[k].tenXa)
                }
            }
        } 
    }
}
getLocation("Hà Nội")



// nhập tên phường show ra thành phố và huyện
function getLocation2(x){
    for(let i=0; i<listCity.length; i++){
        for(let j=0; j<listCity[i].Huyen.length; j++){
            for(let k=0; k<listCity[i].Huyen[j].listTenXa.length; k++){
                if(listCity[i].Huyen[j].listTenXa[k].tenXa === x){
                    console.table("Xã: "+x+"/ thuộc huyện: "+listCity[i].Huyen[j].tenHuyen+"/ thành phố: "+listCity[i].nameCity)
                }
            }
        } 
    }
}
getLocation2('Liên Hiệp')


const listCity2 = 
[
    {
        nameCity: "Hà Nội",
        Huyen: [{
            tenHuyen: 'Phúc Thọ',
            listTenXa: ['Phúc Thọ1','Phúc Thọ2','Phúc Thọ3']
        },
        {
            tenHuyen:'Thanh Xuân',
            listTenXa: ['Thanh Xuân1','Thanh Xuân2','Thanh Xuân3']
        },
        {
            tenHuyen:'Mỹ Đình',
            listTenXa: ['Mỹ Đình1','Mỹ Đình2','Mỹ Đình3']
        }]
    },
    {
        nameCity:'city1',
        Huyen:[
            {
                tenHuyen:'huyen1_city1',
                listTenXa:['huyen1_city1_Xa1','huyen1_city1_Xa2','huyen1_city1_Xa3']
            },
            {
                tenHuyen:'huyen2_city1',
                listTenXa:['huyen2_city1_Xa1','huyen2_city1_Xa2','huyen2_city1_Xa3']
            },
            {
                tenHuyen:'huyen3_city1',
                listTenXa:['huyen3_city1_Xa1','huyen3_city1_Xa2','huyen3_city1_Xa3']
            }]
    },
    {
        nameCity:'city2',
        Huyen:[
            {
                tenHuyen:'huyen1_city2',
                listTenXa:['huyen1_city2_Xa1','huyen1_city2_Xa2','huyen1_city2_Xa3']
            },
            {
                tenHuyen:'huyen2_city2',
                listTenXa:['huyen2_city2_Xa1','huyen2_city2_Xa2','huyen2_city2_Xa3']
            },
            {
                tenHuyen:'huyen3_city2',
                listTenXa:['huyen3_city2_Xa1','huyen3_city2_Xa2','huyen3_city2_Xa3']
            }]
    }
]
// nhập vào ten Huyện  show ra all tên thành phố   xã
function getLocation3(x){
    for(let i=0; i<listCity2.length; i++){
        for(let j=0; j<listCity2[i].Huyen.length; j++){
            for(let k=0; k<listCity2[i].Huyen[i].listTenXa.length; k++){
                if(listCity2[i].Huyen[j].tenHuyen === x){
                    console.log("Huyện: "+listCity2[i].Huyen[j].tenHuyen+"\nThuộc thành phố: "+listCity2[i].nameCity+"\nGồm các xã: "+listCity2[i].Huyen[j].listTenXa)
                }
            }
        }
    }

}
getLocation3("huyen1_city2")



