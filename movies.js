// //Code to practice async await with fake data that we will get using fetch

// //reference code
// let books;
let movies;

async function renderMovies(filter) {
  //Steps
  //select class that displays the movie and its info
  
  //check if we got any movies data
  //if no show loading logo
  //then get movies with await
  //remove loading
  //if we hav sort by low rating or other option
  //code here, we will compare filter with the options
  //now
  // map the data from array to html
  //end of the function
}
//function to show price or if it has discounted/ credit, strike the original and show the credit

//function to show star/ rating, if it not integer display half star


//Below to filter movies by rating, price and so on.
function filterMovies(event) {
  renderMovies(event.target.value);
  console.log("Sorting movies by  " + event.target.value);
  
}

setTimeout(() => {
  renderMovies();
});

function getMovies() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: 88,
          title: "Once Upon a Time in America",
          year: "1984",
          runtime: "229",
          genres: ["Crime", "Drama"],
          price: "$4.95",
          primeCredit: false,
          director: "Sergio Leone",
          actors: "Robert De Niro, James Woods, Elizabeth McGovern, Joe Pesci",
          plot: "A former Prohibition-era Jewish gangster returns to the Lower East Side of Manhattan over thirty years later, where he once again must confront the ghosts and regrets of his old life.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMGFkNWI4MTMtNGQ0OC00MWVmLTk3MTktOGYxN2Y2YWVkZWE2XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        },
        {
          id: 144,
          title: "The Hateful Eight",
          year: "2015",
          runtime: "187",
          genres: ["Crime", "Drama", "Mystery"],
          price: "$5.5",
          primeCredit: false,
          director: "Quentin Tarantino",
          actors:
            "Samuel L. Jackson, Kurt Russell, Jennifer Jason Leigh, Walton Goggins",
          plot: "In the dead of a Wyoming winter, a bounty hunter and his prisoner find shelter in a cabin currently inhabited by a collection of nefarious characters.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA1MTc1NTg5NV5BMl5BanBnXkFtZTgwOTM2MDEzNzE@._V1_SX300.jpg",
        },
        {
          id: 23,
          title: "The Deer Hunter",
          year: "1978",
          runtime: "183",
          genres: ["Drama", "War"],
          price: "$6.5",
          primeCredit: false,
          director: "Michael Cimino",
          actors:
            "Robert De Niro, John Cazale, John Savage, Christopher Walken",
          plot: "An in-depth examination of the ways in which the U.S. Vietnam War impacts and disrupts the lives of people in a small industrial town in Pennsylvania.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTYzYmRmZTQtYjk2NS00MDdlLTkxMDAtMTE2YTM2ZmNlMTBkXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        },
        {
          id: 82,
          title: "The Wolf of Wall Street",
          year: "2013",
          runtime: "180",
          genres: ["Biography", "Comedy", "Crime"],
          price: "$7.25",
          primeCredit: false,
          director: "Martin Scorsese",
          actors:
            "Leonardo DiCaprio, Jonah Hill, Margot Robbie, Matthew McConaughey",
          plot: "Based on the true story of Jordan Belfort, from his rise to a wealthy stock-broker living the high life to his fall involving crime, corruption and the federal government.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxMjgxNTk0MF5BMl5BanBnXkFtZTgwNjIyOTg2MDE@._V1_SX300.jpg",
        },
        {
          id: 72,
          title: "Casino",
          year: "1995",
          runtime: "178",
          genres: ["Biography", "Crime", "Drama"],
          price: "$4.5",
          primeCredit: false,
          director: "Martin Scorsese",
          actors: "Robert De Niro, Sharon Stone, Joe Pesci, James Woods",
          plot: "Greed, deception, money, power, and murder occur between two best friends, a mafia underboss and a casino owner, for a trophy wife over a gambling empire.",
          posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTcxOWYzNDYtYmM4YS00N2NkLTk0NTAtNjg1ODgwZjAxYzI3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_SX300.jpg",
        },
        {
          id: 19,
          title: "Scarface",
          year: "1983",
          runtime: "170",
          genres: ["Crime", "Drama"],
          price: "$6.5",
          primeCredit: false,
          director: "Brian De Palma",
          actors:
            "Al Pacino, Steven Bauer, Michelle Pfeiffer, Mary Elizabeth Mastrantonio",
          plot: "In Miami in 1980, a determined Cuban immigrant takes over a drug cartel and succumbs to greed.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAzOTM4MzEwNl5BMl5BanBnXkFtZTgwMzU1OTc1MDE@._V1_SX300.jpg",
        },
        {
          id: 73,
          title: "Pirates of the Caribbean: At World's End",
          year: "2007",
          runtime: "169",
          genres: ["Action", "Adventure", "Fantasy"],
          price: "$5.5",
          primeCredit: true,
          director: "Gore Verbinski",
          actors: "Johnny Depp, Geoffrey Rush, Orlando Bloom, Keira Knightley",
          plot: "Captain Barbossa, Will Turner and Elizabeth Swann must sail off the edge of the map, navigate treachery and betrayal, find Jack Sparrow, and make their final alliances for one last decisive battle.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIyNjkxNzEyMl5BMl5BanBnXkFtZTYwMjc3MDE3._V1_SX300.jpg",
        },
        {
          id: 116,
          title: "Interstellar",
          year: "2014",
          runtime: "169",
          genres: ["Adventure", "Drama", "Sci-Fi"],
          price: "$7.75",
          primeCredit: false,
          director: "Christopher Nolan",
          actors:
            "Ellen Burstyn, Matthew McConaughey, Mackenzie Foy, John Lithgow",
          plot: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjIxNTU4MzY4MF5BMl5BanBnXkFtZTgwMzM4ODI3MjE@._V1_SX300.jpg",
        },
        {
          id: 129,
          title: "The Hobbit: An Unexpected Journey",
          year: "2012",
          runtime: "169",
          genres: ["Adventure", "Fantasy"],
          price: "$4.5",
          primeCredit: false,
          director: "Peter Jackson",
          actors: "Ian McKellen, Martin Freeman, Richard Armitage, Ken Stott",
          plot: "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTcwNTE4MTUxMl5BMl5BanBnXkFtZTcwMDIyODM4OA@@._V1_SX300.jpg",
        },

        {
          id: 128,
          title: "Troy",
          year: "2004",
          runtime: "163",
          genres: ["Adventure"],
          price: "$3.95",
          primeCredit: false,
          director: "Wolfgang Petersen",
          actors: "Julian Glover, Brian Cox, Nathan Jones, Adoni Maropis",
          plot: "An adaptation of Homer's great epic, the film follows the assault on Troy by the united Greek forces and chronicles the fates of the men involved.",
          posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTk5MzU1MDMwMF5BMl5BanBnXkFtZTcwNjczODMzMw@@._V1_SX300.jpg",
        },

        {
          id: 39,
          title: "Les Misérables",
          year: "2012",
          runtime: "158",
          genres: ["Drama", "Musical", "Romance"],
          price: "$4.95",
          primeCredit: false,
          director: "Tom Hooper",
          actors: "Hugh Jackman, Russell Crowe, Anne Hathaway, Amanda Seyfried",
          plot: "In 19th-century France, Jean Valjean, who for decades has been hunted by the ruthless policeman Javert after breaking parole, agrees to care for a factory worker's daughter. The decision changes their lives forever.",
          posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTQ4NDI3NDg4M15BMl5BanBnXkFtZTcwMjY5OTI1OA@@._V1_SX300.jpg",
        },
        {
          id: 69,
          title: "American Gangster",
          year: "2007",
          runtime: "157",
          genres: ["Biography", "Crime", "Drama"],
          price: "$5.25",
          primeCredit: false,
          director: "Ridley Scott",
          actors:
            "Denzel Washington, Russell Crowe, Chiwetel Ejiofor, Josh Brolin",
          plot: "In 1970s America, a detective works to bring down the drug empire of Frank Lucas, a heroin kingpin from Manhattan, who is smuggling the drug into the country from the Far East.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkyNzY5MDA5MV5BMl5BanBnXkFtZTcwMjg4MzI3MQ@@._V1_SX300.jpg",
        },

        {
          id: 30,
          title: "Pulp Fiction",
          year: "1994",
          runtime: "154",
          genres: ["Crime", "Drama"],
          price: "$7.5",
          primeCredit: true,
          director: "Quentin Tarantino",
          actors: "Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta",
          plot: "The lives of two mob hit men, a boxer, a gangster's wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxMTA5OTAzMl5BMl5BanBnXkFtZTgwNjA5MDc3NjE@._V1_SX300.jpg",
        },

        {
          id: 66,
          title: "The Pianist",
          year: "2002",
          runtime: "150",
          genres: ["Biography", "Drama", "War"],
          price: "$6.5",
          primeCredit: true,
          director: "Roman Polanski",
          actors: "Adrien Brody, Emilia Fox, Michal Zebrowski, Ed Stoppard",
          plot: "A Polish Jewish musician struggles to survive the destruction of the Warsaw ghetto of World War II.",
          posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BMTc4OTkyOTA3OF5BMl5BanBnXkFtZTYwMDIxNjk5._V1_SX300.jpg",
        },

        {
          id: 22,
          title: "Inception",
          year: "2010",
          runtime: "148",
          genres: ["Action", "Adventure", "Sci-Fi"],
          price: "$6.5",
          primeCredit: false,
          director: "Christopher Nolan",
          actors:
            "Leonardo DiCaprio, Joseph Gordon-Levitt, Ellen Page, Tom Hardy",
          plot: "A thief, who steals corporate secrets through use of dream-sharing technology, is given the inverse task of planting an idea into the mind of a CEO.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        },
        {
          id: 37,
          title: "The Shining",
          year: "1980",
          runtime: "146",
          genres: ["Drama", "Horror"],
          price: "$6.5",
          primeCredit: false,
          director: "Stanley Kubrick",
          actors:
            "Jack Nicholson, Shelley Duvall, Danny Lloyd, Scatman Crothers",
          plot: "A family heads to an isolated hotel for the winter where an evil and spiritual presence influences the father into violence, while his psychic son sees horrific forebodings from the past and of the future.",
          posterUrl:
            "http://ia.media-imdb.com/images/M/MV5BODMxMjE3NTA4Ml5BMl5BanBnXkFtZTgwNDc0NTIxMDE@._V1_SX300.jpg",
        },
        {
          id: 130,
          title: "The Great Gatsby",
          year: "2013",
          runtime: "143",
          genres: ["Drama", "Romance"],
          price: "$5.5",
          primeCredit: false,
          director: "Baz Luhrmann",
          actors: "Lisa Adam, Frank Aldridge, Amitabh Bachchan, Steve Bisley",
          plot: "A writer and wall street trader, Nick, finds himself drawn to the past and lifestyle of his millionaire neighbor, Jay Gatsby.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTkxNTk1ODcxNl5BMl5BanBnXkFtZTcwMDI1OTMzOQ@@._V1_SX300.jpg",
        },
        {
          id: 3,
          title: "The Shawshank Redemption",
          year: "1994",
          runtime: "142",
          genres: ["Crime", "Drama"],
          price: "$9.5",
          primeCredit: true,
          director: "Frank Darabont",
          actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
          plot: "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
        },
        {
          id: 51,
          title: "Forrest Gump",
          year: "1994",
          runtime: "142",
          genres: ["Comedy", "Drama"],
          price: "$6.95",
          primeCredit: true,
          director: "Robert Zemeckis",
          actors:
            "Tom Hanks, Rebecca Williams, Sally Field, Michael Conner Humphreys",
          plot: "Forrest Gump, while not intelligent, has accidentally been present at many historic moments, but his true love, Jenny Curran, eludes him.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BYThjM2MwZGMtMzg3Ny00NGRkLWE4M2EtYTBiNWMzOTY0YTI4XkEyXkFqcGdeQXVyNDYyMDk5MTU@._V1_SX300.jpg",
        },

        {
          id: 35,
          title: "Shutter Island",
          year: "2010",
          runtime: "138",
          genres: ["Mystery", "Thriller"],
          price: "$6.5",
          primeCredit: true,
          director: "Martin Scorsese",
          actors:
            "Leonardo DiCaprio, Mark Ruffalo, Ben Kingsley, Max von Sydow",
          plot: "In 1954, a U.S. marshal investigates the disappearance of a murderess who escaped from a hospital for the criminally insane.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMxMTIyNzMxMV5BMl5BanBnXkFtZTcwOTc4OTI3Mg@@._V1_SX300.jpg",
        },

        {
          id: 95,
          title: "Pacific Rim",
          year: "2013",
          runtime: "131",
          genres: ["Action", "Adventure", "Sci-Fi"],
          price: "$7.8",
          primeCredit: false,
          director: "Guillermo del Toro",
          actors:
            "Charlie Hunnam, Diego Klattenhoff, Idris Elba, Rinko Kikuchi",
          plot: "As a war between humankind and monstrous sea creatures wages on, a former pilot and a trainee are paired up to drive a seemingly obsolete special weapon in a desperate effort to save the world from the apocalypse.",
          posterUrl:
            "https://images-na.ssl-images-amazon.com/images/M/MV5BMTY3MTI5NjQ4Nl5BMl5BanBnXkFtZTcwOTU1OTU0OQ@@._V1_SX300.jpg",
        },
      ]);
    });
  });
}

