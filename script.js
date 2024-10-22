const weatherContainer = document.getElementById('weather-info');

function getWeather() {
    const location = document.getElementById('location').value;
    if (!location) {
        weatherContainer.innerHTML = '<p class="loading">Fetching your location...</p>';
        navigator.geolocation.getCurrentPosition(position => {
            fetchWeatherDataByCoords(position.coords.latitude, position.coords.longitude);
        }, () => {
            weatherContainer.innerHTML = '<p class="loading">Unable to retrieve your location.</p>';
        });
    } else {
        fetchWeatherDataByLocation(location);
    }
}

function fetchWeatherDataByCoords(lat, lon) {
    const apiKey = '117a41d15f1aae8383ee836e1f7f5ec7';
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;

    fetchWeatherData(url);
}

function fetchWeatherDataByLocation(location) {
    const apiKey = '117a41d15f1aae8383ee836e1f7f5ec7';
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apiKey}&units=metric`;

    fetchWeatherData(url);
}

function fetchWeatherData(url) {
    fetch(url)
        .then(response => response.json())
        .then(data => displayWeatherData(data))
        .catch(() => weatherContainer.innerHTML = '<p class="loading">Error fetching weather data.</p>');
}

function displayWeatherData(data) {
    if (data.cod === 200) {
        const weatherHTML = `
            <h3>${data.name}</h3>
            <p>${data.weather[0].description}</p>
            <p>Temperature: ${data.main.temp}°C</p>
            <p>Humidity: ${data.main.humidity}%</p>
            <p>Wind Speed: ${data.wind.speed} m/s</p>
        `;
        weatherContainer.innerHTML = weatherHTML;
    } else {
        weatherContainer.innerHTML = `<p class="loading">Error: ${data.message}</p>`;
    }
}