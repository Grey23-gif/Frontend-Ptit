const products = [
    {
        id: 1,
        name: 'Laptop Dell XPS 15',
        price: 35999000,
        image: 'https://nhatminhlaptop.com/upload/products/dellxps159500-2023-03-11-18-06-22.jpg',
        description: 'Laptop cao cấp với màn hình 15 inch, CPU Intel Core i7 và RAM 16GB.',
    },
    {
        id: 2,
        name: 'IPhone 15 Pro Max',
        price: 32999000,
        image: 'https://cdn2.fptshop.com.vn/unsafe/iphone_15_pro_max_f589ed5358.png',
        description: 'Điện thoại flagship của Apple với camera 48MP và chip A17 Pro.',
    },
    {
        id: 3,
        name: 'Samsung Galaxy S24 Ultra',
        price: 28999000,
        image: 'https://media.takealot.com/covers_images/10b350f4887d422f9edc7d4490200cae/s-pdpxl.file',
        description: 'Điện thoại Android mạnh mẽ với bút S-Pen và camera siêu zoom.',
    },
    {
        id: 4,
        name: 'Tai nghe Sony WH-1000XM5',
        price: 10999000,
        image: 'https://bizweb.dktcdn.net/100/340/129/products/wh-1000xm5-sonycuongphan-1-8.jpg?v=1728039424327',
        description: 'Tai nghe chống ồn tốt nhất với thời lượng pin lên đến 30 giờ.',
    },
    {
        id: 5,
        name: 'Apple Watch Series 9',
        price: 11999000,
        image: 'https://dpphone.vn/uploads/source/hinh/watch-series-9-gps-lte-c1wax4zkgf42-og.png',
        description: 'Đồng hồ thông minh cao cấp với tính năng đo nhịp tim và hỗ trợ thể thao.',
    },
    {
        id: 6,
        name: 'Loa JBL Charge 5',
        price: 3999000,
        image: 'https://cdn.tgdd.vn/Products/Images/2162/251230/bluetooth-jbl-charge-5-2-750x500.jpg',
        description: 'Loa Bluetooth chống nước với âm bass mạnh mẽ và pin 20 giờ.',
    },
];

const productList = document.getElementById("product-list");
const searchInput = document.getElementById("search");
const searchButton = document.getElementById("search-button");

function displayProducts(productsToDisplay) {
    productList.innerHTML = "";
    productsToDisplay.forEach(product => {
        const productCard = document.createElement("div");
        productCard.className = "col-md-2"; 
        productCard.innerHTML = `
            <div class="card h-100">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-text">${product.description}</p>
                    <p class="card-text text-primary"><strong>${product.price.toLocaleString()} VND</strong></p>
                    <button class="buy-button">Buy</button>
                </div>
            </div>
        `;
        productList.appendChild(productCard);
    });
}

searchButton.addEventListener("click", function () {
    const keyword = searchInput.value.toLowerCase(); 
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(keyword) ||
        product.description.toLowerCase().includes(keyword)
    );
    displayProducts(filteredProducts); 
});

displayProducts(products);
