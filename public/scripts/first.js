function update() {
  //<-----------MAIN SECTION PART----------->//
  //Get where the information will be displayed
  const container_main = document.getElementById("controls_main");
  //Section that we want to see the information about
  const elem_main = document.getElementById("main");
  //The element (top) that we are taking from the getBoundingClientRect() function
  const { top: top_main } = elem_main.getBoundingClientRect();
  //This is the top size of the section when we scroll
  const size_main = -374;

  // //We clear the information if theres something there
  // container_main.innerHTML = "";
  // //This creates paragraph in which we are going to display the information we take from the getBoundingClientRect() function
  // let para_main = document.createElement("p");
  // //Providing the information to the paragraph we just created
  // para_main.textContent = `top: ${top_main}`;
  // container_main.appendChild(para_main);

  //This is where we check if the section is in the user's viewport
  //If yes it will set a class name in the nav bar to show the user that they are in that section
  if (top_main > size_main) {
    document.getElementById("home_a").className = "test";
  } else {
    document.getElementById("home_a").className = "";
  }

  //<-----------ABOUT SECTION PART----------->//
  const container_about = document.getElementById("controls_about");
  const elem_about = document.getElementById("about");
  const { top: top_about } = elem_about.getBoundingClientRect();
  const size_about_top = 324;
  const size_about_bottom = -250;

  // container_about.innerHTML = "";
  // let para_about = document.createElement("p");
  // para_about.textContent = `top: ${top_about}`;
  // container_about.appendChild(para_about);

  if (top_about < size_about_top && top_about > size_about_bottom) {
    document.getElementById("about_a").className = "test";
  } else {
    document.getElementById("about_a").className = "";
  }

  //<-----------RESUME SECTION PART----------->//
  const container_resume = document.getElementById("controls_resume");
  const elem_resume = document.getElementById("resume_education");
  const { top: top_resume } = elem_resume.getBoundingClientRect();
  const size_resume_top = 366;
  const size_resume_bottom = -267;

  // container_resume.innerHTML = "";
  // let para_resume = document.createElement("p");
  // para_resume.textContent = `top: ${top_resume}`;
  // container_resume.appendChild(para_resume);

  if (top_resume < size_resume_top && top_resume > size_resume_bottom) {
    document.getElementById("resume_a").className = "test";
  } else {
    document.getElementById("resume_a").className = "";
  }

  //<-----------PORTFOLIO SECTION PART----------->//
  const container_portfolio = document.getElementById("controls_portfolio");
  const elem_portfolio = document.getElementById("portfolio");
  const { top: top_portfolio } = elem_portfolio.getBoundingClientRect();
  const size_portfolio_top = 371;
  const size_portfolio_bottom = -590;

  // container_portfolio.innerHTML = "";
  // let para_portfolio = document.createElement("p");
  // para_portfolio.textContent = `top: ${top_portfolio}`;
  // container_portfolio.appendChild(para_portfolio);

  if (
    top_portfolio < size_portfolio_top &&
    top_portfolio > size_portfolio_bottom
  ) {
    document.getElementById("portfolio_a").className = "test";
  } else {
    document.getElementById("portfolio_a").className = "";
  }

  //<-----------CONTACT SECTION PART----------->//
  const container_contact = document.getElementById("controls_contact");
  const elem_contact = document.getElementById("contact");
  const { top: top_contact } = elem_contact.getBoundingClientRect();
  const size_contact_top = 350;
  const size_contact_bottom = -270;

  // container_contact.innerHTML = "";
  // let para_contact = document.createElement("p");
  // para_contact.textContent = `top: ${top_contact}`;
  // container_contact.appendChild(para_contact);

  if (top_contact < size_contact_top && top_contact > size_contact_bottom) {
    document.getElementById("contact_a").className = "test";
  } else {
    document.getElementById("contact_a").className = "";
  }
}

document.addEventListener("scroll", update);
update();

//This function is called when the swtich button is clicked to change the theme of the website.
function darkMode() {
  // document.getElementById("about").style.borderBottom = "1px solid #ffffff";

  // document.getElementById("skills").style.borderBottom = "1px solid #ffffff";

  // document.getElementById("resume_education").style.borderBottom =
  //   "1px solid #ffffff";
  // document.getElementById("portfolio").style.borderBottom = "1px solid #ffffff";

  // document.getElementById("contact").style.borderBottom = "1px solid #ffffff";
  var years = document.getElementById("years");
  years.classList.toggle("dark-mode");

  var side_mode = document.getElementById("side");
  side_mode.classList.toggle("sidebar_color");
  side_mode.classList.toggle("dark-mode");

  var about_mode = document.getElementById("about");
  about_mode.classList.toggle("about_color");
  about_mode.classList.toggle("dark-mode");

  var skills_mode = document.getElementById("skills");
  skills_mode.classList.toggle("skills_color");
  skills_mode.classList.toggle("dark-mode");

  var resume_education_mode = document.getElementById("resume_education");
  resume_education_mode.classList.toggle("resume_education_color");
  resume_education_mode.classList.toggle("dark-mode");

  var portfolio_mode = document.getElementById("portfolio");
  portfolio_mode.classList.toggle("portfolio_color");
  portfolio_mode.classList.toggle("dark-mode");

  var contact_mode = document.getElementById("contact");
  contact_mode.classList.toggle("contact_color");
  contact_mode.classList.toggle("dark-mode");

  var error_mode = document.getElementById("error");
  error_mode.classList.toggle("error_color");
  error_mode.classList.toggle("dark-mode");
}
