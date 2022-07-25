var citySearchEl = document.querySelector("formLookup");
var cityEl =document.querySelector("#inputCity");
var searchListEl = document.querySelector("#recents");
var todayWeatherEl =document.querySelector("#currentStatus");
var currentDateEl = document.querySelector("#currentDate");
var containerEl = document.querySelector("#extendedWeather");



var formSubmit =function(event) {
    event.preventDefault();
     
    var searchCity = document.querySelector("input[name='inputCity']").value;

    var listEl = document.createElement("li");
    listEl.className = "search-item";

    var searchInfoEl = document.createElement("div");
     
    searchInfoEl.className = "search-info";

    searchInfoEl.innerHTML = "<h3 class=searchCity'>" + searchCity + "</h3>";
    listEl.appendChild(searchCity);

    searchCity.appendChild(listEl);

    











}