// async function renderBooks(filter) {
//   const booksWrapper = document.querySelector(".books");

//   booksWrapper.classList += ' books__loading'

//   if (!books) {
//     books = await getBooks();
//   }

//   booksWrapper.classList.remove('books__loading')

//   if (filter === "LOW_TO_HIGH") {
//     books.sort(
//       (a, b) =>
//         (a.salePrice || a.originalPrice) - (b.salePrice || b.originalPrice)
//     );
//   } else if (filter === "HIGH_TO_LOW") {
//     books.sort(
//       (a, b) =>
//         (b.salePrice || b.originalPrice) - (a.salePrice || a.originalPrice)
//     );
//   } else if (filter === "RATING") {
//     books.sort((a, b) => b.rating - a.rating);
//   }

//   const booksHtml = books
//     .map((book) => {
//       return `<div class="book">
//     <figure class="book__img--wrapper">
//       <img class="book__img" src="${book.url}" alt="">
//     </figure>
//     <div class="book__title">
//       ${book.title}
//     </div>
//     <div class="book__ratings">
//       ${ratingsHTML(book.rating)}
//     </div>
//     <div class="book__price">
//       ${priceHTML(book.originalPrice, book.salePrice)}
//     </div>
//   </div>`;
//     })
//     .join("");

//   booksWrapper.innerHTML = booksHtml;
// }

// function priceHTML(originalPrice, salePrice) {
//   if (!salePrice) {
//     return `$${originalPrice.toFixed(2)}`;
//   }
//   return `<span class="book__price--normal">$${originalPrice.toFixed(
//     2
//   )}</span>$${salePrice.toFixed(2)}`;
// }

// function ratingsHTML(rating) {
//   let ratingHTML = "";
//   for (let i = 0; i < Math.floor(rating); ++i) {
//     ratingHTML += '<i class="fas fa-star"></i>\n';
//   }
//   if (!Number.isInteger(rating)) {
//     ratingHTML += '<i class="fas fa-star-half-alt"></i>\n';
//   }
//   return ratingHTML;
// }

// function filterBooks(event) {
//   renderBooks(event.target.value);
// }

// setTimeout(() => {
//   renderBooks();
// });
