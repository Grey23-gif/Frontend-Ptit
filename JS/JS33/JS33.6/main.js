const weatherData = {
    "Hà Nội": {
        temperature: 25,
        humidity: 70,
        windSpeed: 5,
        description: "Có mây",
        icon: "☁️"
    },
    "Hồ Chí Minh": {
        temperature: 32,
        humidity: 75,
        windSpeed: 7,
        description: "Nắng",
        icon: "☀️"
    },
    "Đà Nẵng": {
        temperature: 28,
        humidity: 82,
        windSpeed: 12,
        description: "Mưa rào",
        icon: "🌧️"
    }
};

document.querySelector("#searchButton").addEventListener("click", () => {
    const cityInput = document.querySelector("#cityInput").value.trim().toLowerCase();
    const resultContainer = document.querySelector("#result");

    const cityKey = Object.keys(weatherData).find(
        city => city.toLowerCase() === cityInput
    );

    if (cityKey) {
        const { temperature, humidity, windSpeed, description, icon } = weatherData[cityKey];
        resultContainer.innerHTML = `
            <h2>${cityKey}</h2>
            <div class="Content">
                <div class="icon">
                    <p>${icon}</p>
                </div>
                <div class="temperature">
                    <p>${temperature}°C</p>
                </div>
                <div>
                    <p>${description}</p>
                    <p>Độ ẩm: ${humidity}%</p>
                    <p>Tốc độ gió: ${windSpeed} km/h</p>
                </div>    
            </div>
        `;
    } else {
        resultContainer.innerHTML = `<p>Thành phố không tồn tại trong danh sách.</p>`;
    }
});

document.querySelector("#clearButton").addEventListener("click", () => {
    document.querySelector("#cityInput").value = "";
    document.querySelector("#result").innerHTML = "";
});
