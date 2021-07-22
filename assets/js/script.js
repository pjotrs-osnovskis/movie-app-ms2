// API link with key, please follow readme how to create own API key for application to work.

const APIURL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=" + APIKey + "&page-1";
const IMGPath = "https://image.tmdb.org/t/p/w1280";
const SearchAPI = "https://api.themoviedb.org/3/search/movie?&api_key=" + APIKey +"&query=";

async function movies() {
  const resp = await fetch(APIURL);
  const respData = await resp.json();

  respData.results.forEach((movie) => {
    const img = document.createElement("img");
    img.src = IMGPath + movie.poster_path

    document.body.appendChild(img);
  });

  return respData;
}

movies();
