//Do not change //////////////////////////////////
import { calculateStarAverage } from "../src/logic.js";

const reviews = [
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
    image: "./images/avatar1.png",
    star: 1,
    review:
      "The coffee was great but the employees didn't let me stay past closing! ): Worst experience ever.",
  },
];
/////////////////////////////////////////////////////////////////////

const AverageRaiting = document.getElementsByClassName("starRating")[0]

//1. Append the reviews to the DOM
const AppendTo = document.getElementsByClassName("reviews")[0];

function renderReviews(reviewData) {
  const div = document.createElement("div");
  div.innerHTML = `
    <div class="review_container">
      <img src="${reviewData.image}" alt="profileImage"/>
      <div>
        <p>${reviewData.username}</p>
        <p>${reviewData.star} ⭐</p>
        <p>${reviewData.review}</p>
      </div>
    </div>`;
    AppendTo.appendChild(div);
    AverageRaiting.innerHTML = `Star Rating: ${calculateStarAverage(reviews)}`
}

reviews.forEach(e => {
  renderReviews(e)
});

const username = document.getElementById("username");
const image = document.getElementById("image");
const star = document.getElementById("star");
const review = document.getElementById("review");

const form = document.querySelector("form")
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const newReview = {
    username: username.value,
    image: image.value,
    star: star.value,
    review: review.value,
  }
  reviews.push(newReview)
  renderReviews(newReview);
  form.reset();
})
