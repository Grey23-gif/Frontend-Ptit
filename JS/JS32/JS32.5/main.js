let input = document.querySelector("#input");
let buttonAdd = document.querySelector("#button-add"); 
let todoList = [];

buttonAdd.addEventListener('click', function () {
    let task = input.value.trim();
    if (task) {
        todoList.push({ task: task, completed: false }); // Thêm đối tượng với trạng thái completed
        input.value = "";
        renderTodoList(); // Cập nhật giao diện sau khi thêm
    } else {
        alert("Vui lòng nhập công việc!"); // Thông báo nếu không nhập gì
    }
});

const ul = document.querySelector(".myUL");

// Hàm hiển thị danh sách công việc
function renderTodoList() {
    ul.innerHTML = ""; // Xóa danh sách cũ
    if (todoList.length > 0) {
        todoList.forEach(function (item, index) {
            const li = document.createElement("li");
            li.textContent = item.task;

            if (item.completed) {
                li.classList.add("checked");
            }

            // Tạo nút close (xóa)
            const span = document.createElement("span");
            span.textContent = "X";
            span.className = "close";

            // Gắn sự kiện xóa
            span.addEventListener("click", function () {
                todoList.splice(index, 1); // Xóa khỏi mảng theo chỉ số
                renderTodoList(); // Cập nhật giao diện
            });

            // Gắn sự kiện đánh dấu hoàn thành
            li.addEventListener("click", function () {
                item.completed = !item.completed; // Đổi trạng thái
                li.classList.toggle("checked");
            });

            // Gắn nút vào li
            li.appendChild(span);

            // Thêm li vào danh sách
            ul.appendChild(li);

            // Thêm gạch ngang ngăn cách
            const hr = document.createElement("hr");
            ul.appendChild(hr);
        });
    }
}

// Hiển thị danh sách ban đầu (nếu có)
renderTodoList();