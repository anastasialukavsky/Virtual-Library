const Music = require('./Music');

class Podcast extends Music {
  constructor(
    title,
    year,
    genre,
    artist,
    length,
    host,
    episodeName,
    episodeNumber,
    guests
  ) {
    super(title, year, genre, artist, length);
    this.host = host;
    this.episodeName = episodeName;
    this.episodeNumber = episodeNumber;
    this.guests = guests;
  }

  listen() {
    return `Title: ${this.title} - Episode: ${this.episodeName}. Hosted by ${
      this.host
    } and featuring guests ${this.guests.join(', ')}. Length: ${
      this.length
    } seconds.`;
  }
}


const podcast = new Podcast(
  'Scary stories',
  2022,
  'Horror',
  'Shakira',
  345,
  'John Doe',
  'Episode 1',
  1,
  ['ghost', 'shrek']
);


console.log(podcast.listen());
module.exports = Podcast;
