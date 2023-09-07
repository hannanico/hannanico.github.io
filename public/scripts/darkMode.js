function darkMode() {
  const elementsToToggle = [
    "side",
    "about",
    "skills",
    "resume_education",
    "portfolio",
    "contact",
    "error",
  ];

  for (const elementId of elementsToToggle) {
    const element = document.getElementById(elementId);
    if (element) {
      element.classList.toggle(`${elementId}_color`);
      element.classList.toggle("dark-mode");
    }
  }

  const years_all = document.querySelectorAll(".years");
  for (const yearElement of years_all) {
    yearElement.classList.toggle("years");
    yearElement.classList.toggle("dark-mode");
  }
}
