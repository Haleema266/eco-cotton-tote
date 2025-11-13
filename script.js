// --- Add to Cart button functionality ---
const addToCartBtn = document.getElementById("addToCart");

if (addToCartBtn) {
  addToCartBtn.addEventListener("click", () => {
    alert("🛒 Product added to cart successfully!");
  });
}

// --- Newsletter Subscribe functionality ---
const subscribeBtn = document.getElementById("subscribeBtn");

if (subscribeBtn) {
  subscribeBtn.addEventListener("click", () => {
    const emailInput = document.getElementById("email").value;

    if (!emailInput) {
      alert("⚠ Please enter your email to subscribe!");
    } else {
      alert(`🎉 Thank you, ${emailInput}! You are subscribed.`);
    }
  });
}