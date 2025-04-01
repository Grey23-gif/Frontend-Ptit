let arr = [2,4,6,8,10,12,14,16,18];
function check_arr(arr){
    let a = arr[1] - arr[0];
    for(let i = 2; i < arr.length; i++){
        if(arr[i] - arr[i-1] !== a){
            return false;
            break;
        }
    }
    return true;
}
console.log(check_arr(arr)?"TRUE":"FALSE"); 