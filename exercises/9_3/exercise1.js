const API_URL = 'https://icanhazdadjoke.com/';

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
    .then(response => response.json())
    .then(data => document.getElementById("jokeContainer").innerHTML = data.joke)
};

window.onload = () => fetchJoke();

const myObject = {
  method: 'GET',
  headers: { 'Accept': 'application/json' }
};
