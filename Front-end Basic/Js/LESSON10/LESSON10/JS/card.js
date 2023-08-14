var listProduct = [
    {
        id : 1,
        title : "Sản phẩm 1",
        price : 100000,
        priceView:100.000,
        quantity :1,
        Image: "../Image/x.png",
        quality: 3
    },
    {
        id : 2,
        title : "Sản phẩm 2",
        price : 200000,
        priceView:"200.000",
        quantity :1,
        Image: "../Image/x.png",
        quality: 2
    },
    {
        id : 3,
        title : "Sản phẩm 3",
        price : 300000,
        priceView: "300.000",
        quantity :1,
        Image: "../Image/x.png",
        quality: 4
    },
    {
        id : 4,
        title : "Sản phẩm 4",
        price : 400000,
        priceView: "400.000",
        quantity :1,
        Image: "../Image/x.png",
        quality: 4
    }
]
function renderHtml(obj){
    var item= `
        <div class="item border-1 id-${obj.id}" data-id="${obj.id}">
            <div class="d-flex justify-between" id="product-${obj.id}">
                <div class="image-item w-23">
                    <img class="w-100" src="${obj.Image}" alt="">
                </div>
                <div class="title-item w-23">
                    <h3>${obj.title}</h3>
                </div>
                <div class="price-item w-23">
                    <span class = "item-price" id="product-price-${obj.id}" data-price ="${obj.price}">${obj.priceView}</span>
                </div>
                <div class="quantity-item w-23">
                    <button class="sub-1" style="padding: 0 1.5rem;">-1</button> 
                    <span class="item-quantity" id="product-quantity-${obj.id}">${obj.quantity}</span> 
                    <button id="xoa">xóa</button>
                    <button class="add-1" data-quality="${obj.quality}" style="padding: 0 1.5rem;">+1</button>
                </div>
            </div>
        </div>
    `
    $('.list-item').append(item);
}
function handleShowHtml(){
    for(var i=0; i<listProduct.length; i++){
        renderHtml(listProduct[i]);
    }
    handleSumPrice(listProduct)
}
handleShowHtml()
function handleSumPrice(arr){
    var sum = 0 ;
    var price = 0;
    var quantity =0;
    var total = 0;
    
    for(let i =1 ; i <= arr.length; i++){
        quantity = document.querySelector("#product-quantity-"+ i).textContent;
        price = document.querySelector("#product-price-"+ i).attributes.getNamedItem("data-price").value;
        priceView = document.querySelector("#product-price-"+ i).textContent;     
            
        total = price * parseInt(quantity);
        totalNew = total.toLocaleString("VND", {style:"currency", currency:"VND"});
        $("#product-price-"+ i).text(totalNew)
        sum = sum + total;
    }
    var formatSumPrice = sum.toLocaleString("jp-JP", {style:"currency", currency:"VND"})
    $('.total-price').text(formatSumPrice);
    
}

$('.add-1').click(function(){
    var quantity = $(this).siblings('span').text();
    var limitUpper = this.attributes.getNamedItem("data-quality").value;
    console.log('limitUpper: ', limitUpper)
    if(parseInt(quantity) >= limitUpper){
        quantity = limitUpper
    }else{
        quantity = parseInt(quantity) + 1;
    }
    $(this).siblings('span').text(quantity);
    handleSumPrice(listProduct);
})

$('.sub-1').click(function(){
    var quantity = $(this).siblings('span').text(); // quantity = 0
    var selectParentItem = this.parentElement.parentElement.parentElement;
    var select = selectParentItem.attributes.getNamedItem("data-id").value;
    if((parseInt(quantity) < 1)){
        listProduct = listProduct.filter(function(x){

            return x.id != select;
        });
        $('.list-item').html("");
        handleShowHtml()
        handleSumPrice(listProduct)
    }else{
        quantity =(parseInt(quantity) - 1)
    }
    
    $(this).siblings('span').text(quantity);
    handleSumPrice(listProduct);

})

// btvn: xây dựng giỏ hàng dựa theo data có sẵn
// chức năng: tính tổng sp, tăng giảm số lượng theo từng sản phẩm được
//            chặn trên (không được thêm quá số lượng sp limit)
//            khi hiển thị tổng tiền: format giá về dạng 1.000; 2.000.000
//            xóa sản phẩm khỏi giỏ hàng: gợi ý dùng hàm removeHtml()
//            *) đảm bảo sau khi tính tiền thì giá phải khớp với 
                //giao diện hiện tại
