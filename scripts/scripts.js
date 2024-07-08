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

document.addEventListener("DOMContentLoaded", function () {
  updateCartCount();
});

function addToCart({ name, priceInRupees, priceInUSD, image }) {
  const product = { name, priceInRupees, priceInUSD, image };

  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];

  cartItems.push(product);

  localStorage.setItem("cartItems", JSON.stringify(cartItems));

  updateCartCount();

  alert("Product added to cart!");
}

function updateCartCount() {
  let cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
  let cartCount = cartItems.length;
  document.getElementById("cart-count").textContent = cartCount;
}

// Hide popup on initial page load
window.onload = function () {
  var popup = document.getElementById("popup-container");
  popup.style.display = "none";
};
