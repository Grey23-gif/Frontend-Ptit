let n = parseInt(prompt("Nhập số lượng phần tử:"));
if(isNaN(n) || n < 1) {
    alert("Số lượng phần tử không hợp lệ!");
}   
let arr = [];
let nums = [];
for (let i = 0; i < n; i++) {
    let num = parseFloat(prompt(`Nhập số thứ ${i + 1}:`));
    arr.push(num);
}
let fn;
let fn1=0;
let fn2=1;
nums.push(fn1);
nums.push(fn2);
for (let i=2;i<n;i++){
    fn=fn1+fn2;
    fn1=fn2;
    fn2=fn;
    nums.push(fn);
}
console.log(arr.every((val, index) => val === nums[index])?'Mảng đã nhập là dãy Fibonacci':'Mảng đã nhập không phải là dãy Fibonacci');  


