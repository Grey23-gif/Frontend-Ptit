let students = [
    {name: "Trần Trí Dương", scores: {math: 9, english: 8, literature: 7}},
    {name: "Hà Bích Ngọc", scores: {math: 3, english: 2, literature: 5}},
    {name: "Bùi Thái Sơn", scores: {math: 9.5, english: 9, literature: 9}},
];

function average(students) {
    let score = [];
    
    for (let i = 0; i < students.length; i++) {
        let avg = (students[i].scores.math + students[i].scores.english + students[i].scores.literature) / 3;
        
        if (avg >= 8) {
            score.push(students[i].name);
        }
    }
    
    return score;
}

console.log("Học sinh điểm TB trên 8 là: " + average(students).join(", "));
