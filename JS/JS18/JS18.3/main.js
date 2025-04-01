let user = prompt("Nhập tên tài khoản: ");
if(user == "ADMIN")
{
    let pw = prompt("Nhập mật khẩu: ");
    if(pw == "TheMaster")
    {
        alert("Welcome.");
    }
    else if(pw == null)
    {
        alert("Cancelled");
    }
    else{
        alert("Wrong Password.")
    }
}
else if(user == null)
    {
        alert("Cancelled");
    }
    else{
        alert("M là thằng nào?.");
    }