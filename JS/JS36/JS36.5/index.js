document.addEventListener('DOMContentLoaded', () => {
    let categories = loadCategoriesFromStorage();

    // Hiển thị danh sách ban đầu
    renderCategories(categories);

    // Khởi tạo modal
    const addCategoryModalElement = document.getElementById("addCategoryModal");
    if (!addCategoryModalElement) {
        console.error("Không tìm thấy phần tử modal với ID 'addCategoryModal'");
        return;
    }
    const addCategoryModal = new bootstrap.Modal(addCategoryModalElement);

    // Mở modal khi nhấn nút "Thêm mới danh mục"
    const addCategoryBtn = document.getElementById("addCategoryBtn");
    if (addCategoryBtn) {
        addCategoryBtn.addEventListener('click', () => {
            console.log("Nút Thêm mới đã được nhấn!");
            document.getElementById("categoryId").value = '';
            document.getElementById("categoryName").value = '';
            document.getElementById("statusActive").checked = true;
            document.getElementById("categoryIdError").style.display = 'none';
            document.getElementById("categoryNameError").style.display = 'none';
            document.getElementById("addCategoryForm").onsubmit = handleAddCategory;
            addCategoryModal.show();
        });
    } else {
        console.error("Không tìm thấy nút 'addCategoryBtn'");
    }

    // Đóng modal khi nhấn nút "Hủy"
    const cancelBtn = document.getElementById("cancelBtn");
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            addCategoryModal.hide();
            document.getElementById("addCategoryForm").reset();
            document.getElementById("categoryIdError").style.display = 'none';
            document.getElementById("categoryNameError").style.display = 'none';
        });
    }

    // Xử lý form thêm danh mục
    function handleAddCategory(event) {
        event.preventDefault();

        const idInput = document.getElementById("categoryId");
        const nameInput = document.getElementById("categoryName");
        const status = document.querySelector('input[name="categoryStatus"]:checked').value;

        const id = idInput.value.trim();
        const name = nameInput.value.trim();

        // Validate dữ liệu
        let isValid = true;

        if (!id) {
            document.getElementById("categoryIdError").style.display = 'block';
            idInput.style.border = "1px solid red"; // Thêm viền đỏ
            isValid = false;
        } else {
            document.getElementById("categoryIdError").style.display = 'none';
            idInput.style.border = ""; // Xóa viền đỏ
        }

        if (!name) {
            document.getElementById("categoryNameError").style.display = 'block';
            nameInput.style.border = "1px solid red"; // Thêm viền đỏ
            isValid = false;
        } else {
            document.getElementById("categoryNameError").style.display = 'none';
            nameInput.style.border = ""; // Xóa viền đỏ
        }

        if (!isValid) return;

        if (!/^[a-zA-Z0-9]+$/.test(id)) {
            alert("Mã danh mục chỉ được chứa chữ cái và số.");
            return;
        }
        if (name.length > 50) {
            alert("Tên danh mục không được dài quá 50 ký tự.");
            return;
        }
        if (categories.some(cat => cat.id === id)) {
            alert("Mã danh mục đã tồn tại.");
            return;
        }

        addCategory(id, name, status);
        addCategoryModal.hide();
        event.target.reset();
    }

    // Lọc danh mục theo trạng thái
    document.getElementById("categorySelect").addEventListener("change", (event) => {
        const status = event.target.value;
        const filtered = status === "all" ? categories : filterCategoriesByStatus(status);
        renderCategories(filtered);
    });

    // Tìm kiếm danh mục theo tên
    document.getElementById("searchCategoryByName").addEventListener("input", (event) => {
        const keyword = event.target.value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        const result = searchCategoriesByName(keyword);
        renderCategories(result);
    });

    // Các hàm xử lý
    function saveCategoriesToStorage() {
        try {
            localStorage.setItem("categories", JSON.stringify(categories));
        } catch (e) {
            console.error("Lỗi khi lưu vào localStorage:", e);
        }
    }

    function loadCategoriesFromStorage() {
        try {
            const stored = localStorage.getItem("categories");
            return stored ? JSON.parse(stored) : [];
        } catch (e) {
            console.error("Lỗi khi tải từ localStorage:", e);
            return [];
        }
    }

    function filterCategoriesByStatus(status) {
        return categories.filter(cat => cat.status === status);
    }

    function searchCategoriesByName(term) {
        return categories.filter(cat => 
            cat.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().includes(term)
        );
    }

    function renderCategories(list) {
        const tbody = document.getElementById("categoryTableBody");
        tbody.innerHTML = "";
        list.forEach(cat => {
            const statusClass = cat.status === "active" ? "status-active" : "status-inactive";
            const row = `
                <tr>
                    <td>${cat.id}</td>
                    <td>${cat.name}</td>
                    <td><span class="${statusClass}">* ${cat.status === "active" ? "Đang hoạt động" : "Ngừng hoạt động"}</span> </td>
                    <td>
                        <button class="btn btn-danger btn-sm delete-btn" data-id="${cat.id}"><i class="fas fa-trash"></i></button>
                        <button class="btn btn-warning btn-sm ms-2 edit-btn" data-id="${cat.id}"><i class="fas fa-edit"></i></button>
                    </td>
                </tr>
            `;
            tbody.innerHTML += row;
        });

        document.querySelectorAll(".delete-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                if (confirm(`Bạn có chắc muốn xóa danh mục ${id}?`)) {
                    deleteCategory(id);
                }
            });
        });

        document.querySelectorAll(".edit-btn").forEach(btn => {
            btn.addEventListener("click", (e) => {
                const id = e.target.getAttribute("data-id");
                const category = categories.find(cat => cat.id === id);
                if (category) {
                    document.getElementById("categoryId").value = category.id;
                    document.getElementById("categoryName").value = category.name;
                    document.getElementById("statusActive").checked = category.status === "active";
                    document.getElementById("statusInactive").checked = category.status === "inactive";
                    document.getElementById("categoryIdError").style.display = 'none';
                    document.getElementById("categoryNameError").style.display = 'none';
                    addCategoryModal.show();
                    document.getElementById("addCategoryForm").onsubmit = (event) => {
                        event.preventDefault();
                        const updatedName = document.getElementById("categoryName").value.trim();
                        const updatedStatus = document.querySelector('input[name="categoryStatus"]:checked').value;

                        // Validate dữ liệu khi sửa
                        let isValid = true;
                        if (!updatedName) {
                            document.getElementById("categoryNameError").style.display = 'block';
                            isValid = false;
                        } else {
                            document.getElementById("categoryNameError").style.display = 'none';
                        }

                        if (!isValid) return;

                        if (updatedName.length > 50) {
                            alert("Tên danh mục không được dài quá 50 ký tự.");
                            return;
                        }

                        if (confirm(`Cập nhật danh mục ${id}?`)) {
                            updateCategory(id, updatedName, updatedStatus);
                            addCategoryModal.hide();
                            event.target.reset();
                            document.getElementById("addCategoryForm").onsubmit = null;
                        }
                    };
                }
            });
        });
    }

    function deleteCategory(id) {
        categories = categories.filter(cat => cat.id !== id);
        saveCategoriesToStorage();
        renderCategories(categories);
    }

    function updateCategory(id, name, status) {
        const index = categories.findIndex(cat => cat.id === id);
        if (index !== -1) {
            categories[index] = { id, name, status };
            saveCategoriesToStorage();
            renderCategories(categories);
        }
    }

    function addCategory(id, name, status) {
        const newCat = { id, name, status };
        categories.push(newCat);
        saveCategoriesToStorage();
        renderCategories(categories);
    }
});