// Đối tượng điện thoại
function Phone(id, name, price, quantity, company) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.company = company;
}

// Quản lý cửa hàng điện thoại
let PhoneManager = {
    phones: [],
    cart: [],

    // Hiển thị danh sách điện thoại theo hãng
    displayPhonesByCompany: function () {
        let company = prompt("Nhập tên hãng điện thoại bạn muốn xem:");
        let filteredPhones = this.phones.filter(phone => phone.company.toLowerCase() === company.toLowerCase());
        if (filteredPhones.length > 0) {
            let phoneList = filteredPhones.map(phone =>
                `ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`
            ).join("\n");
            alert(`Danh sách điện thoại của hãng "${company}":\n${phoneList}`);
        } else {
            alert(`Không có điện thoại nào của hãng "${company}".`);
        }
    },

    // Thêm điện thoại mới vào cửa hàng
    addPhone: function () {
        let id = parseInt(prompt("Nhập ID điện thoại:"));
        let name = prompt("Nhập tên điện thoại:");
        let price = parseFloat(prompt("Nhập giá điện thoại:"));
        let quantity = parseInt(prompt("Nhập số lượng điện thoại:"));
        let company = prompt("Nhập hãng điện thoại:");

        this.phones.push(new Phone(id, name, price, quantity, company));
        alert(`Điện thoại "${name}" đã được thêm vào cửa hàng.`);
    },

    // Tìm kiếm điện thoại theo tên hoặc ID
    searchPhone: function () {
        let keyword = prompt("Nhập tên hoặc ID điện thoại cần tìm:");
        let result = this.phones.filter(phone =>
            phone.name.toLowerCase().includes(keyword.toLowerCase()) || phone.id.toString() === keyword
        );

        if (result.length > 0) {
            let phoneList = result.map(phone =>
                `ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`
            ).join("\n");
            alert(`Kết quả tìm kiếm:\n${phoneList}`);
        } else {
            alert("Không tìm thấy điện thoại phù hợp.");
        }
    },

    // Mua điện thoại
    buyPhone: function () {
        let id = parseInt(prompt("Nhập ID điện thoại cần mua:"));
        let quantity = parseInt(prompt("Nhập số lượng cần mua:"));
        let phone = this.phones.find(phone => phone.id === id);

        if (phone) {
            if (phone.quantity >= quantity) {
                phone.quantity -= quantity;
                this.cart.push({ id: phone.id, name: phone.name, price: phone.price, quantity: quantity });
                alert(`Bạn đã mua ${quantity} chiếc điện thoại "${phone.name}".`);
            } else {
                alert("Số lượng điện thoại trong kho không đủ.");
            }
        } else {
            alert("Không tìm thấy điện thoại với ID này.");
        }
    },

    // Thanh toán giỏ hàng
    checkout: function () {
        if (this.cart.length === 0) {
            alert("Giỏ hàng hiện đang trống.");
        } else {
            let total = this.cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
            alert(`Thanh toán thành công! Tổng tiền: ${total} VND`);
            this.cart = [];
        }
    },

    // Sắp xếp điện thoại theo giá
    sortPhonesByPrice: function (order) {
        if (order === "asc") {
            this.phones.sort((a, b) => a.price - b.price);
            alert("Điện thoại đã được sắp xếp theo giá tăng dần.");
        } else if (order === "desc") {
            this.phones.sort((a, b) => b.price - a.price);
            alert("Điện thoại đã được sắp xếp theo giá giảm dần.");
        }
        this.displayAllPhones();
    },

    // Hiển thị tổng số tiền của các điện thoại trong kho
    calculateTotalValue: function () {
        let totalValue = this.phones.reduce((sum, phone) => sum + phone.price * phone.quantity, 0);
        alert(`Tổng giá trị của các điện thoại trong kho: ${totalValue} VND`);
    },

    // Hiển thị tổng số lượng điện thoại theo từng hãng
    displayTotalQuantityByCompany: function () {
        let companyQuantities = {};
        this.phones.forEach(phone => {
            if (!companyQuantities[phone.company]) {
                companyQuantities[phone.company] = 0;
            }
            companyQuantities[phone.company] += phone.quantity;
        });

        let result = Object.entries(companyQuantities).map(([company, quantity]) =>
            `${company}: ${quantity} chiếc`
        ).join("\n");
        alert(`Tổng số lượng điện thoại theo từng hãng:\n${result}`);
    },

    // Hiển thị tất cả điện thoại
    displayAllPhones: function () {
        if (this.phones.length === 0) {
            alert("Cửa hàng hiện đang trống.");
        } else {
            let phoneList = this.phones.map(phone =>
                `ID: ${phone.id}, Tên: ${phone.name}, Giá: ${phone.price}, Số lượng: ${phone.quantity}, Hãng: ${phone.company}`
            ).join("\n");
            alert(`Danh sách điện thoại trong cửa hàng:\n${phoneList}`);
        }
    }
};

// Menu chức năng
let choice;

do {
    choice = parseInt(prompt(`
======== 📱 QUẢN LÝ CỬA HÀNG ĐIỆN THOẠI =========
1️⃣  Hiển thị danh sách điện thoại theo hãng.
2️⃣  Thêm điện thoại mới vào cửa hàng.
3️⃣  Tìm kiếm điện thoại theo tên hoặc ID.
4️⃣  Mua điện thoại.
5️⃣  Thanh toán giỏ hàng.
6️⃣  Sắp xếp điện thoại theo giá (1: Tăng dần, 2: Giảm dần).
7️⃣  Hiển thị tổng số tiền của các điện thoại trong kho.
8️⃣  Hiển thị tổng số lượng điện thoại theo từng hãng.
9️⃣  ❌ Thoát
===============================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            PhoneManager.displayPhonesByCompany();
            break;
        case 2:
            PhoneManager.addPhone();
            break;
        case 3:
            PhoneManager.searchPhone();
            break;
        case 4:
            PhoneManager.buyPhone();
            break;
        case 5:
            PhoneManager.checkout();
            break;
        case 6:
            let order = prompt("Nhập 1 để sắp xếp tăng dần, 2 để sắp xếp giảm dần:");
            PhoneManager.sortPhonesByPrice(order === "1" ? "asc" : "desc");
            break;
        case 7:
            PhoneManager.calculateTotalValue();
            break;
        case 8:
            PhoneManager.displayTotalQuantityByCompany();
            break;
        case 9:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 9);