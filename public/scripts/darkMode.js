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
