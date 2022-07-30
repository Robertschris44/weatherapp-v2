// var citySearchEl = document.querySelector("formLookup");
// var cityEl =document.querySelector("#inputCity");
// var searchListEl = document.querySelector("#recents");
// var todayWeatherEl =document.querySelector("#currentStatus");
// var currentDateEl = document.querySelector("#currentDate");
// var containerEl = document.querySelector("#extendedWeather");


// var formSubmitHandler = function(event){
//     event.preventDefault();
// }
     
//     var searchCity = document.querySelector("input[name='inputCity']").value;

//     var listEl = document.createElement("li");
//     listEl.className = "search-item";
//     listEl.appendChild(searchCity);

//     var searchInfoEl = document.createElement("div");
     
//     searchInfoEl.className = "search-info";

//     searchInfoEl.innerHTML = "<h3 class=searchCity'>" + searchCity + "</h3>";
//     listItemEl.appendChild(listItemEl);
    

//     searchCity.appendChild(listItemEl);

//     var cityInput = cityEl.value.trim();
//     if (cityInput){
//         getForecast(cityInput);
//     }
//     formSearch.reset()

// };

//  function getlatandlon(searchInput){
//     var apiUrl = "https://api.openweathermap.org/geo/1.0/direct?q=" + searchInput + "&limit=1&appid=" + apiKey;
//     fetch(apiUrl).then(function(response){
//         if (response.ok){
//             response.json().then(function(data){
//             console.log(data);
//               // Gets the lon and lat of the location
//               var locationLat = data[0].lat;
//               var locationLon = data[0].lon;
//               cityName = data[0].name;
//               // Convert from Int to Str
//               var latString = locationLat.toString();
//               var lonString = locationLon.toString();
//               // Call function to get values
//               getForecast(latString, lonString);
//             });
//         } else {
//             alert("Location Not Found");
//         }
//     });   
//  }
// var getForecast = function(cityInput) {
//     var apiUrl = `https://api.openweathermap.org/data/2.5/uvi?lat=${lat}&lon=${lon}&appid=${apiKey}`;
//     fetch(apiUrl).then(function(response){
//         if(response.ok){
//             response.json().then(function(data){
//                 console.log(data);
//             })
//         }
//     })
// }
