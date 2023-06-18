// const form = document.getElementById("form");
// const confirmation = document.getElementById("confirmation");
// const errors = document.getElementById("error");

// form.addEventListener("click", (e) => {
//   e.preventDefault();
//   const errorMessages = [];

//   // Validation logic here
//   // ...

//   // Check if there are any errors
//   if (errorMessages.length === 0) {
//     // Remove the "confirmation" class to display the confirmation message
//     confirmation.classList.remove("confirmation");
//     confirmation.style.display = "block";
//   } else {
//     // Display the error messages
//     errors.innerHTML = errorMessages.join("<br>");
//     errors.style.display = "block";
//   }
// });

//scrollHeight doesnt work, height will never change
// const element = document.getElementById("main");
// let y = element.scrollHeight;
// console.log(y);

// function myFunction() {
//   if (y < 500) {
//     document.getElementById("color_change").className = "test";
//   } else {
//     document.getElementById("color_change").className = "";
//   }
// }

//need to check, possible solution https://stackoverflow.com/questions/10605197/detect-if-user-is-scrolling
// window.onscroll = function () {
//   var distanceScrolled = document.documentElement.scrollTop;
//   console.log("Scrolled: " + distanceScrolled);
// };

// window.onscroll = function () {
//   myFunction();
// };

// function myFunction() {
//   if (document.documentElement.scrollTop > 20) {
//     document.getElementById("color_change").className = "test";
//   } else {
//     document.getElementById("color_change").className = "";
//   }
// }

// //getBoundingClientRect()
// function update() {
//   const container = document.getElementById("controls");
//   const elem = document.getElementById("main");
//   const rect = elem.getBoundingClientRect();
//   console.log(rect);

//   container.innerHTML = "";
//   for (const key in rect) {
//     if (typeof rect[key] !== "function") {
//       let para = document.createElement("p");
//       para.textContent = `${key} : ${rect[key]}`;
//       container.appendChild(para);
//     }
//   }
// }

// document.addEventListener("scroll", update);
// update();