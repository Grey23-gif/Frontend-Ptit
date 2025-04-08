let button = document.getElementById("togglebutton");
let header = document.getElementById("header");
let text = document.getElementById("text");
let backg = document.querySelector(".container");
 
button.addEventListener("click", function () {
    if(backg.style.backgroundColor === "black"){
        backg.style.backgroundColor = "white";  
        header.style.color = "black";
        text.style.color = "black";  
    }
    else{
        backg.style.backgroundColor = "black"; 
        header.style.color = "White";  
        text.style.color = "White";  
    }
});
