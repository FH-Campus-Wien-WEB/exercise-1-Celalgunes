const express = require('express')
const path = require('path')
const app = express()

// Serve static content in directory 'files'
app.use(express.static(path.join(__dirname, 'files')));


const movies = [
  {
    "Title": "The Thing",
    "Released": "1982-06-25",
    "Runtime": 109,
    "Genres": ["Horror", "Mystery", "Sci-Fi"],
    "Directors": ["John Carpenter"],
    "Writers": ["Bill Lancaster", "John W. Campbell Jr."],
    "Actors": ["Kurt Russell", "Wilford Brimley", "Keith David"],
    "Plot": "A research team in Antarctica is hunted by a shape-shifting alien.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNGViZWZmM2EtNGYzZi00ZDAyLTk3ODMtNzIyZTBjN2Y1NmM1XkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg",
    "Metascore": 57,
    "imdbRating": 8.2
  },
  {
    "Title": "Escape Plan",
    "Released": "2013-10-18",
    "Runtime": 115,
    "Genres": ["Action", "Adventure"],
    "Directors": ["Mikael Håfström"],
    "Writers": ["Miles Chapman", "Jason Keller"],
    "Actors": ["Sylvester Stallone", "Arnold Schwarzenegger", "50 Cent"],
    "Plot": "When a structural-security authority finds himself set up and incarcerated in the world's most secret and secure prison, he has to use his skills to escape with help from the inside",
    "Poster": "https://m.media-amazon.com/images/M/MV5BMTk3OTcxMTEyNl5BMl5BanBnXkFtZTcwMDQ4MjQ2OQ@@._V1_SX300.jpg",
    "Metascore": 49,
    "imdbRating": 6.7
  },
  {
    "Title": "The Matrix",
    "Released": "1999-03-31",
    "Runtime": 136,
    "Genres": ["Action", "Sci-Fi"],
    "Directors": ["Lana Wachowski", "Lilly Wachowski"],
    "Writers": ["Lana Wachowski", "Lilly Wachowski"],
    "Actors": ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
    "Plot": "A computer hacker learns from mysterious rebels about the true nature of his reality.",
    "Poster": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
    "Metascore": 73,
    "imdbRating": 8.7
  }
];


app.get('/movies', function (req, res) {
  res.json(movies);
});

app.listen(3000)
console.log("Server now listening on http://localhost:3000/")