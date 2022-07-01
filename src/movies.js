// The `movies` array from the file `src/data.js`.
//console.log('movies: ', movies);

const movies = require("./data");


// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(Movies) {
  let directores = Movies.map(function (Movies){
    return Movies.director;
  }); 
  return directores;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(array) {
    let steve = array.filter((Movies) => {
    return (Movies.genre.includes('Drama') && Movies.director == 'Steven Spielberg')});
    return steve.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
 
function scoresAverage(moviesArray) {
    if (moviesArray.length) {
      let scores = moviesArray.map((element) => element.score);
      console.log(scores);
      let filteredScores = Array.from(scores, (item) => item || 0);
      console.log(filteredScores);
      let average = filteredScores.reduce((acc, value) => acc + value, 0);
      return parseFloat((average / filteredScores.length).toFixed(2));}
      else {return 0;
  }
}


// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(arr) {
  let pelis = arr.filter((element)=> element.genre.includes('Drama'));
  return scoresAverage(pelis)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
function orderByYear(moviesArray){
  let moviesOrder = [...moviesArray];
  return moviesOrder.sort((a,b) => {
    if (a.year !== b.year) {
      return a.year -b.year;
    } else {
      return a.tittle.localeCompare(b.tittle)
    }
  })
}
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles

function orderAlphabetically(movies){
    const orderByTitle = movies
    .map((movie) => movie.title)
    .sort((a, b) => a.localeCompare(b));
  return orderByTitle.slice(0, 20);
}







// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes() {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg() {}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    howManyMovies,
    scoresAverage,
    dramaMoviesScore,
    orderByYear,
    orderAlphabetically,
    turnHoursToMinutes,
    bestYearAvg,
  };
}
