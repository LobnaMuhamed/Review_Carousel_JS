var reviews = [
  {
    id: 1,
    img: "images/person-3.jpg",
    name: "Peter Jones",
    job: "intern",
    info: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carb marfa hell of pabst raclette post-ironic jianbing swag.",
  },
  {
    id: 2,
    img: "images/person-4.jpg",
    name: "Bill Anderson",
    job: "the boss",
    info: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },
  {
    id: 3,
    img: "images/person-1.jpg",
    name: "Susan Smith",
    job: "web developer",
    info: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },
  {
    id: 4,
    img: "images/person-2.jpg",
    name: "Sara Jones",
    job: "ux design",
    info: "Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Iusto Asperiores Debitis Incidunt, Eius Earum Ipsam Cupiditate Libero? Iste, Doloremque Nihil?",
  },
];
var img = document.getElementById("person-img");
var name_ = document.getElementById("author");
var job = document.getElementById("job");
var info = document.getElementById("info");
var preBtn = document.getElementById("prev-btn");
var nextBtn = document.getElementById("next-btn");
var randomBtn = document.getElementById("random-btn");

countIndex = 0;
// Load Initial Review
window.addEventListener("DOMContentLoaded", () => {
  let item = reviews[countIndex];
  img.src = item.img;
  name_.textContent = item.textContent;
  job.textContent = item.job;
  info.textContent = item.info;
});
// Display Review
function displayReview(index) {
  var item = reviews[index];
  img.src = item.img;
  name_.textContent = item.textContent;
  job.textContent = item.job;
  info.textContent = item.info;
}
// Show Next Review
function nextReview() {
  if (countIndex == reviews.length - 1) {
    countIndex = 0;
  } else {
    countIndex++;
  }
  displayReview(countIndex);
}
// Show Previous Review
function preReview() {
  if (countIndex == 0) {
    countIndex = reviews.length - 1;
  } else {
    countIndex--;
  }
  displayReview(countIndex);
}
// Show Random Review
function randomReview() {
  var index = Math.floor(Math.random() * reviews.length);
  displayReview(index);
}
// Add Events To Buttons
nextBtn.addEventListener("click", () => {
  nextReview();
});
preBtn.addEventListener("click", () => {
  preReview();
});
randomBtn.addEventListener("click", () => {
  randomReview();
});
