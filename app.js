const date = document.getElementById("date");
const city = document.getElementById("city");
const temp = document.getElementById("temp");
const tempImg = document.getElementById("tempImg");
const description = document.getElementById("description");
const tempMax = document.getElementById("tempMax");
const tempMin = document.getElementById("tempMin");

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let dateObject = new Date();

let month = months[dateObject.getUTCMonth()];
let day = dateObject.getUTCDate();
let year = dateObject.getUTCFullYear();

date.innerHTML = `${month} ${day}, ${year}`;

const app = document.getElementById("app");

const getWeather = async () => {
    try {

        const cityName = document.getElementById("searchBarInput").value;

        const weatherDataFetch = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=741e7bd5ffdb5982773a18277677dbd9&units=metric`, {
            headers: {
                accept: "application/json"
            }
        });

        const weatherData = await weatherDataFetch.json();
        console.log(weatherData);
        city.innerHTML =`${weatherData.name}`;
        description.innerHTML = `${weatherData.weather[0].main}`;
        tempImg.innerHTML = `<img src="http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png" />`;
        temp.innerHTML = `<h2>${Math.round(weatherData.main.temp)}°C</h2>`
        tempMax.innerHTML = `${weatherData.main.temp_max}°C`;
        tempMin.innerHTML = `${weatherData.main.temp_min}°C`;
        
    } catch (error) {
        console.log(error);
    }
}

