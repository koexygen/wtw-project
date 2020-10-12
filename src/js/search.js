const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchContent = document.getElementById("content");
const movieList = document.getElementById("movie-list");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
  searchContent.classList.toggle("moveRight");
};

// Fetch Requests
searchBtn.addEventListener("click", expand);
const apiKey = "afc2df6ed2b105665b061dcc22c09716";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

let searchResults;
const searchMovie = (query) => {
  //clean li
  while (movieList.firstChild) {
    movieList.removeChild(movieList.firstChild);
  }

  //fetch new movies
  return fetch(url + query)
    .then((response) => response.json())
    .then((data) => {
      searchResults = data.results;
      searchResults.map((result) => {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(result.title));
        movieList.appendChild(li);
      });
      return data;
    });
};

let requestTimer;
const listenInput = input.addEventListener("input", (e) => {
  clearTimeout(requestTimer);
  requestTimer = setTimeout(() => searchMovie(e.target.value), 300);
});

module.exports = { input, searchMovie, listenInput };
