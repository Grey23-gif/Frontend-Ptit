// Đối tượng món ăn
function Dish(name, price, description) {
    this.name = name;
    this.price = price;
    this.description = description;
}

// Quản lý menu nhà hàng
let MenuManager = {
    menu: {},

    // Thêm món ăn vào danh mục
    addDish: function () {
        let category = prompt("Nhập danh mục món ăn (VD: Khai vị, Món chính, Tráng miệng):");
        let name = prompt("Nhập tên món ăn:");
        let price = parseFloat(prompt("Nhập giá món ăn:"));
        let description = prompt("Nhập mô tả món ăn:");

        if (!this.menu[category]) {
            this.menu[category] = [];
        }

        this.menu[category].push(new Dish(name, price, description));
        alert(`Món ăn ${name} đã được thêm vào danh mục ${category}!`);
    },

    // Xóa món ăn theo tên khỏi danh mục
    deleteDish: function () {
        let category = prompt("Nhập danh mục món ăn:");
        let name = prompt("Nhập tên món ăn cần xóa:");

        if (this.menu[category]) {
            let index = this.menu[category].findIndex(dish => dish.name === name);
            if (index !== -1) {
                this.menu[category].splice(index, 1);
                alert(`Món ăn ${name} đã được xóa khỏi danh mục ${category}.`);
                if (this.menu[category].length === 0) {
                    delete this.menu[category]; // Xóa danh mục nếu không còn món ăn
                }
            } else {
                alert(`Không tìm thấy món ăn ${name} trong danh mục ${category}.`);
            }
        } else {
            alert(`Danh mục ${category} không tồn tại.`);
        }
    },

    // Cập nhật thông tin món ăn theo tên
    updateDish: function () {
        let category = prompt("Nhập danh mục món ăn:");
        let name = prompt("Nhập tên món ăn cần cập nhật:");

        if (this.menu[category]) {
            let dish = this.menu[category].find(dish => dish.name === name);
            if (dish) {
                dish.name = prompt(`Nhập tên mới (hiện tại: ${dish.name}):`) || dish.name;
                dish.price = parseFloat(prompt(`Nhập giá mới (hiện tại: ${dish.price}):`)) || dish.price;
                dish.description = prompt(`Nhập mô tả mới (hiện tại: ${dish.description}):`) || dish.description;
                alert("Thông tin món ăn đã được cập nhật.");
            } else {
                alert(`Không tìm thấy món ăn ${name} trong danh mục ${category}.`);
            }
        } else {
            alert(`Danh mục ${category} không tồn tại.`);
        }
    },

    // Hiển thị toàn bộ menu
    displayMenu: function () {
        if (Object.keys(this.menu).length === 0) {
            alert("Menu hiện đang trống.");
        } else {
            let menuDisplay = Object.entries(this.menu).map(([category, dishes]) => {
                let dishList = dishes.map(dish => 
                    `- ${dish.name}: ${dish.price} VND (${dish.description})`
                ).join("\n");
                return `Danh mục: ${category}\n${dishList}`;
            }).join("\n\n");
            alert(`Menu nhà hàng:\n\n${menuDisplay}`);
        }
    },

    // Tìm kiếm món ăn theo tên
    searchDishByName: function () {
        let name = prompt("Nhập tên món ăn cần tìm:");
        let foundDishes = [];

        for (let category in this.menu) {
            this.menu[category].forEach(dish => {
                if (dish.name.toLowerCase().includes(name.toLowerCase())) {
                    foundDishes.push(`Danh mục: ${category}, Món: ${dish.name}, Giá: ${dish.price} VND, Mô tả: ${dish.description}`);
                }
            });
        }

        if (foundDishes.length > 0) {
            alert(`Kết quả tìm kiếm:\n${foundDishes.join("\n")}`);
        } else {
            alert("Không tìm thấy món ăn nào với tên này.");
        }
    }
};

// Menu chức năng
let choice;

do {
    choice = parseInt(prompt(`
======== 🍽️ QUẢN LÝ MENU NHÀ HÀNG =========
1️⃣  Thêm món ăn vào danh mục.
2️⃣  Xóa món ăn theo tên khỏi danh mục.
3️⃣  Cập nhật thông tin món ăn theo tên.
4️⃣  Hiển thị toàn bộ menu.
5️⃣  Tìm kiếm món ăn theo tên.
6️⃣  ❌ Thoát
===========================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            MenuManager.addDish();
            break;
        case 2:
            MenuManager.deleteDish();
            break;
        case 3:
            MenuManager.updateDish();
            break;
        case 4:
            MenuManager.displayMenu();
            break;
        case 5:
            MenuManager.searchDishByName();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 6);