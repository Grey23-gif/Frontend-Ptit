let input = document.querySelector("#input");
let buttonAdd = document.querySelector("#button-add"); 
let todoList = [];

buttonAdd.addEventListener('click', function () {
    let task = input.value.trim();
    if (task) {
        todoList.push({ task: task, completed: false }); 
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

            // Tạo container cho các nút
            const buttonContainer = document.createElement("div");
            buttonContainer.className = "button-container";

            // Tạo nút close (xóa)
            const spanClose = document.createElement("span");
            spanClose.textContent = "X";
            spanClose.className = "close";

            // Gắn sự kiện xóa
            spanClose.addEventListener("click", function () {
                todoList.splice(index, 1); // Xóa khỏi mảng theo chỉ số
                renderTodoList(); // Cập nhật giao diện
            });

            // Tạo nút edit (sửa)
            const spanEdit = document.createElement("span");
            spanEdit.textContent = "Edit";
            spanEdit.className = "edit";

            // Gắn sự kiện sửa
            spanEdit.addEventListener("click", function () {
                const newTask = prompt("Nhập công việc mới:", item.task);
                if (newTask !== null && newTask.trim() !== "") {
                    item.task = newTask.trim(); // Cập nhật công việc
                    renderTodoList(); // Cập nhật giao diện
                }
            });

            // Gắn các nút vào container
            buttonContainer.appendChild(spanClose);
            buttonContainer.appendChild(spanEdit);

            // Gắn container vào li
            li.appendChild(buttonContainer);

            // Gắn sự kiện đánh dấu hoàn thành
            li.addEventListener("click", function () {
                item.completed = !item.completed; // Đổi trạng thái
                li.classList.toggle("checked");
            });

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