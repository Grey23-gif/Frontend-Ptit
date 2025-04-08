function Book(id, name, price, quantity, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
}

let BookManager = {
    books: [],
    cart: [],

    displayBooksByCategory: function () {
        let category = prompt("Nhập thể loại sách cần xem:");
        let filteredBooks = this.books.filter(book => book.category.toLowerCase() === category.toLowerCase());

        if (filteredBooks.length > 0) {
            let bookList = filteredBooks.map(book =>
                `ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}, Thể loại: ${book.category}`
            ).join("\n");
            alert(`Danh sách sách trong thể loại "${category}":\n${bookList}`);
        } else {
            alert(`Không tìm thấy sách trong thể loại "${category}".`);
        }
    },

    // Thêm sách mới vào kho
    addBook: function () {
        let id = parseInt(prompt("Nhập ID sách:"));
        let name = prompt("Nhập tên sách:");
        let price = parseFloat(prompt("Nhập giá sách:"));
        let quantity = parseInt(prompt("Nhập số lượng sách:"));
        let category = prompt("Nhập thể loại sách:");

        this.books.push(new Book(id, name, price, quantity, category));
        alert(`Sách "${name}" đã được thêm vào kho.`);
    },

    // Tìm kiếm sách theo tên hoặc ID
    searchBook: function () {
        let keyword = prompt("Nhập tên hoặc ID sách cần tìm:");
        let result = this.books.filter(book =>
            book.name.toLowerCase().includes(keyword.toLowerCase()) || book.id.toString() === keyword
        );

        if (result.length > 0) {
            let bookList = result.map(book =>
                `ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}, Thể loại: ${book.category}`
            ).join("\n");
            alert(`Kết quả tìm kiếm:\n${bookList}`);
        } else {
            alert("Không tìm thấy sách phù hợp.");
        }
    },

    // Mua sách
    buyBook: function () {
        let id = parseInt(prompt("Nhập ID sách cần mua:"));
        let quantity = parseInt(prompt("Nhập số lượng cần mua:"));
        let book = this.books.find(book => book.id === id);

        if (book) {
            if (book.quantity >= quantity) {
                book.quantity -= quantity;
                this.cart.push({ id: book.id, name: book.name, price: book.price, quantity: quantity });
                alert(`Bạn đã mua ${quantity} cuốn sách "${book.name}".`);
            } else {
                alert("Số lượng sách trong kho không đủ.");
            }
        } else {
            alert("Không tìm thấy sách với ID này.");
        }
    },

    // Sắp xếp sách theo giá
    sortBooksByPrice: function (order) {
        if (order === "asc") {
            this.books.sort((a, b) => a.price - b.price);
            alert("Sách đã được sắp xếp theo giá tăng dần.");
        } else if (order === "desc") {
            this.books.sort((a, b) => b.price - a.price);
            alert("Sách đã được sắp xếp theo giá giảm dần.");
        }
        this.displayAllBooks();
    },

    // Hiển thị tất cả sách
    displayAllBooks: function () {
        if (this.books.length === 0) {
            alert("Kho sách hiện đang trống.");
        } else {
            let bookList = this.books.map(book =>
                `ID: ${book.id}, Tên: ${book.name}, Giá: ${book.price}, Số lượng: ${book.quantity}, Thể loại: ${book.category}`
            ).join("\n");
            alert(`Danh sách sách trong kho:\n${bookList}`);
        }
    },

    // Tính tổng số lượng sách đã mua và tổng tiền
    calculateCart: function () {
        if (this.cart.length === 0) {
            alert("Giỏ hàng hiện đang trống.");
        } else {
            let totalQuantity = this.cart.reduce((sum, item) => sum + item.quantity, 0);
            let totalPrice = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            alert(`Tổng số lượng sách đã mua: ${totalQuantity}\nTổng tiền: ${totalPrice} VND`);
        }
    },

    // Hiển thị tổng số lượng sách trong kho
    displayTotalQuantity: function () {
        let totalQuantity = this.books.reduce((sum, book) => sum + book.quantity, 0);
        alert(`Tổng số lượng sách trong kho: ${totalQuantity}`);
    }
};

// Menu chức năng
let choice;

do {
    choice = parseInt(prompt(`
======== 📚 QUẢN LÝ SÁCH =========
1️⃣  Hiển thị danh sách sách theo thể loại.
2️⃣  Thêm sách mới vào kho.
3️⃣  Tìm kiếm sách theo tên hoặc ID.
4️⃣  Mua sách.
5️⃣  Sắp xếp sách theo giá (1: Tăng dần, 2: Giảm dần).
6️⃣  Tính tổng số lượng sách đã mua và tổng tiền.
7️⃣  Hiển thị tổng số lượng sách trong kho.
8️⃣  ❌ Thoát
==================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            BookManager.displayBooksByCategory();
            break;
        case 2:
            BookManager.addBook();
            break;
        case 3:
            BookManager.searchBook();
            break;
        case 4:
            BookManager.buyBook();
            break;
        case 5:
            let order = prompt("Nhập 1 để sắp xếp tăng dần, 2 để sắp xếp giảm dần:");
            BookManager.sortBooksByPrice(order === "1" ? "asc" : "desc");
            break;
        case 6:
            BookManager.calculateCart();
            break;
        case 7:
            BookManager.displayTotalQuantity();
            break;
        case 8:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 8);