let products = [
    ["mì tôm", 5, 5000],
    ["bánh mì", 12, 15000],
    ["bánh bao", 5, 8000],
    ["mèn mén", 30, 20000]
];

let cart = [];

function showProducts() {
    console.log("Danh sách sản phẩm có sẵn:");
    products.forEach(product => {
        console.log(`${product[0]} - Số lượng: ${product[1]} - Giá: ${product[2]} VND`);
    });
}

function addToCart(productName) {
    let product = products.find(p => p[0] === productName);
    if (!product) {
        console.log("Sản phẩm không có trong cửa hàng.");
        return;
    }
    
    if (product[1] === 0) {
        console.log("Sản phẩm đã hết hàng.");
        return;
    }
    
    product[1]--;
    let cartItem = cart.find(item => item[0] === productName);
    
    if (cartItem) {
        cartItem[1]++;
    } else {
        cart.push([productName, 1, product[2]]);
    }
    
    console.log(`${productName} đã được thêm vào giỏ hàng.`);
}

function showCart() {
    if (cart.length === 0) {
        console.log("Giỏ hàng trống.");
        return;
    }
    console.log("Giỏ hàng của bạn:");
    cart.forEach(item => {
        console.log(`${item[0]} - Số lượng: ${item[1]} - Giá: ${item[2]} VND`);
    });
}

function checkout() {
    let total = cart.reduce((sum, item) => sum + item[1] * item[2], 0);
    console.log("\nHóa đơn:");
    showCart();
    console.log(`Tổng tiền: ${total} VND`);
    console.log("Cảm ơn bạn đã mua hàng!");
}

function shop() {
    while (true) {
        console.log("\n1. Xem sản phẩm\n2. Mua hàng\n3. Xem giỏ hàng\n4. Thanh toán\n5. Thoát");
        let choice = prompt("Chọn thao tác: ");
        
        if (choice === "1") {
            showProducts();
        } else if (choice === "2") {
            let productName = prompt("Nhập tên sản phẩm muốn mua: ");
            addToCart(productName);
        } else if (choice === "3") {
            showCart();
        } else if (choice === "4") {
            checkout();
            break;
        } else if (choice === "5") {
            console.log("Thoát chương trình.");
            break;
        } else {
            console.log("Lựa chọn không hợp lệ.");
        }
    }
}

shop();
