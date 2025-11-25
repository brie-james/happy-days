function loadData() {
  // Dog API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("dog-img").src = data.message;
    });

  // Cat Fact API
  fetch("https://catfact.ninja/fact")
    .then(res => res.json())
    .then(data => {
      document.getElementById("cat-fact").innerText = data.fact;
    });
}

(); // Load on page start
