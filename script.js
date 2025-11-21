
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

  // Weather API for Wellington
fetch("https://api.weatherapi.com/v1/current.json?key=fb957b63d1914eed80031712252111&q=Wellington")
  .then(res => res.json())
  .then(data => {
    document.getElementById("weather").innerText =
      `Wellington: ${data.current.temp_c}°C, ${data.current.condition.text}`;
  });
}

loadData(); // Load on page start



