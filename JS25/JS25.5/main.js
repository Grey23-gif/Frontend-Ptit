function arr_positive(arr){
    let arr_positive = [];
    for(let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            arr_positive.push(arr[i]);
        }
    }
    return arr_positive;
}
let arr =  [];
let num_max = 100;
let num_min = -100;
for(let i = 0; i < 5; i++){
    arr.push(Math.floor(Math.random() * (num_max - num_min + 1)) + num_min);
}
console.log(arr);
console.log(arr_positive(arr));