let backg = document.querySelector(".Container");
let Green = document.querySelector(".Green");
let Red = document.querySelector(".Red");
let Purple = document.querySelector(".Purple");

Green.addEventListener('mouseover', function () {
    backg.style.backgroundColor = "green"; 
});
Red.addEventListener('mouseover', function () {
    backg.style.backgroundColor = "red";
});
Purple.addEventListener('mouseover', function () {
    backg.style.backgroundColor = "purple"; 
});
