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
}

loadData(); // Load on page start
