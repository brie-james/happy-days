function setBackground() {
  // Unsplash random image
  fetch("https://source.unsplash.com/random/1600x900/?nature,landscape")
    .then(response => {
      document.body.style.backgroundImage = `url(${response.url})`;
    });
}
function loadData() {
  setBackground();

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

  // WeatherAPI (replace YOUR_API_KEY)
  fetch("https://api.weatherapi.com/v1/current.json?key=fb957b63d1914eed80031712252111&q=Wellington")
    .then(res => res.json())
    .then(data => {
      document.getElementById("weather").innerText =
        `Wellington: ${data.current.temp_c}°C, ${data.current.condition.text}`;
    });
}

loadData(); // Load on page start
