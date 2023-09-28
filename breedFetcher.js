// Pair Programmed with Stephen Fraser - W2D4 -: @stephen-fraser - github/stephen-fraser

const request = require("request");

const breedName = process.argv[2];

const fetchBreedData = (breedName, callback) => {
  const apiURL = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;
  
  request(apiURL, (error, response, body) => {
    if (error) {
      callback(error);
      return;
    }
    
    if (response.statusCode !== 200) {
      console.error(`HTTP ERROR! status code: ${response.statusCode}`);
      return;
    }

    const data = JSON.parse(body);

    if (data.length === 0) {
      callback("Error: Breed not found");
      return;
    }
    
    const description = data[0].description;
    console.log(description);
    
  });
};
fetchBreedData(breedName, (error, description) => {

  if (error) {
    console.error("Error", error);
  } else {
    console.log(`Description for ${breedName}: ${description}`);
  }
});