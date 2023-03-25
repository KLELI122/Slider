const images = [
  {
    url: "./images/slide1.png",
    title: "Rostov-on-Don LCD admiral",
    city: "Rostov-on-Don<br>LCD admiral",
    apartmentArea: "81 m2",
    repairTime: "3.5 months",
    repairCost: "Upon request",
  },
  {
    url: "./images/slide2.png",
    title: "Sochi Thieves",
    city: "Sochi<br>Thieves",
    apartmentArea: "105 m2",
    repairTime: "4 months",
    repairCost: "Upon request",
  },
  {
    url: "./images/slide3.png",
    title: "Rostov-on-Don Patriotic",
    city: "Rostov-on-Don<br>Patriotic",
    apartmentArea: "93 m2",
    repairTime: "3 months",
    repairCost: "Upon request",
  },
];

function initSlider() {
  const sliderMenu = document.querySelector(".j-menu");
  const sliderImages = document.querySelector(".j-img");
  const sliderArrows = document.querySelectorAll(".j-arrow");
  const sliderDots = document.querySelector(".j-dots");
  const sliderCity = document.querySelector(".j-city");
  const sliderArea = document.querySelector(".j-apartmentArea");
  const sliderTime = document.querySelector(".j-repairTime");
  const sliderCost = document.querySelector(".j-repairCost");

  const changeItems = [
    sliderImages,
    sliderDots,
    sliderMenu,
    sliderCity,
    sliderArea,
    sliderTime,
    sliderCost,
  ];

  initImages();
  initArrows();
  initDots();
  initMenu();
  initDescription();

  function initImages() {
    images.forEach((image, index) => {
      let imageDiv = `<div class="image n${index} ${
        index === 0 ? "active" : ""
      }" style="background-image:url(${
        images[index].url
      });" data-index="${index}"}"></div>`;
      sliderImages.innerHTML += imageDiv;
    });
  }

  function initMenu() {
    images.forEach((image, index) => {
      let menuItem = `<div class="menu_item n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].title}</div>`;
      sliderMenu.innerHTML += menuItem;
    });

    sliderMenu.querySelectorAll(".menu_item").forEach((item) => {
      item.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initArrows() {
    sliderArrows.forEach((arrow) => {
      arrow.addEventListener("click", function () {
        let curNumber = +sliderImages.querySelector(".active").dataset.index;
        let nextNumber;
        if (arrow.classList.contains("left")) {
          nextNumber = curNumber === 0 ? images.length - 1 : curNumber - 1;
        } else {
          nextNumber = curNumber === images.length - 1 ? 0 : curNumber + 1;
        }
        moveSlider(nextNumber);
      });
    });
  }

  function initDots() {
    images.forEach((image, index) => {
      let dot = `<div class="dot n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}"></div>`;
      sliderDots.innerHTML += dot;
    });
    sliderDots.querySelectorAll(".dot").forEach((dot) => {
      dot.addEventListener("click", function () {
        moveSlider(this.dataset.index);
      });
    });
  }

  function initDescription() {
    images.forEach((image, index) => {
      let textCity = `<span class="desc n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].city}</span>`;
      sliderCity.innerHTML += textCity;

      let textArea = `<span class="desc n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].apartmentArea}</span>`;
      sliderArea.innerHTML += textArea;

      let textTime = `<span class="desc n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].repairTime}</span>`;
      sliderTime.innerHTML += textTime;

      let textCost = `<span class="desc n${index} ${
        index === 0 ? "active" : ""
      }" data-index="${index}">${images[index].repairCost}</span>`;
      sliderCost.innerHTML += textCost;
    });
  }

  function moveSlider(num) {
    changeItems.forEach((item) => {
      item.querySelector(".active").classList.remove("active");
      item.querySelector(".n" + num).classList.add("active");
    });
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initSlider();
});
