// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const allDirectors = moviesArray.map(movie=> {
       
        return movie.director
    })
    return allDirectors
}


// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const steven = moviesArrey.filter(stevMovie => {
        if ( movies.director === 'Steven Spielberg'){
            return stevMovie.director
        }
        else{
            return 0
        }
    })
    return steven.length
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(moviesArray.lenght === undefined){
        return 0
    }
    else{
    const sum = moviesArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.score;
    }, 0);
    const avg = sum/moviesArray.length;
    return Math.round(avg* 100) / 100;
    }
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if(moviesArray.genre === undefined){
        return 0
    }
    else if (moviesArray.genre === [drama]){
    const sum = moviesArray.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.score;
    }, 0);
    const avg = sum/moviesArray.length;
    return Math.round(avg* 100) / 100;
    }
    else{
        return null
    }
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const yearSort = [...moviesArray.sort ((a,b) => 
        {return a - b; })]
    return yearSort
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const sortMovies = [...moviesArray.sort ((a,b) => 
        {return a-b; })]
    
    return moviesArray.slice(0,20)
}


// function orderAlphabetically(moviesArray) {
//     const sortMovies = [...moviesArray.sort ((a,b) => 
//   if (a.title.toUpperCase() <  b.title.toUpperCase()) {
//     return -1;
//   }
//   if (a.title.toUpperCase() >  b.title.toUpperCase()) {
//     return 1;
//   }
//   return 0;]
// return moviesArray.slice(0,20)
// }


// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}
