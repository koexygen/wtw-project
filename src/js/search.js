const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");
const searchContent = document.getElementById("content");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
  searchContent.classList.toggle("moveRight");
};

// Fetch Requests
searchBtn.addEventListener("click", expand);
const apiKey = "afc2df6ed2b105665b061dcc22c09716";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=`;

const searchMovie = (query) => {
  return fetch(url + query)
    .then((response) => response.json())
    .then((data) => console.log(data));
};

// const updateValue = (e) => setTimeout(searchMovie, 500);
let requestTimer;
input.addEventListener("input", (e) => {
  clearTimeout(requestTimer);
  requestTimer = setTimeout(() => searchMovie(e.target.value), 500);
});

module.exports = { input, searchMovie };
