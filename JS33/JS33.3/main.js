let dish = [
    { name: 'Rau sạch', category: 'Đồ ăn' },
    { name: 'Thịt lợn', category: 'Đồ ăn' },
    { name: 'Pepsi không calo', category: 'Nước' },
    { name: 'Cocacola', category: 'Nước' },
    { name: 'Cờ lê', category: 'Dụng cụ' },
    { name: 'Tuy vít', category: 'Dụng cụ' },
];

const categorySelect = document.getElementById("category-select");
const filterButton = document.getElementById("filter-button");
const resultList = document.getElementById("result-list");

filterButton.addEventListener("click", function () {
    const selectedCategory = categorySelect.value; 
    resultList.innerHTML = ""; 

    if (selectedCategory) {
        const filteredDishes = dish.filter(item => item.category === selectedCategory); 
        if (filteredDishes.length > 0) {
            filteredDishes.forEach(item => {
                const li = document.createElement("li");
                li.innerHTML = `
                <strong>Tên đồ ăn:</strong> ${item.name}- <strong>Danh mục:</strong> ${item.category}`; 
                resultList.appendChild(li);
            });
        } else {
            resultList.innerHTML = "<li>Không có sản phẩm nào thuộc danh mục này.</li>";
        }
    } else {
        alert("Vui lòng chọn danh mục!");
    }
});