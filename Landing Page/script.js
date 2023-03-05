const main_dish = document.querySelector('.main-dish');
const dish1 = document.querySelector('.dish-1');
const dish2 = document.querySelector('.dish-2');
const dish3 = document.querySelector('.dish-3');
const dish4 = document.querySelector('.dish-4');
const dish5 = document.querySelector('.dish-5');

// function change_dish(dish) {
//   main_dish.src = dish;
// }


// dish1.addEventListener('click', change_dish('images/dish1.png'));
// dish2.addEventListener('click', change_dish('images/image_3.png'));
// dish3.addEventListener('click', change_dish('images/image_6.png'));
// dish4.addEventListener('click', change_dish('images/image_5.png'));
// dish5.addEventListener('click', change_dish('images/main.png'));


dish1.addEventListener('click', () => {
  main_dish.src = "images/image_3.png";
})
dish2.addEventListener('click', () => {
  main_dish.src = "images/main_2.png";
})
dish3.addEventListener('click', () => {
  main_dish.src = "images/image_6.png";
})
dish4.addEventListener('click', () => {
  main_dish.src = "images/image_5.png";
})
dish5.addEventListener('click', () => {
  main_dish.src = "images/dish1.png";
})


// search-bar

// const clearInput = () => {
//   const input = document.getElementsByClassName("search-input")[0];
//   input.value = "";
// }

// const clearBtn = document.getElementById("clear-btn");
// clearBtn.addEventListener("click", clearInput);

const input = document.querySelector(".finder__input");
const finder = document.querySelector(".finder");
const form = document.querySelector(".cta-form");

input.addEventListener("focus", () => {
  finder.classList.add("active");
});

input.addEventListener("blur", () => {
  if (input.value.length === 0) {
    finder.classList.remove("active");
  }
});

form.addEventListener("submit", (ev) => {
  ev.preventDefault();
  finder.classList.add("processing");
  finder.classList.remove("active");
  input.disabled = true;
  setTimeout(() => {
    finder.classList.remove("processing");
    input.disabled = false;
    if (input.value.length > 0) {
      finder.classList.add("active");
    }
  }, 1000);
});
