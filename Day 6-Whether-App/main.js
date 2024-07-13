const cityname = document.querySelector('.input');
const search = document.querySelector('.btn');
const temp = document.querySelector('#temp');
const ctname = document.querySelector('.text');
const humid = document.querySelector('.humid');
const wind = document.querySelector('.wind');
const pressure = document.querySelector('.pressure');
const desc = document.querySelector('.status');

search.addEventListener('click', function() {
    const apiKey = 'e51e104866ff62ba9a097579c0d212bf';
    const city = cityname.value;
    const geoUrl = `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=5&appid=${apiKey}`;

    fetch(geoUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error('Geocoding API request failed');
            }
            return response.json();
        })
        .then(geoData => {
            if (geoData.length === 0) {
                throw new Error('City not found');
            }

            const { lat, lon } = geoData[0];
            const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

            return fetch(weatherUrl);
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Weather API request failed');
            }
            return response.json();
        })
        .then(data => {
            if (data.cod === 200) {
                const tempValue = (data.main.temp - 273.15).toFixed(2); // Convert from Kelvin to Celsius
                const nameValue = data.name;
                const descValue = data.weather[0].description;
                // descValue.upperCase();
                const countryValue = data.sys.country;
                const humidValue = data.main.humidity;
                const windValue = data.wind.speed;
                const pressureValue = data.main.pressure;
                desc.innerHTML = `${descValue}`;
                temp.innerHTML = `${tempValue} °C`;
                ctname.innerHTML = nameValue + ', ' + countryValue;
                humid.innerHTML = `${humidValue} %`;
                wind.innerHTML = `${windValue} m/s`;
                pressure.innerHTML = `${pressureValue} hPa`;
            } else {
                alert('Error: ' + data.message);
            }
        })
        .catch(err => alert('An error occurred: ' + err.message));
});
