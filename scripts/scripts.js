// Function to open the popup with the clicked image and title
function openPopup(imageSrc, title) {
  var popup = document.getElementById("popup-container");
  var popupImg = document.getElementById("popup-image");
  var popupTitle = document.getElementById("popup-title");

  popupImg.src = imageSrc; // Set the larger image src to the popup image
  popupTitle.textContent = title; // Set title text

  // Display the popup
  popup.style.display = "flex";
}

// Function to close the popup
function closePopup() {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none"; // Hide popup container
}

// Hide popup on initial page load
window.onload = function () {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none";
};
