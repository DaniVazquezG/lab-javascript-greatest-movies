// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const directors = moviesArray.map((movie) => movie.director)
    return directors
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const spielMovies = moviesArray.filter((movie) => movie.director === "Steven Spielberg" && movie.genre.includes("Drama")).length
    return spielMovies
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    const scrSum = moviesArray.reduce((acc, current) => acc + current.score, 0)
    const scrAvg = scrSum / moviesArray.length
    return moviesArray.length !== 0 ? Number(scrAvg.toFixed(2)) : 0
    
    
    
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    const drama = moviesArray.filter(drama => drama.genre.includes("Drama"))
    const dramaAvg = drama.reduce((acc, current) => acc + current.score, 0) / drama.length
    return drama.length !== 0 ? Number(dramaAvg.toFixed(2)) : 0
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const movieYear = moviesArray.map(movie => movie.year)
    const yearOrder = movieYear.sort((b, a) => {return b - a})
    return yearOrder
    
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const alphaOrder = moviesArray.map((movie) => movie.title).sort()
    return alphaOrder.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {}


