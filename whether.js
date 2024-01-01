

const apikey = "79abaa19891b440032594192cf08a569";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector('.input input');
const searchbtn = document.querySelector('.search button');

const weathericon = document.querySelector('.content img')

async function checkweather(city){
    const response = await fetch(apiUrl + city + `&appid=${apikey}`);
    var data = await response.json();

    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
    document.querySelector(".discrip").innerHTML = data.weather[0].main;

    if(data.weather[0].main == "Clouds"){
            weathericon.src = "clouds.png"
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "snow.png"
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "rain.png"
    }
    else if (data.weather[0].main == "Drizzle"){
        weathericon.src = "drizzle.png"
    }
    else if (data.weather[0].main == "Mist"){
        weathericon.src = "mist.png";
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "clear.png"
    }

}

searchbtn.addEventListener("click", ()=>{
    checkweather(searchbox.value);

});


const person = {
    name: "Abhay",
    hello: function(){
        document.write(`Hello, my Name is ${this.name}`)
    }
}

person.hello();


