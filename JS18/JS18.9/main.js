let hour = parseInt(prompt("Nhập giờ (0-23):"));
let minute = parseInt(prompt("Nhập phút (0-59):"));
let second = parseInt(prompt("Nhập giây (0-59):"));

if (
    isNaN(hour) || isNaN(minute) || isNaN(second) ||
    hour < 0 || hour > 23 || 
    minute < 0 || minute > 59 || 
    second < 0 || second > 59
) {
    alert("Vui lòng nhập giờ, phút, giây hợp lệ!");
} else {
    let period = hour >= 12 ? "PM" : "AM";
    let hour12 = hour % 12 || 12;

    let time12 = `${hour12}:${minute.toString().padStart(2, "0")}:${second.toString().padStart(2, "0")} ${period}`;
    alert("Thời gian theo định dạng 12 giờ: " + time12);
}
