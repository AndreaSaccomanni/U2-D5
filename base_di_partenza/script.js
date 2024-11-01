window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const colorButton = document.querySelector(".colorButton");
  console.log(colorButton);
  const stayCurious = document.querySelector(".stayCurious");
  const stayCuriousBottom = stayCurious.getBoundingClientRect().bottom;

  if (stayCuriousBottom < 0) {
    // Quando l'header esce dal div stayCurious
    header.classList.add("header-scrolled");
    colorButton.classList.add("colorButton-scrolled");
  } else {
    // Quando l'header è ancora all'interno del div stayCurious
    header.classList.remove("header-scrolled");
    colorButton.classList.remove("colorButton-scrolled");
  }
});
