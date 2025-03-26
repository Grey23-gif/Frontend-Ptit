let numbers=parseInt(prompt("Nhập số bất kì: "));

if (isNaN(numbers)|| numbers<0){
    console.log("Số không hợp lệ");
}

else {
    let count =0;
    let num=2;
    let result="";
    while(count<numbers){
        let isPrime=true;
        for(let i=2; i<=Math.sqrt(num); i++){
            if(num%i==0){
                isPrime=false;
                break;
            }
        }
        if(isPrime){
            result+=num+" ";
            count++;
        }
        num++;
    }
    console.log("Các số nguyên tố đầu tiên trong " + numbers + " số là: " + result);
}