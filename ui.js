class UI {
    constructor() {

        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.wind = document.getElementById('w-wind');
    }

    paint(weather) {
        var fahrenheit = Math.round(((parseFloat(weather.main.temp)-273.15)*1.8)+32); 
        this.location.innerHTML = weather.name;
        this.desc.innerHTML = weather.weather[0].description;
        this.string.innerHTML = fahrenheit + '&deg;';
        this.icon.setAttribute('src', 
        `http://openweathermap.org/img/w/${weather.weather[0].icon}.png`);
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.wind.textContent = `Wind Speed: ${weather.wind.speed}`
    }
}