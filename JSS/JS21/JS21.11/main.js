for (let i = 1; i <= 10; i++) {
    let r = Math.floor(Math.random() * 256); 
    let g = Math.floor(Math.random() * 256); 
    let b = Math.floor(Math.random() * 256); 

    let color = `rgb(${r}, ${g}, ${b})`; 
    console.log(`%c Màu ${i}: ${color}`, `color: ${color}; font-size: 20px; font-weight: bold;`);
}
