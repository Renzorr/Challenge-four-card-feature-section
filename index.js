const loader = document.getElementById("preloader");
const content = document.querySelector(".main-content");
const cards = document.querySelector(".card-container");

setTimeout(() => {
  loader.style.display = "none";
  content.classList.add("complete");
  cards.classList.add("complete");
  document.body.style.overflow = "visible";
}, 2000);
