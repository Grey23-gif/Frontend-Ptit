function arr_even(arr) {
    return arr.filter(x => x % 2 === 0);
}
let arr = [1,7,9,10,5,2,3,4,6,8];
console.log(arr_even(arr));