const url = 'https://api.themoviedb.org/3/discover/movie?api_key=ec710ff500787c0668a9c88b9ebff780';
const img = 'https://image.tmdb.org/t/p/w1280';
const searchapi = 'https://api.themoviedb.org/3/search/movie?&api_key=ec710ff500787c0668a9c88b9ebff780&query=';


function showMovies(url) {
    const main = document.getElementById("main");
  fetch(url).then(res => res.json())
  .then(function(data) {
      console.log(data.results);
      data.results.forEach(element => {
          const elem = document.createElement('div');
          const image = document.createElement('img');
          const text = document.createElement('h2');
          text.innerHTML = `${element.title}`;
          image.src = img + element.poster_path;
          elem.appendChild(image);
          elem.appendChild(text);
          main.appendChild(elem);
      });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  showMovies(url);
  const form = document.getElementById("form");
  const search = document.getElementById("search");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let main = document.getElementById("main");
    main.innerHTML = '';
    const searchMovie = search.value;
    if (searchMovie) {
        showMovies(searchapi + searchMovie);
        search.value = "";
    }
});
});