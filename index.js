key = 'eb0cc3d2';
let movieNameRef = document.getElementById('movie-name');
let seacrhBtn = document.getElementById('seacrh-btn');
let result = document.getElementById('result');

let getMovie = () => {
  // if INPUT FIELD IS EMPTY
  let noval = movieNameRef.value;
 let url = `http://www.omdbapi.com/?t=${noval}&apikey=${key}`;
  if (noval.length <= 0) {
    result.innerHTML = `<h3 class="msg">PLEASE ENTER A MOVIE</h3>`;
  }
  else{
    fetch(url)
      .then((resp) => resp.json())
      .then((data) => {
      
      
      result.innerHTML = `
        <div class="info">
          <img src=${data.Poster} class="poster" >
          <div>
            <h2>${data.Title}</h2>
            <div class="rating">
              <img src=star.png class="star"/>
              <h4>${data.imdbRating}</h4>
            </div>
            <div class="years">
              <span>${data.Rated}</span>
              <span>${data.Year}</span>
              <span>${data.Runtime}</span>
            </div>
            <div class="kontol">
              <div>${data.Genre.split(",").join("</div><div>")}</div>
            </div>
            
          </div>
        </div>
        <div class="plot">
          <h3>Plot: </h3>
          <p>${data.Plot}</p>
          <h3>cast: </h3>
          <p>${data.Actors}</p>
        </div>
      `
      });
  }
};


seacrhBtn.addEventListener('click', getMovie);
window.addEventListener('load', getMovie);
