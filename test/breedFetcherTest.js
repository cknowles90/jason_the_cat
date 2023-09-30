const { fetchBreedDescription } = require("../breedFetcher.js");
const { assert } = require("chai");

describe("fetchBreedDescription", () => {
  it("returns a string description for a valid breed, via callback", (done) => {
    fetchBreedDescription("Siberian", (error, description) => {

      assert.equal(error, null);

      const expectedDescription = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";
      
      assert.equal(expectedDescription, description.trim());

      done();
    });
  });
  
  it("returns a invalid/non-existent breed", (done) => {
    fetchBreedDescription("sedlF", (error, description) => {
      assert.notEqual(null, error);

      const errorMessage = "The input breed is either invalid and/or non-existent. Please check your spelling";

      assert.equal(errorMessage, error);

      done();
    });
  });
});
