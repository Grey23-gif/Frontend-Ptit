let numberArray =[1,3,6,10,34,22,567,245,11,7,4,3,2,1];
let check =1;
for(let i=0;i<numberArray.length;i++){
    if(numberArray[i]>10)
    {
        console.log(numberArray[i]);
        check=0;
    }
}
if(check==1)
{
    console.log("Không có số lớn hơn 10");
}