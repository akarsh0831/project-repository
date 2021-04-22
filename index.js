const url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1';
const img = 'https://image.tmdb.org/t/p/w1280';
const searchapi = 'https://api.themoviedb.org/3/search/movie?&api_key=04c35731a5ee918f014970082a0088b1&query=';

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

showMovies(url);
function showMovies(url) {
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
          main.appendChild(el);
      });
  });
}

form.addEventListener("submit", (e) => {
    e.preventDefault();
    main.innerHTML = '';
    const searchMovie = search.value;
    if (searchMovie) {
        showMovies(searchapi + searchMovie);
        search.value = "";
    }
});