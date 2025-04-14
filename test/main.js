document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault();
    checkEmailPass();
});

function checkEmailPass() {
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value.trim();

    // Check if fields are empty
    if (!email || !password) {
        alert('Email và mật khẩu không được bỏ trống!');
        return;
    }

    // Retrieve user from localStorage
    let user;
    try {
        user = JSON.parse(localStorage.getItem('user'));
    } catch (error) {
        console.error('Dữ liệu người dùng trong localStorage bị lỗi:', error);
        alert('Đã xảy ra lỗi, vui lòng thử lại!');
        return;
    }

    if (!user || email !== user.email) {
        alert('Email không tồn tại!');
        return;
    }

    // Validate password using bcryptjs
    if (!bcrypt.compareSync(password, user.password)) {
        alert('Mật khẩu không đúng!');
        return;
    }

    alert('Đăng nhập thành công!');
    // Redirect or perform further actions here
}
