const username_ex = "huanrose@gmail.com";
const password_ex = "123456";

const form = document.querySelector(".log-in");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const username = document.querySelector("#username").value; 
    const password = document.querySelector("#password").value; 

    if(username === username_ex && password === password_ex){
        console.log("Đăng nhập thành công");
    }
    else{
        console.log("Đăng nhập thất bại");
    }
});
