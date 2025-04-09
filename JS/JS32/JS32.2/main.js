let button = document.querySelector("#click-me");
let countSpan = document.querySelector("#count");
let check = 0;
button.addEventListener('click', function(){
    check++;
    countSpan.textContent = check;
});