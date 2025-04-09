document.getElementById("checkEmailBtn").addEventListener("click", function () {
    const emailInput = document.getElementById("emailInput").value.trim();
    const emailResult = document.getElementById("emailResult");

    // Kiểm tra định dạng email
    const emailRegex = /^[^\s@]+@[^\s@]+\.(com|vn)$/;
    if (emailRegex.test(emailInput)) {
        emailResult.textContent = "Email hợp lệ!";
        emailResult.style.color = "green";
    } else {
        emailResult.textContent = "Email không hợp lệ. Vui lòng kiểm tra lại!";
        emailResult.style.color = "red";
    }
});