// var uValue = $(".uvi");
// var searchbtn = $("search-btn");
var apiKey = "d899707429dae12637678613a5874634"
var searchInput = "";
// var currentTemp = $("#currenttemp");
// var currentWind = $("#currentwind");
// var currentHumidity = $("#currenthumidity");
// var currentUv = $("#currentUVindex");
// var currentDate = moment().format("M/D/YYYY");
var cityName = "";
// var dailyDivs = [$("#daily-1div"), $("#daily-2div"), $("#daily-3div"), $("#daily-4div"), $("#daily-5div")];
var storedCities = JSON.parse (localStorage.getItem("storedCites")) || [];

for (var i =0; i <storedCities.length; i ++) {
    var city = storedCities[i];
    var cityEl = $("<li>");
    cityEl.addclass("btn list-group");
    cityEl.textContent(city);
    $("#city-list").append(cityEl);
}

searchButton.click(function(){
    console.log ("btnwasclicked")
    //trimmed empty spaces in inputcity
    searchInput = $("#inputcity").val().trim();
    var previousSavedCities = JSON.parse(localStorage.getItem("storedCites")) || []
    previousSavedCities.push(searchInput)
    //working on local storage
    localStorage.setItem("storedCities", JSON.stringify(previousSavedCities))
    getUserlocation(searchInput); 
});

function getSavedWeather(){
    getUserlocation($(this).text())
}
//Get the lon and lat
function getUserlocation (searchInput) {
    var apiUrl = ("https://api.openweathermap.org/data/2.5/forecast?" + searchInput + "&appid=8e8a4571fd74feffb1e4f730b5eb774b")
    fetch(apiUrl).then(function(response){
       if (response.ok) {
        response.json().then(function(data){
            console.log(data);
            var loclat = data[0].lat;
            var loclon = data[0].lon;
            cityName = data[0].name;

            var latString = loclat.toString();
            var lonString = loclon.toString();
            getForecast(latString, lonString);
        })
       }
    })
     
    
    
};



function getForecast (lat, lon) {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=" + lat + "&lon=" + lon + "&exclude=minutely,hourly,alerts&units=imperial&appid=" + apiKey;
    fetch (apiUrl).then(function(response){
        if (response.ok){
            response.json().then(function(data){
                console.log(data);
                var currentCityEl = $("#cityname");
                currentCityEl.text(cityName.toUpperCase()+ currentDate);
                var currentTempEl = $("#today-temp");
                currentTempEl.text(data.current.temp);
                var currentWindEl = $("#today-wind");
                currentWindEl.text(data.current.wind_speed);
                var currentHumidityEl = $("#today-humidity");
                currentHumidityEl.text(data.current.humidty);
                var currentUvEl = $("#todayuvindex");
                currentUvEl.text(data.current.uvi);

                for (var i =0; i < dailyDivs.length; i ++) {
                    var humanDateFormat = new Date(data.daily[i + 1].dt * 1000).toLocaleDateString("en-US");
                    dailyDivs[i].find(".dateText").text(humanDateFormat);
                    dailyDivs[i].find(".tempText").text(data.daily[i + 1].temp.day)
                    dailyDivs[i].find(".windText").text(data.daily[i + 1].wind_speed)
                    dailyDivs[i].find(".humidityTest").text(data.daily[i + 1].humidty)
                    dailyDivs[i].find(".uvText").text(data.daily[i + 1].uvi)
                }
                
            })
        }
    })
};
$("#city-list").on("click,", "list-group-item", getSavedWeather)


