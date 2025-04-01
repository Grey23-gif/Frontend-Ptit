let arr = [2,5,1,7,8,10,12,7,3,16];
function sort_even_num(arr){
    let arr1 = arr.filter(x => x % 2 === 0).sort((a,b) => a - b);
    let arr2 = arr.filter(x => x % 2 !== 0);
    let arr3 = arr1.concat(arr2);
    return arr3;
}
console.log("Mảng sau khi sắp xếp các số chẵn tăng dần là: " + sort_even_num(arr));