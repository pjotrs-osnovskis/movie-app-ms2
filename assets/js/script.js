// API link with key, please follow readme how to create own API key for application to work.
const APIKey = "84f767ca64c6a454244f1189da5728db";
const EmailJSUserID = "user_DoOnYBoOadoZVbGED61tp";
const EmailJSAccessToken = "cfda4527438f42ac589a4a113c1eeb6d";


const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + APIKey + "&page-1";
const IMGPath = "https://image.tmdb.org/t/p/w1280";
const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=" + APIKey +"&query=";

const mainSection = document.getElementById("mainSection"); // selecting DOM element to work with
const searchForm = document.getElementById("search-form");
const searchInput = document.getElementById("search-field");

movies(APIURL); // calling popular movies function to work 

async function movies(url) {
  const resp = await fetch(url);
  const respData = await resp.json();

  showMovies(respData.results);
}

function showMovies(movies) {

  mainSection.innerHTML = ""; // clearing page to show new results

  movies.forEach((movie) => {
    const {poster_path, title, vote_average, overview, release_date, id, backdrop_path} = movie; // Pulling necessary names from API

    const movieBox = document.createElement("div"); //creating a div for individual movie elements
    movieBox.classList.add("movie"); // creating a class for it

    movieBox.innerHTML = `
    <div class="movie-image"><img id="movieImage" src="${IMGPath + poster_path}" alt="${title}" /></div>
    <div class="movie-info">
      <a class="movie-title" data-bs-toggle="modal" data-bs-target="#modal_${id}">
        ${title}
      </a>
      <span class="${classByRating(vote_average)}">${vote_average}</span>
      
      <div class="modal fade" id="modal_${id}" tabindex="-1" aria-labelledby="movieModal" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="movieModal">${title}</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <div class="movie-poster"><img src="${IMGPath + backdrop_path}" alt="${title}" /></div>
              <h5>Movie Description:</h5>
              <p>${overview}</p>
              <h5 class="release-date" id="date-${id}">Release Date: ${dateToYear(release_date)}</h5>
            </div>
            <div class="modal-footer">
              <button type="button" class="general-btn" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    `; // creating markup for every movie element and pulling information from API

    mainSection.appendChild(movieBox); // sending back to HTML file
  });
}

function dateToYear(date) { // Formatting date 
  const setDate = new Date(date);
  let ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(setDate);
  let mo = new Intl.DateTimeFormat('en', { month: 'long' }).format(setDate);
  let da = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(setDate);
  return `${mo} ${da}, ${ye}`
}

function classByRating(vote) { //checking how high is the movie rating and giving appropriate class name.
  if(vote >= 8) {
    return "green";
  } else if(vote >= 5) {
    return "amber"
  } else {
    return "red";
  }
}

document.getElementById("search-form").addEventListener("submit", (i) => {
  i.preventDefault();

  const searchTerm = searchInput.value;

  if(searchTerm) {
    movies(SearchAPI + searchTerm)
    searchInput.value = "";
  }
})

function sendMail(contactForm) {
  emailjs.init(EmailJSUserID); // Please see README.md file how to get own user id for it to work
  emailjs.send("gmail", "temp_1", {
      "from_name": contactForm.name.value,
      "from_email": contactForm.emailAddress.value,
      "project_request": contactForm.projectSummary.value
  })
  .then(
      function(response) {
        $("#thankYouModal").modal('show');
        console.log("SUCCESS", response);
      },
      function(error) {
        $("#errorModal").modal('show');
        console.log("FAILED", error);
      }
  );
  return false;  // To block from loading a new page

}

function formReset() {
  document.getElementById("contactForm1").reset();
}