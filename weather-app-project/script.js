const apikey = "70993671f5e5e7d30f3022f93a36c7cf";
const main = document.getElementById('main');
const form = document.getElementById('form');
const search = document.getElementById('search');



const url = (location)=>`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${apikey}`;

async function getWeatherByLocation(location){
    const resp = await fetch(url(location), {origin:"cors"});
    const respData = await resp.json();

    addWeatherToPage(respData);
    console.log(respData);
}

getWeatherByLocation("Daegu");

function addWeatherToPage(data){
    const temp = KtoC(data.main.temp);

    const weather = document.createElement('div');
    weather.classList.add('weather');

    weather.innerHTML = `
    <small>There are</small>
    <h2><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/>
 ${temp}°C<img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"/></h2>
 <small>${data.weather[0].main}</small>
    `;

    // cleanup
    search.value = '';

    main.appendChild(weather);
}

function KtoC(K){
    return Math.floor(K - 273.15);
}

form.addEventListener('submit', (e)=>{
    e.preventDefault();
    const location = search.value;
    if (location){
        getWeatherByLocation(location);

    }
})