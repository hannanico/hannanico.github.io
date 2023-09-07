function darkMode() {
  // Elements to toggle dark mode for
  const elementsToToggle = [
    "side",
    "about",
    "skills",
    "resume_education",
    "portfolio",
    "contact",
    "error",
  ];

  // Toggle dark mode classes for the specified elements
  for (const elementId of elementsToToggle) {
    const element = document.getElementById(elementId);
    if (element) {
      // Toggle the color class (e.g., "side_color") and "dark-mode" class
      element.classList.toggle(`${elementId}_color`);
      element.classList.toggle("dark-mode");
    }
  }

  // Get all elements with the class "years"
  const years_all = document.querySelectorAll(".years");

  // Toggle "years" class to "dark-mode" for the selected elements
  for (const yearElement of years_all) {
    // Toggle the "years" class to "dark-mode"
    yearElement.classList.toggle("years");
    yearElement.classList.toggle("dark-mode");
  }
}
