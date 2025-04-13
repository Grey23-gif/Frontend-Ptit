   function isStrongPassword(passw) {
        let regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
        return regex.test(passw);
    }
let passw = prompt("Nhập mật khẩu: ");
console.log(isStrongPassword(passw));