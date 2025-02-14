import { assert } from "chai";

import { calculateStarAverage } from "../src/logic.js";

const mockReviews = [
  {
    username: "Rose",
    image: "./images/rose.png",
    star: 5,
    review: "Great coffee and ambiance",
  },
  {
    username: "butterfly2222",
    image: "./images/avatar2.png",
    star: 3,
    review: "Coffee was okay, took way to long to make.",
  },
  {
    username: "Sandy Tuna",
    image: "./images/avitar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];

describe("calculateStarAverage", () => {
  it("Return the correct average from the array of reviews", () => {
    const result = calculateStarAverage(mockReviews);
    assert.strictEqual(result, (5+3+1) / 3, "average should be correct!");
  });
  
  it("should return no average/NaN for empty array", () => {
    const result = calculateStarAverage([]);
    assert.isNaN(result, "The result should be NaN for the empty array");
  });
});
