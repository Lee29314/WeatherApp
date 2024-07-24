function getWeather() {
    const apiKey = 'ac6fe89da482afde73a47485a272effe';
    const city = document.getElementById('city').value;

    if (!city) {
        alert('Please enter a city');
        return;
    }

    const currentWeatherUrl = 'https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}';
    const forecastUrl = 'https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}';

}

function getWeather() {
    fetch(currentWeatherUrl)
    .then(response => response.json())
    .then(data => {
        displayWeather(data);
    })
    .catch(error => {
        console.error('Error fetching current weather data:',error);
        alert('Error fetching current weather data. Please try again.');
    });

}

function getWeather() {

    fetch(forecastUrl)
    .then(response => response.json())
    .then(data => {
        displayHourlyForecast(data.list);
    })
    .catch(error => {
        console.error('Error fetching hourly forecast data:', error);
    });

}

function displayWeather(data) {
    const tempDivInfo = document.getElementById('temp-div');
    const weatherInfoDiv = document.getElementById('weather-info');
    const weatherIcon = document.getElementById('weather-icon');
    const displayHourlyForecastDiv = document.getElementById('hourly-forecast');
    
    // Clear previous content
    weatherInfoDiv.innerHTML = '';
    displayHourlyForecastDiv.innerHTML = '';
    tempDivInfo.innerHTML = '';

function displayWeather(data)  {

    if (data.cod === '404') {
        weatherInfoDiv.innerHTML = '<p>${data.message}</p>';
    } else {

        const cityName = data.name;
        const temperature = Math.round(data.main.temp - 273.15);
        const description = data.weather[0].description;
        const iconCode = data.weather[0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}@4x.png';

        const temperatureHTML = `
            <p>${temperature}℃</p>
        `;
        
        const weatherHtml = `
            <p>${cityName}</p>
            <p>${description}</p>
        `;
        
        tempDivInfo.innerHTML = temperatureHTML;
        weatherInfoDiv.innerHTML = weatherHtml;
        weatherIcon.src = iconUrl;
        weatherIcon.alt = description;

        showImage();        
    
    }    
}  
}
function displayHourlyForecast(hourlyData) {

      const displayHourlyForecastDiv = document.getElementById('hourly-forecast');
      const next24Hours = hourlyData.slice(0.8);

      next24Hours.forEach(item => {

        const dateTime = new Date(item.dt * 1000);
        const hour = dateTime.getHours();
        const temperature = Math.round(items.main.temp - 273.15);
        const iconCode = item.weather [0].icon;
        const iconUrl = 'https://openweathermap.org/img/wn/${iconCode}.png';

        const hourlyItemHtml = `
          <div class="hourly-item">
            <span>${hour}:00</span>
            <img src="${iconUrl}" alt="Hourly Weather Icon">
            <span>${temperature}℃</span>
          </div>
        `;
        displayHourlyForecast.innerHTML += hourlyItemHtml;    
        
      });

}     

function showImage() {

    const weatherIcon = document.getElementById('weather-icon');
    weatherIcon.style.display = 'block';
}
          


        
