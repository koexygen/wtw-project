const input = document.getElementById("search-input");
const searchBtn = document.getElementById("search-btn");

const expand = () => {
  searchBtn.classList.toggle("close");
  input.classList.toggle("square");
};

searchBtn.addEventListener("click", expand);

const getValue = () => {
  return input.addEventListener("input", updateValue);
};

const updateValue = (e) => e.target.value;

const apiKey = "afc2df6ed2b105665b061dcc22c09716";
const query = "deadpool";
const url = `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&query=${query}`;

const searchMovie = () => {
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

module.exports = { input, getValue, searchMovie };
