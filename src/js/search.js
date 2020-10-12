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

module.exports = { input, getValue };
