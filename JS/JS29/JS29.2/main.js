// Đối tượng Product
function Product(id, name, price, category, quantity) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
    this.quantity = quantity;
}

// Quản lý sản phẩm
let ProductManager = {
    products: [],

    // Thêm sản phẩm mới
    addProduct: function () {
        let id = parseInt(prompt("Nhập ID sản phẩm:"));
        let name = prompt("Nhập tên sản phẩm:");
        let price = parseFloat(prompt("Nhập giá sản phẩm:"));
        let category = prompt("Nhập danh mục sản phẩm:");
        let quantity = parseInt(prompt("Nhập số lượng sản phẩm trong kho:"));

        this.products.push(new Product(id, name, price, category, quantity));
        alert(`Sản phẩm ${name} đã được thêm thành công!`);
    },

    // Hiển thị tất cả sản phẩm
    displayProducts: function () {
        if (this.products.length === 0) {
            alert("Danh sách sản phẩm trống.");
        } else {
            let productList = this.products.map(product => 
                `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`
            ).join("\n");
            alert(`Danh sách sản phẩm:\n${productList}`);
        }
    },

    // Hiển thị chi tiết sản phẩm theo ID
    displayProductById: function () {
        let id = parseInt(prompt("Nhập ID sản phẩm cần xem chi tiết:"));
        let product = this.products.find(product => product.id === id);

        if (product) {
            alert(`Chi tiết sản phẩm:\nID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`);
        } else {
            alert("Không tìm thấy sản phẩm với ID này.");
        }
    },

    // Cập nhật thông tin sản phẩm theo ID
    updateProduct: function () {
        let id = parseInt(prompt("Nhập ID sản phẩm cần cập nhật:"));
        let product = this.products.find(product => product.id === id);

        if (product) {
            product.name = prompt(`Nhập tên mới (hiện tại: ${product.name}):`) || product.name;
            product.price = parseFloat(prompt(`Nhập giá mới (hiện tại: ${product.price}):`)) || product.price;
            product.category = prompt(`Nhập danh mục mới (hiện tại: ${product.category}):`) || product.category;
            product.quantity = parseInt(prompt(`Nhập số lượng mới (hiện tại: ${product.quantity}):`)) || product.quantity;
            alert("Thông tin sản phẩm đã được cập nhật.");
        } else {
            alert("Không tìm thấy sản phẩm với ID này.");
        }
    },

    // Xóa sản phẩm theo ID
    deleteProduct: function () {
        let id = parseInt(prompt("Nhập ID sản phẩm cần xóa:"));
        let index = this.products.findIndex(product => product.id === id);

        if (index !== -1) {
            let confirmDelete = confirm(`Bạn có chắc muốn xóa sản phẩm ${this.products[index].name}?`);
            if (confirmDelete) {
                this.products.splice(index, 1);
                alert("Sản phẩm đã được xóa thành công.");
            }
        } else {
            alert("Không tìm thấy sản phẩm với ID này.");
        }
    },

    // Lọc sản phẩm theo khoảng giá
    filterProductsByPrice: function () {
        let minPrice = parseFloat(prompt("Nhập giá tối thiểu:"));
        let maxPrice = parseFloat(prompt("Nhập giá tối đa:"));
        let filteredProducts = this.products.filter(product => product.price >= minPrice && product.price <= maxPrice);

        if (filteredProducts.length > 0) {
            let productList = filteredProducts.map(product => 
                `ID: ${product.id}, Tên: ${product.name}, Giá: ${product.price}, Danh mục: ${product.category}, Số lượng: ${product.quantity}`
            ).join("\n");
            alert(`Sản phẩm trong khoảng giá từ ${minPrice} đến ${maxPrice}:\n${productList}`);
        } else {
            alert("Không tìm thấy sản phẩm trong khoảng giá này.");
        }
    }
};

// Menu chức năng
let choice;

do {
    choice = parseInt(prompt(`
======== 🛒 QUẢN LÝ SẢN PHẨM =========
1️⃣  Thêm sản phẩm mới.
2️⃣  Hiển thị tất cả sản phẩm.
3️⃣  Hiển thị chi tiết sản phẩm theo ID.
4️⃣  Cập nhật thông tin sản phẩm theo ID.
5️⃣  Xóa sản phẩm theo ID.
6️⃣  Lọc sản phẩm theo khoảng giá.
7️⃣  ❌ Thoát
=====================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            ProductManager.addProduct();
            break;
        case 2:
            ProductManager.displayProducts();
            break;
        case 3:
            ProductManager.displayProductById();
            break;
        case 4:
            ProductManager.updateProduct();
            break;
        case 5:
            ProductManager.deleteProduct();
            break;
        case 6:
            ProductManager.filterProductsByPrice();
            break;
        case 7:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 7);