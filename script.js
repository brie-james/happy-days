
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

  // Weather API (replace YOUR_API_KEY)
  fetch("https://api.openweathermap.org/data/2.5/weather?q=Wellington&appid=YOUR_API_KEY&units=metric")
    .then(res => res.json())
    .then(data => {
      document.getElementById("weather").innerText =
        `Weather in ${data.name}: ${data.main.temp}°C, ${data.weather[0].description}`;
    });
}

loadData(); // Load on page start
