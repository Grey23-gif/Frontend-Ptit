let dates = [];

function enter_dates(dates) {
    n = Number(prompt("Nhập số lượng ngày tháng năm: "));
    if (n <= 0) return "Mảng không có phần tử nào";
    for (let i = 0; i < n; i++) {
        dates[i] = prompt("Nhập ngày tháng năm thứ " + (i + 1) + ": ");
    }
}
function formatDates(dates) {
    if (!Array.isArray(dates)) return "Dữ liệu không hợp lệ";
    return dates.map(date => {
        let [year, month, day] = date.split("-");
        return `${day.padStart(2, "0")}/${month.padStart(2, "0")}/${year}`;
    });
}

enter_dates(dates);
console.log(formatDates(dates));
