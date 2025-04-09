//lấy các phần tử từ DOM
const nhapCongViec = document.getElementById("nhapCongViec");
const nutThem = document.getElementById("nutThem");
const danhSachCongViec = document.getElementById("danhSachCongViec");

//hàm thêm công việc
function themCongViec() {
    const congViec = nhapCongViec.value.trim();
    if (congViec !== "") {
        //tạo phần tử mới cho công việc
        const phanTuCongViec = document.createElement("div");
        phanTuCongViec.textContent = congViec;
        danhSachCongViec.appendChild(phanTuCongViec);

        //xóa nội dung ô input
        nhapCongViec.value = "";
    }
}

//gán sự kiện cho nút Thêm
nutThem.addEventListener("click", themCongViec);

//cho phép thêm công việc bằng phím Enter
nhapCongViec.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        themCongViec();
    }
});