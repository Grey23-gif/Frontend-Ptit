import { Contact } from './Contact';
import { ContactManager } from './ContactManager';
import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const manager = new ContactManager();

function mainMenu(): void {
    console.log('\nQuản lý danh bạ:');
    console.log('1. Thêm liên hệ');
    console.log('2. Hiển thị danh bạ');
    console.log('3. Tìm kiếm liên hệ theo số điện thoại');
    console.log('4. Cập nhật liên hệ');
    console.log('5. Xóa liên hệ');
    console.log('6. Thoát');
    rl.question('Chọn một tùy chọn: ', (option) => {
        switch (option) {
            case '1':
                addContact();
                break;
            case '2':
                manager.displayContacts();
                mainMenu();
                break;
            case '3':
                searchContact();
                break;
            case '4':
                updateContact();
                break;
            case '5':
                deleteContact();
                break;
            case '6':
                rl.close();
                break;
            default:
                console.log('Tùy chọn không hợp lệ.');
                mainMenu();
        }
    });
}

function addContact(): void {
    rl.question('Nhập ID: ', (id) => {
        rl.question('Nhập tên: ', (name) => {
            rl.question('Nhập email: ', (email) => {
                rl.question('Nhập số điện thoại: ', (phone) => {
                    manager.addContact(new Contact(parseInt(id), name, email, phone));
                    console.log('Đã thêm liên hệ.');
                    mainMenu();
                });
            });
        });
    });
}

function searchContact(): void {
    rl.question('Nhập số điện thoại: ', (phone) => {
        const contact = manager.findContactByPhone(phone);
        if (contact) {
            console.log(`Tìm thấy: ID: ${contact.id}, Name: ${contact.name}, Email: ${contact.email}, Phone: ${contact.phone}`);
        } else {
            console.log('Không tìm thấy liên hệ.');
        }
        mainMenu();
    });
}

function updateContact(): void {
    rl.question('Nhập ID liên hệ cần cập nhật: ', (id) => {
        rl.question('Nhập tên mới: ', (name) => {
            rl.question('Nhập email mới: ', (email) => {
                rl.question('Nhập số điện thoại mới: ', (phone) => {
                    const success = manager.updateContact(parseInt(id), name, email, phone);
                    if (success) {
                        console.log('Cập nhật thành công.');
                    } else {
                        console.log('Không tìm thấy liên hệ.');
                    }
                    mainMenu();
                });
            });
        });
    });
}

function deleteContact(): void {
    rl.question('Nhập ID liên hệ cần xóa: ', (id) => {
        const success = manager.deleteContact(parseInt(id));
        if (success) {
            console.log('Xóa thành công.');
        } else {
            console.log('Không tìm thấy liên hệ.');
        }
        mainMenu();
    });
}

mainMenu();
