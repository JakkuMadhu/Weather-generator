// Ensure jQuery is loaded before running the script
if (typeof jQuery === "undefined") {
    console.error("Error: jQuery is not loaded. Make sure to include it in your HTML file.");
}

// OpenWeather API
const url = "https://api.openweathermap.org/data/2.5/weather";
const apiKey = "f00c38e0279b7bc85480c3fe775d518c"; // Replace with your actual API key

// Ensure DOM is ready before executing functions
$(document).ready(function () {
    if (typeof moment === "undefined") {
        console.error("Error: Moment.js is not loaded. Make sure to include it in your HTML file.");
    }

    // Fetch weather for default city (Pune)
    weatherFn("Pune");
});

// Function to fetch weather data
async function weatherFn(cityName) {
    const apiUrl = `${url}?q=${cityName}&appid=${apiKey}&units=metric`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("City not found. Please try again.");
        }
        const data = await response.json();
        weatherShowFn(data);
    } catch (error) {
        console.error("Error fetching weather data:", error);
        alert(error.message);
    }
}

// Function to update UI with weather data
function weatherShowFn(data) {
    $("#city-name").text(data.name);
    $("#date").text(moment().format("MMMM Do YYYY, h:mm:ss a")); // Ensure moment.js is loaded
    $("#temperature").html(`${data.main.temp}°C`);
    $("#description").text(data.weather[0].description);
    $("#wind-speed").html(`Wind Speed: ${data.wind.speed} m/s`);
    $("#weather-icon").attr("src", `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    $("#weather-info").fadeIn();
}
if (typeof jQuery === "undefined") {
    console.error("Error: jQuery is not loaded. Make sure to include it in your HTML file.");
} else {
    console.log("jQuery is loaded successfully!");
}
