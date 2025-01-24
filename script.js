const swapBtn = document.getElementById("swap"); // Select the button
const appContainer = document.getElementById("app"); // Select the main container

// Add event listener to the button
swapBtn.addEventListener("click", () => {
  // Toggle the "night" class on the main container
  appContainer.classList.toggle("night");

  // Update the button's class dynamically
  if (appContainer.classList.contains("night")) {
    swapBtn.classList.remove("button_day");
    swapBtn.classList.add("button_night");
  } else {
    swapBtn.classList.remove("button_night");
    swapBtn.classList.add("button_day");
  }
});
