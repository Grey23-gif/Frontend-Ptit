function arr_max(arr) {
    return Math.max.apply(null, arr);
}
let arr = [1,7,9,10,5,2,3,4,6,8];
console.log(arr_max(arr));