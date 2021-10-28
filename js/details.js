const detailsContainer = document.querySelector(".results");

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("i");

const url = "http://www.omdbapi.com/?apikey=160891a7&i=" + id;

async function getDetails() {
  try {
    const response = await fetch(url);

    const result = await response.json();

    document.title = result.Title;

    console.log(result);

    detailsContainer.innerHTML = `
        <div class="poster-container">
            <img src="${result.Poster}" alt="Movie poster">
        </div>
                          <div class="details-description">
                            <i class="fa fa-star"></i>${result.Ratings[0].Value}
                                <h2>${result.Title}</h2>
                               <p> ${result.Genre}</p>
                                <div class="plot">
                                    <p>${result.Plot}</p>
                                </div>
                                <div>
                                      <h4>Actors:</h4><p> ${result.Actors}</p>
                                      <h4>Director:</h4><p>  ${result.Director}</p>
                                </div>
                                <div class="movie-info">
                                  <div class="movie-info-1">
                                  <h4>Released:</h4><p>  ${result.Released}</p>
                                  <h4>Language:</h4><p>${result.Language}</p>
                                </div>
                                <div class="movie-info-1">
                                  <h4>Runtime:</h4><p>${result.Runtime}</p>
                                  <h4>Box office:</h4><p>${result.BoxOffice}</p>
                                </div>
                                <div class="movie-info-1">
                                  <h4>Country:</h4><p>${result.Country}</p>
                                </div>                  
                            </div>
                            <a href="index.html">Back</a>`;
  } catch (error) {
    console.log(error);
    detailsContainer.innerHTML = "Something went wrong!";
  }
}

getDetails();
