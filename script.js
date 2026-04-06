async function getWeather() {
    const location = document.getElementById("locationInput").value;

    if (location === "") {
        alert("Please enter a location!");
        return;
    }

    const apiKey = "b0a1d3db604c4c2e813134035260604";
    const url = `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${location}&aqi=yes`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        document.getElementById("city").innerText = data.location.name + ", " + data.location.country;
        document.getElementById("temp").innerText = "Temperature: " + data.current.temp_c + "°C";
        document.getElementById("condition").innerText = "Condition: " + data.current.condition.text;

    } catch (error) {
        alert("Error fetching weather data!");
        console.log(error);
    }
}