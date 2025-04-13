// 1. Nối chuỗi với số
let result1 = "javascript" + 5; // Kết quả: "javascript5"
console.log("Result 1:", result1);

// 2. Trừ số từ chuỗi không phải số
let result2 = "javascript" - 1; // Kết quả: NaN, vì "javascript" không chuyển thành số được
console.log("Result 2:", result2);

// 3. Nối chuỗi số với số
let result3 = "3" + 2; // Kết quả: "32"
console.log("Result 3:", result3);

// 4. Trừ số từ chuỗi số
let result4 = "5" - 4; // Kết quả: 1, vì "5" chuyển thành số 5
console.log("Result 4:", result4);

// 5. Kiểm tra "123" có phải là NaN không (sử dụng isNaN)
let result5 = isNaN("123"); // Kết quả: false, vì "123" chuyển thành số 123 hợp lệ
console.log("Result 5:", result5);

// 6. Kiểm tra "hello" có phải là NaN không (sử dụng isNaN)
let result6 = isNaN("hello"); // Kết quả: true, vì "hello" không thể chuyển thành số
console.log("Result 6:", result6);

// 7. Kiểm tra "123" có phải là NaN không (sử dụng Number.isNaN, không ép kiểu)
let result7 = Number.isNaN("123"); // Kết quả: false, vì "123" không phải là giá trị NaN
console.log("Result 7:", result7);

// 8. Kiểm tra NaN có phải là NaN không (sử dụng Number.isNaN)
let result8 = Number.isNaN(NaN); // Kết quả: true, vì NaN là NaN
console.log("Result 8:", result8);
