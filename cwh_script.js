const apiKey = "6f45b589ef6d28b65e2ff5f9934959fd";
const getWeather = (city) => {
    cityName.innerHTML = city;
    // any other valid api
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            console.log(data);
            temperature.innerHTML = data.current.temperature
            temperature2.innerHTML = data.current.temperature
            weather_descriptions.innerHTML = data.current.weather_descriptions
            wind_speed.innerHTML = data.current.wind_speed
            wind_speed2.innerHTML = data.current.wind_speed
            wind_degree.innerHTML = data.current.wind_degree
            wind_dir.innerHTML = data.current.wind_dir
            pressure.innerHTML = data.current.pressure
            precip.innerHTML = data.current.precip
            humidity.innerHTML = data.current.humidity
            cloudcover.innerHTML = data.current.cloudcover
            feelslike.innerHTML = data.current.feelslike
            uv_index.innerHTML = data.current.uv_index
            visibility.innerHTML = data.current.visibility
            visibility2.innerHTML = data.current.visibility
        })
        .catch(err => console.log(err));
}


submit.addEventListener('click', (e) => {
    e.preventDefault()  //to avoid reload
    getWeather(city.value)
})

const metrocities = Array.from(document.getElementsByClassName('mtcity'));
console.log(metrocities);
const temperatures = document.getElementsByClassName('temperature_1');
const weather_descriptionss = document.getElementsByClassName('weather_descriptions_1');
const wind_speeds = document.getElementsByClassName('wind_speed_1');
const wind_degrees = document.getElementsByClassName('wind_degree_1');
const wind_dirs = document.getElementsByClassName('wind_dir_1');
const pressures = document.getElementsByClassName('pressure_1');
const precips = document.getElementsByClassName('precip_1');
const humiditys = document.getElementsByClassName('humidity_1');
const cloudcovers = document.getElementsByClassName('cloudcover_1');
const feelslikes = document.getElementsByClassName('feelslike_1');
const uv_indexs = document.getElementsByClassName('uv_index_1');
const visibilitys = document.getElementsByClassName('visibility_1');

metrocities.forEach((city, index) => {
    city= city.innerHTML;
    const url = `http://api.weatherstack.com/current?access_key=${apiKey}&query=${city}`;
    fetch(url)
        .then(response => response.json())
        .then((data) => {
            // console.log(data);
            temperatures[index].innerHTML = data.current.temperature
            weather_descriptionss[index].innerHTML = data.current.weather_descriptions
            wind_speeds[index].innerHTML = data.current.wind_speed
            wind_degrees[index].innerHTML = data.current.wind_degree
            wind_dirs[index].innerHTML = data.current.wind_dir
            pressures[index].innerHTML = data.current.pressure
            precips[index].innerHTML = data.current.precip
            humiditys[index].innerHTML = data.current.humidity
            cloudcovers[index].innerHTML = data.current.cloudcover
            feelslikes[index].innerHTML = data.current.feelslike
            uv_indexs[index].innerHTML = data.current.uv_index
            visibilitys[index].innerHTML = data.current.visibility
        })
        .catch(err => console.log(err));
});
