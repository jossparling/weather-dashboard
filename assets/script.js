var userFormEl = document.querySelector("#user-form");
var cityButtonsEl = document.querySelector("#city-buttons");
var nameInputEl = document.querySelector("#city-name");
var forecastContainerEl = document.querySelector("#forecast-container");
var citySearchTerm = document.querySelector("#city-search-term");

var formSubmitHandler = function(event) {
    // prevent page from refreshing
    event.preventDefault();

    // get value from input element
    var cityName = nameInputEl.value.trim();

    if (cityName) {
        getForecast(cityName);

        // clear old content
        forecastContainerEl.textContent = "";
        nameInputEl.value = "";
    } else {
        alert("Please enter a city name");
    }
};

// var buttonClickHandler = function(event) {
//     // get city attribute from the clicked element
//     var cityBtn = event.target.getAttribute("data-city");

//     if (cityBtn) {
//         getWeatherForecast(cityBtn);

//         // clear old content
//         forecastContainerEl.textContent = "";
//     }
// };

var getForecast = function(forecast) {
    // format one call api url
    var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + nameInputEl + "&appid=c9ef6e11c075f6d66c3446b98863ab2c";

    // make a get request to url
    fetch(apiUrl)
    .then(function(response) {
        // request was successful
        if (response.ok) {
            console.log(response);
            response.json().then(function(data) {
                console.log(data);
                // displayForecast(data,forecast);
            });
        } else {
            alert('Error: Invalid City');
        }
    })
    .catch(function(error) {
        alert("Unable to connect to Forecaster");
    });
};

// var getWeatherForecast = function(city) {
//     // format the one call api url
//     var apiUrl = "http://api.openweathermap.org/geo/1.0/direct?q=" + city + "&appid=c9ef6e11c075f6d66c3446b98863ab2c";

//     // make a get request to url
//     fetch(apiUrl).then(function(response) {
//         // request was successful
//         if (response.ok) {
//             response.json().then(function(data) {
//                 displayForecast(data.items, city);
//             });
//         } else {
//             alert("Error: " + response.statusText);
//         }
//     });
// };

// var displayForecast = function(forecast, searchTerm) {
//     // check if api returned the forecast
//     if (forecast.length === 0) {
//         forecastContainerEl.textContent = "No information found.";
//         return;
//     }

//     citySearchTerm.textContent = searchTerm;

//     // loop over forecast
//     for (var i=0; i < forecast.length; i++) {
//         // format forecast
//         var cityName = forecast[i].weather.description;
//     }

//     // append container to the dom
//     forecastContainerEl.appendChild(forecastEl);
// }

// add event listeners to form and button container
userFormEl.addEventListener("submit", formSubmitHandler);
// cityButtonsEl.addEventListener("click", buttonClickHandler);
