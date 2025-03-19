const soDict = {
    0: "Khong",
    1: "Mot",
    2: "Hai",
    3: "Ba",
    4: "Bon",
    5: "Nam",
    6: "Sau",
    7: "Bay",
    8: "Tam",
    9: "Chin"
};

let n = parseInt(prompt("Nhap so tu 0 den 999: "), 10);
let ketQua = "";

if (n >= 0 && n <= 999) {
    let hangTram = Math.floor(n / 100);
    let hangChuc = Math.floor((n % 100) / 10);
    let hangDonVi = n % 10;
    
    if (hangTram > 0) {
        ketQua += soDict[hangTram] + " Tram ";
    }
    
    if (hangChuc > 1) {
        ketQua += soDict[hangChuc] + " Muoi ";
    } else if (hangChuc === 1) {
        ketQua += "Muoi ";
    }
    
    if (hangChuc > 0 && hangDonVi === 5) {
        ketQua += "Lam";
    } else if (hangChuc === 0 && hangDonVi > 0 && hangTram > 0) {
        ketQua += "Linh " + soDict[hangDonVi];
    } else if (hangDonVi > 0) {
        ketQua += soDict[hangDonVi];
    }
    
    alert(ketQua);
} else {
    alert("So khong hop le");
}