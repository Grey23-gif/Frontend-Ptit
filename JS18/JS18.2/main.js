let math = prompt("Nhập điểm toán:");
let physics = prompt("Nhập điểm vật lí:");
let chemistry = prompt("Nhập điểm hóa:");

math = parseFloat(math);
physics = parseFloat(physics);
chemistry = parseFloat(chemistry);

let medium = (math+physics+chemistry)/3;

if(medium>=8.0)
{
    alert("Học lực Giỏi");
}
else if(medium>6.4&&medium<8)
{
    alert("Học lực khá");
}
else if(medium>=5.0&&medium<6.5)
{
    alert("Học lực TB");
}
else
{
    alert("Học lực Yếu");
}