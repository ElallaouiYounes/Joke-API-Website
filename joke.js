const joke = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');
const url = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=religious&type=single";

let getJoke = () => {
    fetch(url)
    .then(data => data.json())
    .then(item => {
        joke.textContent = `${item.joke}`;
    });
}
jokeBtn.addEventListener("click",getJoke);
getJoke();