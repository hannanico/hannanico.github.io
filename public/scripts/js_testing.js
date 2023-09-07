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

// scrollHeight doesnt work, height will never change
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

// need to check, possible solution https://stackoverflow.com/questions/10605197/detect-if-user-is-scrolling
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

// const sectionInfo = [
//     {
//       id: "main",
//       controlId: "home_a",
//       sizeTop: -374,
//     },
//     {
//       id: "about",
//       controlId: "about_a",
//       sizeTop: 380,
//       sizeBottom: -250,
//     },
//     {
//       id: "resume_education",
//       controlId: "resume_a",
//       sizeTop: 366,
//       sizeBottom: -267,
//     },
//     {
//       id: "portfolio",
//       controlId: "portfolio_a",
//       sizeTop: 371,
//       sizeBottom: -590,
//     },
//     {
//       id: "contact",
//       controlId: "contact_a",
//       sizeTop: 350,
//       sizeBottom: -270,
//     },
//   ];

//   function updateSection(section) {
//     const container = document.getElementById(`controls_${section.id}`);
//     const elem = document.getElementById(section.id);
//     const { top } = elem.getBoundingClientRect();

//     if (
//       (!section.sizeTop || top < section.sizeTop) &&
//       (!section.sizeBottom || top > section.sizeBottom)
//     ) {
//       document.getElementById(section.controlId).className = "test";
//     } else {
//       document.getElementById(section.controlId).className = "";
//     }
//   }

//   function update() {
//     for (const section of sectionInfo) {
//       updateSection(section);
//     }
//   }

//   document.addEventListener("scroll", update);
//   update();
