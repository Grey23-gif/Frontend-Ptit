function isPalindrome(str) {
    let strReverse = str.split("").reverse().join("");
    if (str === strReverse) {
        return "là chuỗi đối xứng";
    } else {
        return "không phải chuỗi đối xứng";
    }
}
let str = prompt("Nhập chuỗi: ");
console.log(isPalindrome(str));