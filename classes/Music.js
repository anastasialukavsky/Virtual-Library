// import the Media class:
const Media = require('./Media');
// create your Music class:
class Music extends Media {
  constructor(title, year, genre, artist, length) {
    super(title, year, genre);
    this.artist = artist;
    this.length = length;
  }

  summary() {
    return `Title: ${this.title}, Artist: ${this.artist}, Year: ${this.year}, Genre: ${this.genre}, Length: ${this.length} seconds`
  }

  static shortestAlbum(albums) {
    if(!Array.isArray(albums)) return null;
    return albums.reduce((currentSong, prevSong) => currentSong.length > prevSong.length ? prevSong : currentSong)
  }
}
// don't change below
module.exports = Music;
