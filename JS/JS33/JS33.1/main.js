let changeColor = document.querySelector("#change-color");
let backg = document.querySelector(".container");

function getRandomColor(){
    const r =  Math.floor(Math.random()*256);
    const g =  Math.floor(Math.random()*256);
    const b =  Math.floor(Math.random()*256);
    return `rgb(${r},${g},${b})`;
}   
changeColor.addEventListener('click',function(){
    backg.style.backgroundColor = getRandomColor();
});