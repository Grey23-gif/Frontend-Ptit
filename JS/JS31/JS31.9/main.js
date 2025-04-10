let todoList = [
    { id: 1, task: 'Hit the gym', completed: false },
    { id: 2, task: 'Pay bills', completed: true },
    { id: 3, task: 'Meet george', completed: false },
    { id: 4, task: 'Buy eggs', completed: false },
    { id: 5, task: 'Read a book', completed: false },
    { id: 6, task: 'Organize office', completed: false },
];

const ul = document.querySelector(".myUL");
const input = document.querySelector("#myInput");
const addButton = document.querySelector(".addBtn");

// Hàm hiển thị danh sách công việc
function renderTodoList() {
    ul.innerHTML = ""; // Xóa danh sách cũ
if (todoList.length > 0) {
    todoList.forEach(function(item) {
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
            const index = todoList.findIndex(todo => todo.task === item.task);
            if (index !== -1) {
                todoList.splice(index, 1); // Xóa khỏi mảng 
                renderTodoList(); // Cập nhật giao diện
            }
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
    });
}
}

// Gắn sự kiện cho nút ADD
addButton.addEventListener("click", function () {
    const task = input.value.trim(); // Lấy giá trị từ ô input
    if (task) {
        const newTask = {
            id: todoList.length + 1, // Tạo ID mới
            task: task,
            completed: false
        };
        todoList.push(newTask); // Thêm vào mảng
        renderTodoList(); // Cập nhật giao diện
        input.value = ""; // Xóa nội dung ô input
    } else {
        alert("Vui lòng nhập nhiệm vụ!");
    }
});

// Hiển thị danh sách ban đầu
renderTodoList();
