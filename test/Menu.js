let choice = -1;
while(choice != 0)
{
    choice = parseFloat(prompt("---------------Menu--------------\n"+
                    "1.Kiểm tra số nt\n"+
                    "2.Kiểm tra số chính phương\n"+
                    "3.Kiểm tra số hoàn hảo\n"+
                    "4.Tính số fibonaci thứ n\n"+
                    "0.Thoát\n"+
                    "Nhập lựa chọn của bạn"));
    switch(choice)
    {
        case 1:
            let num = parseFloat(prompt("Nhập số cần kiểm tra."));
            let check =1;
            if(num == 2){
                alert(`Số ${num} là số nt`);
            }
            for(let i=2;i<=Math.sqrt(num);i++)
            {
                if(num % i == 0)
                {
                    alert("Không phải số nt");
                    check = 0;
                }
            }
            if(check == 1)
            {
                alert("Là số nt");
            }
            break;
        case 2:
            let num_1 = parseInt(prompt("Nhập số cần kiểm tra:"));

            if (num_1 < 0) {
                alert("Số âm không thể là số chính phương!");
            } else {
                let sqrt = Math.sqrt(num_1);
                if (Number.isInteger(sqrt)) {
                alert(`${num_1} là số chính phương`);
            } else {
                alert(`${num_1} không phải số chính phương`);
            }
            }
            break;
        case 3:
            let num_3 = parseInt(prompt("Nhập số cần kiểm tra:"));

            if (num_3 <= 0) {
                alert("Số hoàn hảo phải là số nguyên dương!");
            } else {
                let sum = 0;
                for (let i = 1; i <= num_3 / 2; i++) {
                    if (num_3 % i === 0) {
                    sum += i;
                    }
            }
            alert(sum === num_3 ? `${num_3} là số hoàn hảo` : `${num_3} không phải số hoàn hảo`);
            }
            break;
        case 4:
            let n = parseInt(prompt("Nhập số nguyên n:"));

            if (n < 0) {
                alert("n phải là số nguyên không âm!");
            } else if (n === 0) {
                alert(`Fibonacci thứ ${n} là 0`);
            } else {
                let a = 0, b = 1, temp;
                for (let i = 2; i <= n; i++) {
                temp = a + b;
                a = b;
                b = temp;
            }
            alert(`Fibonacci thứ ${n} là ${b}`);
}
    }
}