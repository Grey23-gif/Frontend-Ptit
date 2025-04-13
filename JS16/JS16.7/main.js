let math = prompt("Nhập điểm toán:");
let physics = prompt("Nhập điểm vật lí:");
let chemistry = prompt("Nhập điểm hóa:");

math = parseFloat(math);
physics = parseFloat(physics);
chemistry = parseFloat(chemistry);

let medium = (math+physics+chemistry)/3;

alert("Điểm trung bình 3 môn là: "+medium);

