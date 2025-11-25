function loadData() {
  // Advice Slip API
  fetch("https://api.adviceslip.com/advice")
    .then(res => res.json())
    .then(data => {
      document.getElementById("advice").innerText = `Advice: ${data.slip.advice}`;
    });

  // Dog API
  fetch("https://dog.ceo/api/breeds/image/random")
    .then(res => res.json())
    .then(data => {
      document.getElementById("dog-img").src = data.message;
    });
}

loadData();
