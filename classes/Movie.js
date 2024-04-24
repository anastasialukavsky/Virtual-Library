// import the Media class:
const Media = require('./Media');
// create your Movie class:
class Movie extends Media {
  constructor(title, year, genre, director, duration, rating) {
    super(title, year, genre);

    this.director = director;
    this.duration = duration;
    this.rating = rating;
  }

  static longestMovie(movies) {
    if (!Array.isArray(movies) || movies.length === 0) return null;

    return movies.reduce((prevMovie, currentMovie) => {
      return prevMovie.duration > currentMovie.duration
        ? prevMovie
        : currentMovie;
    });
  }

  summary() {
    return `Title: ${this.title}, Director: ${this.director}, Year: ${this.year}, Genre: ${this.genre}, Rating: ${this.rating}`;
  }
}
// don't change below
module.exports = Movie;
