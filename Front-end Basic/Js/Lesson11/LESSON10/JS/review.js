function demo(param1, param2){
    // input1 = 10
    // param1 = input1
    // ==> param1 = 10
    // input1 <=> param1  
    // input2 <=> param2
    console.log(param1);
    var obj = {
        id : 1,
        name : "javascript"
    };
    
}

// a = 10;
// b = a;
// ==> b = 10

demo(input1, input2); // ===> chạy xong hàm biến obj mới được khởi tạo


// đặt debbuger 
// => vào hàm nào đầu tiên  => thực thi những gì, gọi hàm nào tiếp theo
// ==> nắm được luồng hoạt động / thứ tự thực thi


// vận dụng vào xử lý tình huống
// yêu cầu: nắm được cơ bản
// Bước I: xây dựng được thứ tự thực thi / xây dựng logic xử lý tình huống
//      vd: tính 2 số a và b nhập vào từ 2 ô input
//      b1: lấy giá trị 2 ô input => khai báo ra 2 biến,
//          mỗi biến đón giá trị của 1 ô input;
//      b2: khai báo biến thứ 3 đồng thời gán nó bằng
//          giá trị 2 biến ở b1 (có convert về dạng số)
//      b3: in ra màn hình
// Bước II: Quy hoạch lại code => chia nhỏ thành các function
// Bước III: review & lược bỏ code ko cần thiết