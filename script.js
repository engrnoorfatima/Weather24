const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '43d58df14bmsh9d167b25f404c7bp1a18a9jsn02c479bf8138',
        'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
    }
};

const getWeather = (city)=>{
    cityName.innerHTML = city;
fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=' + city, options)
    .then(response => response.json())
    .then(response => {
        console.log(response)

        // cloud_pct.innerHTML = response.cloud_pct
        temp.innerHTML = response.temp
        temp2.innerHTML = response.temp
        feels_like.innerHTML = response.feels_like
        humidity.innerHTML = response.humidity
        humidity2.innerHTML = response.humidity
        min_temp.innerHTML = response.min_temp
        max_temp.innerHTML = response.max_temp
        wind_speed.innerHTML = response.wind_speed
        wind_speed2.innerHTML = response.wind_speed
        wind_degrees.innerHTML = response.wind_degrees
        sunrise.innerHTML = response.sunrise
        sunset.innerHTML = response.sunset

    })
    .catch(err => console.error(err))
}

submit.addEventListener("click", (e)=>{
    e.preventDefault()
    getWeather(city.value)
})

const Lahore_Weather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Lahore', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
    
    temp_Lahore.innerHTML = response.temp
    feels_like_Lahore.innerHTML = response.feels_like
    humidity_Lahore.innerHTML = response.humidity
    cloud_pct_Lahore.innerHTML = response.cloud_pct
    max_temp_Lahore.innerHTML = response.max_temp
    min_temp_Lahore.innerHTML = response.min_temp
    sunrise_Lahore.innerHTML = response.sunrise
    sunset_Lahore.innerHTML = response.sunset
    wind_degrees_Lahore.innerHTML = response.wind_degrees
    wind_speed_Lahore.innerHTML = response.wind_speed
})
.catch(err => console.error(err))
}

const Faisalabad_Weather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Faisalabad', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
    temp_Faisalabad.innerHTML = response.temp
    feels_like_Faisalabad.innerHTML = response.feels_like
    humidity_Faisalabad.innerHTML = response.humidity
    cloud_pct_Faisalabad.innerHTML = response.cloud_pct
    max_temp_Faisalabad.innerHTML = response.max_temp
    min_temp_Faisalabad.innerHTML = response.min_temp
    sunrise_Faisalabad.innerHTML = response.sunrise
    sunset_Faisalabad.innerHTML = response.sunset
    wind_degrees_Faisalabad.innerHTML = response.wind_degrees
    wind_speed_Faisalabad.innerHTML = response.wind_speed
})
.catch(err => console.error(err))
}

const Peshawar_Weather = ()=>{
    fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Peshawar', options)
    .then(response => response.json())
    .then(response => {
        console.log(response)
    temp_Peshawar.innerHTML = response.temp
    feels_like_Peshawar.innerHTML = response.feels_like
    humidity_Peshawar.innerHTML = response.humidity
    cloud_pct_Peshawar.innerHTML = response.cloud_pct
    max_temp_Peshawar.innerHTML = response.max_temp
    min_temp_Peshawar.innerHTML = response.min_temp
    sunrise_Peshawar.innerHTML = response.sunrise
    sunset_Peshawar.innerHTML = response.sunset
    wind_degrees_Peshawar.innerHTML = response.wind_degrees
    wind_speed_Peshawar.innerHTML = response.wind_speed
})
.catch(err => console.error(err))
}

    const Sahiwal_Weather = ()=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Sahiwal', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
    temp_Sahiwal.innerHTML = response.temp
    feels_like_Sahiwal.innerHTML = response.feels_like
    humidity_Sahiwal.innerHTML = response.humidity
    cloud_pct_Sahiwal.innerHTML = response.cloud_pct
    max_temp_Sahiwal.innerHTML = response.max_temp
    min_temp_Sahiwal.innerHTML = response.min_temp
    sunrise_Sahiwal.innerHTML = response.sunrise
    sunset_Sahiwal.innerHTML = response.sunset
    wind_degrees_Sahiwal.innerHTML = response.wind_degrees
    wind_speed_Sahiwal.innerHTML = response.wind_speed
})
.catch(err => console.error(err))
}

    const Islamabad_Weather = ()=>{
        fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city=Islamabad', options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
    temp_Islamabad.innerHTML = response.temp
    feels_like_Islamabad.innerHTML = response.feels_like
    humidity_Islamabad.innerHTML = response.humidity
    cloud_pct_Islamabad.innerHTML = response.cloud_pct
    max_temp_Islamabad.innerHTML = response.max_temp
    min_temp_Islamabad.innerHTML = response.min_temp
    sunrise_Islamabad.innerHTML = response.sunrise
    sunset_Islamabad.innerHTML = response.sunset
    wind_degrees_Islamabad.innerHTML = response.wind_degrees
    wind_speed_Islamabad.innerHTML = response.wind_speed
})
.catch(err => console.error(err))
}

getWeather("Multan");

Lahore_Weather();
Faisalabad_Weather();
Peshawar_Weather();
Sahiwal_Weather();
Islamabad_Weather();