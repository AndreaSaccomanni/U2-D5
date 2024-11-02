window.addEventListener("scroll", function () {
  const header = document.getElementById("header");
  const colorButton = document.getElementById("getStarted");
  const stayCurious = document.querySelector(".stayCurious");
  const discoverDiv = document.querySelector(".discover");

  const headerBottom = header.getBoundingClientRect().bottom;
  const stayCuriousBottom = stayCurious.getBoundingClientRect().bottom;
  const discoverTop = discoverDiv.getBoundingClientRect().top;

  if (headerBottom > stayCuriousBottom) {
    header.classList.add("header-scrolled");
    colorButton.classList.remove("colorButton");
    colorButton.classList.add("colorButton-scrolled");
    console.log(colorButton);
  } else {
    header.classList.remove("header-scrolled");
    colorButton.classList.remove("colorButton-scrolled");
    colorButton.classList.add("colorButton");
  }

  if (headerBottom >= discoverTop) {
    discoverDiv.classList.add("sticky");
  } else {
    discoverDiv.classList.remove("sticky");
  }
});
