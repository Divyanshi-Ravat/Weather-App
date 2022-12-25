const API_KEY = `3265874a2c77ae4a04bb96236a642d2f`;

//where search occur
const form = document.querySelector("form");
const cityV = document.querySelector("#city")
const down = document.querySelector(".down");

form.addEventListener("click", (event) => {
    getweather(cityV.value);
    event.preventDefault();
})

const getweather = async (cityN) => {
   
    if(cityN.length==0){
          down.innerHTML = "<h2>Invalid City</h2>";
          
    }
    else{

        down.innerHTML = `<h2>Loading...</h2>`
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityN}&appid=${API_KEY}&units=metric`;
        const res = await fetch(url);
        const data = await res.json();
        return showWeather(data);
    }
}

const showWeather = (data) => {
    if(data.cod == "404"){
        down.innerHTML = `<h2>City is not found</h2>`;
        return;
    }
    
    down.innerHTML = `
    <div class="img">

    <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="">
    </div>
    <div class="temp">

    <h2>${data.main.temp}°C</h2>
    <h2>${data.weather[0].main}</h2>
  </div>
    `
}