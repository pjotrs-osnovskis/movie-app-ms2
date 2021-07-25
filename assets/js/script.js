// API link with key, please follow readme how to create own API key for application to work.

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + APIKey + "&page-1";
const IMGPath = "https://image.tmdb.org/t/p/w1280";
const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=" + APIKey +"&query=";

const mainSection = document.getElementById("main-section"); // selecting DOM element to work with
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-field");


movies(APIURL); // calling popular movies funcion to work 

async function movies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
}

function showMovies(movies) {
  

  mainSection.innerHTML =""; // clearing page to show new reults

  movies.forEach((movie) => {
    const {poster_path, title, vote_average, overview} = movie; // Pulling necessary names from API

    const movieBox = document.createElement("div"); //creating a div for individual movie elements
    movieBox.classList.add("movie"); // creating a class for it

    movieBox.innerHTML = `
      <div class="movie-image"><img src="${IMGPath + poster_path}" alt="${title}" /></div>
      <div class="movie-info">
        <button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#exampleModal">
          ${title}
        </button>
        <span class="${classByRating(vote_average)}">${vote_average}</span>
        
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">${title}</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                ${overview}
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    `; // creating markup for every movie element and pulling information from API

    

    mainSection.appendChild(movieBox); // sending back to HTML file
  });
}


function classByRating(vote) { //checking how high is the movie rating and giving apropriate class name.
  if(vote >= 8) {
    return "green";
  } else if(vote >= 5) {
    return "amber"
  } else {
    return "red";
  }
}


searchForm.addEventListener("submit", (i) => {
  i.preventDefault();

  const searchTerm = searchInput.value;

  if(searchTerm) {
    movies(SearchAPI + searchTerm)
    searchInput.value = "";
  }
})


