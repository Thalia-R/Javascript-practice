const apiUrl = "http://www.omdbapi.com/?apikey=160891a7&s=star wars";
const movieContainer = document.querySelector(".results");

async function getMovies() {
  try {
    const response = await fetch(apiUrl);
    const results = await response.json();
    const facts = results.Search;

    console.log(facts);
    movieContainer.innerHTML = "";

    facts.forEach(function (fact) {
      movieContainer.innerHTML += `
      <div class="result">                                  
        <div class="card">
          <img src="${fact.Poster}">
          <div class="contain">
            <h4>${fact.Title}</h4>
            <p>Type: ${fact.Type}</p>
            <p>Year: ${fact.Year}</p>
          </div>
        <a class="button" href="details.html?i=${fact.imdbID}">MORE</a>
        </div>
      </div>
`;
    });
  } catch (error) {
    movieContainer.innerHTML = "Something went wrong!";
  }
}

getMovies();
