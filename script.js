
// Get the Button and write the city name
var city = '';
const button = document.querySelector('#button');
const weather = document.querySelector('.weather');
const error = document.querySelector('.error');



async function fetchweather(city) {
    let responce = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c8ef0b3165301967df7b7aeb1781689&units=metric`);

    if (responce.status == 404) {
        weather.style.display = 'none'
        error.style.display = 'block'
    } else {
        let data = await responce.json();
        document.querySelector('.city').innerHTML = data.name;
        document.querySelector('.humidity').innerHTML = data.main.humidity + `%`;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + `°C`;
        document.querySelector('.wind').innerHTML = data.wind.speed + ` km/h`;

        let weatherIcon = document.querySelector('.weather-icon');

        if (data.weather[0].main === 'Clouds') {
            weatherIcon.src = 'images/clouds.png'
        }
        else if (data.weather[0].main === 'Rain') {
            weatherIcon.src = 'images/rain.png'
        }
        else if (data.weather[0].main === 'Clear') {
            weatherIcon.src = 'images/clear.png'
        }
        else if (data.weather[0].main === 'Mist') {
            weatherIcon.src = 'images/mist.png'
        }
        else if (data.weather[0].main === 'Drizzle') {
            weatherIcon.src = 'images/drizzle.png'
        }
        error.style.display = 'none'
        weather.style.display = 'block'
    }
}


button.addEventListener('click', () => {
    let input = document.querySelector('#input');
    let value = input.value;

    fetchweather(value);
})

