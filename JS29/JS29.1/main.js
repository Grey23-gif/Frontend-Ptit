// Đối tượng Contact
function Contact(id, name, email, phone) {
    this.id = id;
    this.name = name;
    this.email = email;
    this.phone = phone;
}

// Quản lý danh bạ
let ContactManager = {
    contacts: [],

    // Thêm liên hệ mới
    addContact: function () {
        let id = parseInt(prompt("Nhập ID liên hệ:"));
        let name = prompt("Nhập tên liên hệ:");
        let email = prompt("Nhập email liên hệ:");
        let phone = prompt("Nhập số điện thoại liên hệ:");

        this.contacts.push(new Contact(id, name, email, phone));
        alert(`Liên hệ ${name} đã được thêm thành công!`);
    },

    // Hiển thị danh sách danh bạ
    displayContacts: function () {
        if (this.contacts.length === 0) {
            alert("Danh bạ trống.");
        } else {
            let contactList = this.contacts.map(contact => 
                `ID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`
            ).join("\n");
            alert(`Danh sách danh bạ:\n${contactList}`);
        }
    },

    // Tìm kiếm liên hệ theo số điện thoại
    searchContactByPhone: function () {
        let phone = prompt("Nhập số điện thoại cần tìm:");
        let contact = this.contacts.find(contact => contact.phone === phone);

        if (contact) {
            alert(`Tìm thấy liên hệ:\nID: ${contact.id}, Tên: ${contact.name}, Email: ${contact.email}, SĐT: ${contact.phone}`);
        } else {
            alert("Không tìm thấy liên hệ với số điện thoại này.");
        }
    },

    // Cập nhật thông tin liên hệ theo ID
    updateContact: function () {
        let id = parseInt(prompt("Nhập ID liên hệ cần cập nhật:"));
        let contact = this.contacts.find(contact => contact.id === id);

        if (contact) {
            contact.name = prompt(`Nhập tên mới (hiện tại: ${contact.name}):`) || contact.name;
            contact.email = prompt(`Nhập email mới (hiện tại: ${contact.email}):`) || contact.email;
            contact.phone = prompt(`Nhập số điện thoại mới (hiện tại: ${contact.phone}):`) || contact.phone;
            alert("Thông tin liên hệ đã được cập nhật.");
        } else {
            alert("Không tìm thấy liên hệ với ID này.");
        }
    },

    // Xóa liên hệ theo ID
    deleteContact: function () {
        let id = parseInt(prompt("Nhập ID liên hệ cần xóa:"));
        let index = this.contacts.findIndex(contact => contact.id === id);

        if (index !== -1) {
            let confirmDelete = confirm(`Bạn có chắc muốn xóa liên hệ ${this.contacts[index].name}?`);
            if (confirmDelete) {
                this.contacts.splice(index, 1);
                alert("Liên hệ đã được xóa thành công.");
            }
        } else {
            alert("Không tìm thấy liên hệ với ID này.");
        }
    }
};

// Menu chức năng
let choice;

do {
    choice = parseInt(prompt(`
======== 📒 QUẢN LÝ DANH BẠ =========
1️⃣  Thêm liên hệ mới.
2️⃣  Hiển thị danh sách danh bạ.
3️⃣  Tìm kiếm liên hệ theo số điện thoại.
4️⃣  Cập nhật thông tin liên hệ theo ID.
5️⃣  Xóa liên hệ theo ID.
6️⃣  ❌ Thoát
====================================
🔹 Vui lòng nhập số tương ứng với lựa chọn của bạn:`));

    switch (choice) {
        case 1:
            ContactManager.addContact();
            break;
        case 2:
            ContactManager.displayContacts();
            break;
        case 3:
            ContactManager.searchContactByPhone();
            break;
        case 4:
            ContactManager.updateContact();
            break;
        case 5:
            ContactManager.deleteContact();
            break;
        case 6:
            alert("Thoát chương trình.");
            break;
        default:
            alert("Lựa chọn không hợp lệ, vui lòng nhập lại!");
    }
} while (choice !== 6);