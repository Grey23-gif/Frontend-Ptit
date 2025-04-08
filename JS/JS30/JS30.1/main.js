let product = [
    {
        id: 1,
        name: "Mèn mén",
        price: 20000,
        quantily: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 2,
        name: "Mứt",
        price: 80000,
        quantily: 21,
        category: "món ăn dân tộc Kinh"
    },
    {
        id: 3,
        name: "Cơm lam",
        price: 40000,
        quantily: 20,
        category: "món ăn dân tộc Mông"
    },
    {
        id: 4,
        name: "Bánh đậu xanh",
        price: 60000,
        quantily: 20,
        category: "món ăn dân tộc Kinh"
    }
];

let cart = [];

// Hiển thị sản phẩm theo danh mục
function displayProductsByCategory() {
    let category = prompt("Nhập tên danh mục bạn muốn xem:");
    let filteredProducts = product.filter(item => item.category.toLowerCase() === category.toLowerCase());
    if (filteredProducts.length > 0) {
        alert(`Sản phẩm trong danh mục ${category}:\n${filteredProducts.map(item => `${item.name} - ${item.price} VND`).join("\n")}`);
    } else {
        alert(`Không có sản phẩm nào trong danh mục ${category}.`);
    }
}

// Chọn sản phẩm và thêm vào giỏ hàng
function selectProduct() {
    let productName = prompt("Nhập tên sản phẩm bạn muốn chọn:");
    let selectedProduct = product.find(item => item.name.toLowerCase() === productName.toLowerCase());
    if (selectedProduct) {
        let quantity = Number(prompt(`Nhập số lượng bạn muốn mua (${selectedProduct.quantily} có sẵn):`));
        if (quantity > 0 && quantity <= selectedProduct.quantily) {
            cart.push({ ...selectedProduct, quantity });
            selectedProduct.quantily -= quantity;
            alert(`Bạn đã thêm ${quantity} ${selectedProduct.name} vào giỏ hàng.`);
        } else {
            alert("Số lượng không hợp lệ hoặc không đủ hàng.");
        }
    } else {
        alert("Sản phẩm không có trong cửa hàng.");
    }
}

// Sắp xếp sản phẩm theo giá
function sortProducts() {
    let sortChoice = prompt("Nhập 'a' để sắp xếp tăng dần hoặc 'b' để sắp xếp giảm dần:");
    if (sortChoice === 'a') {
        product.sort((a, b) => a.price - b.price);
        alert("Sản phẩm đã được sắp xếp theo giá tăng dần.");
    } else if (sortChoice === 'b') {
        product.sort((a, b) => b.price - a.price);
        alert("Sản phẩm đã được sắp xếp theo giá giảm dần.");
    } else {
        alert("Lựa chọn không hợp lệ.");
    }
}

// Tính tổng tiền trong giỏ hàng
function calculateTotalPrice() {
    let totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
    alert(`Tổng tiền trong giỏ hàng: ${totalPrice} VND`);
}

// Menu chính
function mainMenu() {
    let choice;
    do {
        choice = Number(prompt(`
        ==========Menu========
        1. Hiển thị các sản phẩm theo tên danh mục
        2. Chọn sản phẩm
        3. Sắp xếp sản phẩm theo Giá
           a. Tăng dần
           b. Giảm dần
        4. Tính số tiền trong giỏ hàng
        5. Thoát
        =========================
        Nhập lựa chọn của bạn:`));
        switch (choice) {
            case 1:
                displayProductsByCategory();
                break;
            case 2:
                selectProduct();
                break;
            case 3:
                sortProducts();
                break;
            case 4:
                calculateTotalPrice();
                break;
            case 5:
                alert("Cảm ơn bạn đã sử dụng dịch vụ!");
                break;
            default:
                alert("Lựa chọn không hợp lệ.");
                break;
        }
    } while (choice !== 5);
}

mainMenu();