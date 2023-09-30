// Pair Programmed with Stephen Fraser - W2D4 -: @stephen-fraser - github/stephen-fraser

const fetchBreedDescription = require('./breedFetcher');

const breedName = process.argv[2];

fetchBreedDescription(breedName, (error, description) => {

  if (error) {
    console.error("Error fetch details;", error);
  } else {
    console.log(description);
  }
});
