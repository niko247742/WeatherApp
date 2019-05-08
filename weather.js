class Weather {
    constructor(city, state) {
        this.apiKey = '361a82ef31b7ff02b99174880ff88b4a';
        this.city = city;
        this.state = state;
    }
    //Fetch weather from API
    async getWeather() {
        const fet = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`);

        const resp = await fet.json();

        const data = await resp;


        return data;
    }

    //Change Weather Location
    changeLocation(city, state) {
        this.city = city;
        this.state = state;
    }
}