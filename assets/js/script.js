// API link with key, please follow readme how to create own API key for application to work.

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + APIKey + "&page-1";
const IMGPath = "https://image.tmdb.org/t/p/w1280";
const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=" + APIKey +"&query=";

const mainSection = document.getElementById("mainSection"); // selectiong DOM element to work with

async function movies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  respData.results.forEach((movie) => {
    const {poster_path, title, vote_average} = movie; // Pulling necessary names from API

    const movieBox = document.createElement("div"); //creating a div for individual movie elements
    movieBox.classList.add("movie"); // creating a class for it

    movieBox.innerHTML = `
     <img src="${IMGPath + poster_path}" alt="${title}" />
     <div class="movie-info">
      <h3>${title}</h3>
      <span>${vote_average}</span>
    </div>
    `; // creating markup for every movie element and pulling information from API

    mainSection.appendChild(movieBox); // sending back
  });



  return respData;
}

movies(); // calling funcion to work
