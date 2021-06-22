const mocha = require("mocha");
const chai = require("chai");
const mongoose = require("mongoose");

const expect = chai.expect;

//describe
describe("", () => {
  //it block
  it("", () => {});
});

//describe
describe("restaurantController", () => {
  describe("findById", () => {
    //it block
    it("should return a model if found", () => {});
    // Arrange
    const req = {
        params: {
            id: 1,
        }
    }

    const res = {
        json: () => {},
    }

    // create a mock
    mongoose.Model.findById = 
    // Act
    // Assert
    it("should return an error if an error occurs", () => {});

  });
});
