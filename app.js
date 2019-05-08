//Init Storage
const storage = new Storage();

//Get stored Location data
const weatherLocation = storage.getLocationData();



//Ini Weather Class

const weather = new Weather(weatherLocation.city, weatherLocation.state);

//Ini UI
const ui = new UI();



//Get Weather On DomLoad
document.addEventListener('DOMContentLoaded', getWeather);

//Change Locations Event
document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const city = document.getElementById('city').value;
    const state = document.getElementById('state').value;

    //Change Location
    weather.changeLocation(city, state);

    //Set location in LS
    storage.setLocationData(city, state);

    //Get New Weather

    getWeather();

    //Close modal
    $('#locModal').modal('hide');
});


function getWeather() {
    weather.getWeather()

    .then(fet => {
        console.log(fet);
        ui.paint(fet);
    
    
    })
    .then(resp => {(resp)})
    .then(data => {(data)})
    .catch(err => console.log(err)); 
}


