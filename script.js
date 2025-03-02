// JavaScript for My E-commerce Platform

// Toggle mobile navigation menu
document.addEventListener("DOMContentLoaded", function () {
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (menuToggle) {
        menuToggle.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }
});

// Add to Cart Functionality
const cart = [];

function addToCart(productId, productName, productPrice) {
    const product = { id: productId, name: productName, price: productPrice };
    cart.push(product);
    updateCartUI();
}

// Update Cart UI
function updateCartUI() {
    const cartContainer = document.querySelector(".cart-items");
    cartContainer.innerHTML = "";
    cart.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.classList.add("cart-item");
        cartItem.innerHTML = `
            <p>${item.name} - $${item.price}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(cartItem);
    });

    updateCartTotal();
}

// Remove Item from Cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// Calculate Cart Total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    document.querySelector(".cart-total").innerText = `Total: $${total.toFixed(2)}`;
}

// Checkout Process
function checkout() {
    if (cart.length === 0) {
        alert("Your cart is empty!");
        return;
    }
    alert("Proceeding to checkout...");
    // Here, integrate payment gateway or redirect to checkout page.
}
