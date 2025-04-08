let button = document.querySelector("#button");
let overlay = document.querySelector(".overplay");
let close = document.querySelector(".close");

button.addEventListener('click',function(){
    overlay.style.display = "flex";
    overlay.style.justifyContent = "center";
    overlay.style.alignItems = "center";
});

close.addEventListener('click',function(){
    overlay.style.display = "none";
});