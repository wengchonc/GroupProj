function updateCartQuantity() {
    const quantityInput = document.querySelector(".quantity-input");
    const cartQuantity = document.querySelector(".cart-quantity");
    const quantity = parseInt(quantityInput.value);
    
    if (cartQuantity) {
      cartQuantity.textContent = quantity > 0 ? quantity : "";
    } else {
      const cartIcon = document.querySelector("#cart-icon");
      const newCartQuantity = document.createElement("span");
      newCartQuantity.classList.add("cart-quantity");
      newCartQuantity.textContent = quantity > 0 ? quantity : "";
      cartIcon.parentNode.insertBefore(newCartQuantity, cartIcon.nextSibling);
    }
  }
  
document.addEventListener("DOMContentLoaded", function() {
    const addToCartButton = document.querySelector(".add-to-cart-button");
    addToCartButton.addEventListener("click", function() {
      updateCartQuantity();
    });
  });

function buyNow() {
    window.location.href = "shoppingcart2.html";
  }


function clearCart() {
    window.location.href = "shoppingcart.html";
  }
  
function checkout() {
    window.location.href = "checkout.html";
  }

function back() {
    window.location.href = "shoppingcart2.html";
  }

function next() {
    window.location.href = "payment.html";
  }