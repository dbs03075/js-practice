const API_KEY ="70993671f5e5e7d30f3022f93a36c7cf";




function searchGeo(position){
    const url =`https://pro.openweathermap.org/data/2.5/forecast/climate?q=${cityName},${countryCode}&appid=${API_KEY}`;

}



function onGeoOk(position){
    console.log(position);

    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url =`https://pro.openweathermap.org/data/2.5/forecast/climate?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
    
    
    fetch(url).then(response => response.json()).then((data) => {
        

        console.log(data.name);
        console.dir(data);
        console.log(data.weather);

        // console.log( `${data.weather[0].main} / ${data.main.temp}`);
        
    });
}




    function onGeoError(){
    alert("Can't find you, No weather for you");
    }


navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
