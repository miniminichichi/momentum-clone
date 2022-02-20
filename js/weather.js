const API_KEY = "84ae5aece71b825be75be49039838207";
const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then((data) =>{
            city.innerText = `location : ${data.name}`;
            weather.innerText = `weather : ${data.weather[0].main}\ntemperature : ${data.main.temp}℃`;
        });
}
function onGeoError(){
    alert("Can't find you. No weather for you.")
}
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);