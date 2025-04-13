let buttonH = document.getElementById("Hidebutton");
let buttonS = document.getElementById("Showbutton");
let content = document.getElementById("Content");

buttonH.addEventListener("click", function () {
    content.style.display = "none"; 
});

buttonS.addEventListener("click", function () {
    content.style.display = "block"; 
});