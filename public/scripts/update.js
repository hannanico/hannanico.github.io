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

  //This is where we check if the section is in the user's viewport
  if (top_main > size_main) {
    document.getElementById("home_a").className = "test";
  } else {
    document.getElementById("home_a").className = "";
  }

  //<-----------ABOUT SECTION PART----------->//
  const container_about = document.getElementById("controls_about");
  const elem_about = document.getElementById("about");
  const { top: top_about } = elem_about.getBoundingClientRect();
  const size_about_top = 380;
  const size_about_bottom = -250;

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

  if (top_contact < size_contact_top && top_contact > size_contact_bottom) {
    document.getElementById("contact_a").className = "test";
  } else {
    document.getElementById("contact_a").className = "";
  }
}

document.addEventListener("scroll", update);
update();
