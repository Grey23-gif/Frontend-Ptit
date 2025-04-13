let button = document.querySelector("#button");
let subject = document.querySelector("#subject");
let show = document.querySelector("#show");
let arr = [];
button.addEventListener('click', function(){
    if (subject.value.trim() !== "") { 
        arr.push(subject.value.trim());
        show.innerHTML = arr.map((item, index) => `${index + 1}. ${item}`).join('<br>'); 
    } else {
        alert("Vui lòng nhập nội dung!"); 
    }
});