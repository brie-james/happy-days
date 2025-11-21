
function loadData() {
  // Joke API
  fetch("https://v2.jokeapi.dev/joke/Programming")
    .then(res => res.json())
    .then(data => {
      const joke = data.type === "single" ? data.joke : `${data.setup} - ${data.delivery}`;
      document.getElementById("joke").innerText = joke;
    });

  // Dog API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("dog-img").src = data.message;
    });

  // Open-Meteo API for Wellington
  fetch("https://api.open-meteo.com/v1/forecast?latitude=-41.2865&longitude=174.7762&current_weather=true")
    .then(res => res.json())
    .then(data => {
      const weather = data.current_weather;
      document.getElementById("weather").innerText =
        `Wellington: ${weather.temperature}°C, Wind ${weather.windspeed} km/h`;
    });
}

loadData(); // Load on page start
