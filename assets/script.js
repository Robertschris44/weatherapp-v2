var uValue = $(".uvi");
var searchbtn = $("search-btn");
var apiKey = "d899707429dae12637678613a5874634"
var searchInput = "";
var currentTemp = $("#currenttemp");
var currentWind = $("#currentwind");
var currentHumidity = $("#currenthumidity");
var currentUv = $("#currentUVindex");
var currentDate = moment().format("M/D/YYYY");
var cityName = "";
var dlyDivs = [$("#daily-1div"), $("#daily-2div"), $("#daily-3div"), $("#daily-4div"), $("#daily-5div")];
var storedCities = JSON.parse (localStorage.getItem("storedCites")) || [];

for (var i =0; i <storedCities.length; i ++) {
    var city = storedCities[i];
}


