let choice;
do{
    choice = prompt(
        `       ===========Menu===========
        1. Xem danh sách sản phẩm có sẵn trong cửa hàng.
        2. Chọn sản phẩm để mua bằng cách nhập tên sản phẩm.
        3. Tính tổng tiền và hiển thị hóa đơn.
        4. Thoát chương trình.`);
let products= [ 
["mì tôm", 5, 5000], 
["bánh mì", 12, 15000],
["bánh bao", 5, 8000], 
["mèn mén", 30, 20000]
];
switch(choice) {
case "1":
  console.log("Danh sách sản phẩm có sẵn trong cửa hàng: ");
  for(let i = 0; i < products.length; i++) {
      console.log(`${i+1}. ${products[i][0]} - ${products[i][1]} sản phẩm - ${products[i][2]}đ`);
  }
  break;
case "2":
  let product = prompt("Nhập tên sản phẩm muốn mua: ");
  let check = false;
  for(let i = 0; i < products.length; i++) {
      if(products[i][0] === product) {
          check = true;
          let amount = parseInt(prompt(`Số lượng ${product} muốn mua: `));
          if(amount > products[i][1]) {
              console.log("Sản phẩm đã hết hàng!");
          } else {
              products[i][1] -= amount;
              console.log(`Đã mua ${amount} sản phẩm ${product}`);
          }
          break;
      }
  }
  if(!check) {
      console.log("Sản phẩm không có trong cửa hàng!");
  }
  break;
case "3":
  let total = 0;
  console.log("Hóa đơn: ");
  for(let i = 0; i < products.length; i++) {
      if(products[i][1] < 5) {
          console.log(`${products[i][0]} - ${products[i][1]} sản phẩm - ${products[i][2]}đ`);
      }
      total += products[i][1] * products[i][2];
  }
  console.log(`Tổng tiền: ${total}đ`);
  break;
case "4":
  console.log("Thoát chương trình.");
  break;
default:
  console.log("Lựa chọn không hợp lệ!");
  break;
}
}while(choice !== "4"); 
