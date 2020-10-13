import * as vis from "vis-network";
import * as searchAPI from "./search";

let nodes = null;
let edges = null;
let network = null;

let searchResult;

const reworkData = () => {
  const imgURL = "https://image.tmdb.org/t/p/w500";
  searchResult.map((movie, idx) => {
    movie["shape"] = "circularImage";
    movie["image"] = imgURL + movie.poster_path;
    movie["label"] = movie.title;
    movie["brokenImage"] = "https://img.icons8.com/cotton/2x/error-cloud.png";
  });
};

const linksFrom = (movie) => {
  return searchResult.map((arrMovie) => {
    if (movie.id === arrMovie.id) return {};
    return { from: movie.id, to: arrMovie.id };
  });
};
// Called when the Visualization API is loaded.
function draw() {
  // create people.
  // value corresponds with the age of the person
  nodes = searchResult;
  edges = linksFrom(searchResult[0]);

  // create a network
  const container = document.getElementById("mynetwork");
  const data = {
    nodes: nodes,
    edges: edges,
  };
  const options = {
    autoResize: true,
    nodes: {
      borderWidth: 4,
      size: 30,
      color: {
        border: "#222222",
        background: "#666666",
      },
      font: { color: "#eeeeee" },
    },
    edges: {
      color: "lightgray",
    },
  };
  network = new vis.Network(container, data, options);
  console.log(network);
}

// window.addEventListener("load", () => {
//   draw();
// });
let requestTimer;
const listenInput = searchAPI.input.addEventListener("input", (e) => {
  clearTimeout(requestTimer);
  requestTimer = setTimeout(() => {
    searchAPI.searchMovie(e.target.value).then((data) => {
      searchResult = data.results;
      reworkData();
      draw();
    });
  }, 300);
});
