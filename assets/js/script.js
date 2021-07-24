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
      <div class="movie-image"><img src="${IMGPath + poster_path}" alt="${title}" /></div>
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${classByRating(vote_average)}">${vote_average}</span>
      </div>
    `; // creating markup for every movie element and pulling information from API

    mainSection.appendChild(movieBox); // sending back to HTML file
  });
  return respData;
}

//checking how high is the movie rating and giving apropriate class name.
function classByRating(vote) { 
  if(vote >= 8) {
    return "green";
  } else if(vote >= 5) {
    return "amber"
  } else {
    return "red";
  }
}



movies(); // calling funcion to work

