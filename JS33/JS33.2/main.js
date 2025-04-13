let button = document.querySelector("#check");
let countSpan = document.querySelector("#count");
let textarea = document.querySelector("#textarea");

button.addEventListener('click', function () {
    const inputText = textarea.value.trim();
    const soKyTu = inputText.replace(/\s/g, "").length; 
    countSpan.textContent = soKyTu || 0;
});