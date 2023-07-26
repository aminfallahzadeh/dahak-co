// weather app 
const apiKey = "ece3d774838b09a815d295b2c22b2c7e";
const lang = 'fa';
const btn = document.getElementById('search-btn');

btn.addEventListener('click', (event) => {
    event.preventDefault();
    const city = document.getElementById('input-city').value;
    const resCity = document.querySelector('.res-city');
    const resTemp = document.querySelector('.res-temp');
    const resWeather = document.querySelector('.res-weather');

    if (city === '')
        return;

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=${lang}`)
        .then(response => {
            return response.json()
        })
        .then(data => {
            console.log(data);
            resCity.innerHTML = `${data.name}`;
            resTemp.innerHTML = `${parseInt(data.main.temp)}<span>°C</span>`;
            resWeather.innerHTML = `${data.weather[0].description}`;
        });
});