// Initial cart object
let cart = [];

// Function to add an item to the cart
function addToCart(productName, productPrice) {
    const existingItem = cart.find(item => item.name === productName);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ name: productName, price: productPrice, quantity: 1 });
    }

    updateCart();
}

// Function to remove an item from the cart
function removeFromCart(productName) {
    cart = cart.filter(item => item.name !== productName);
    updateCart();
}

// Function to calculate the total price of items in the cart
function calculateTotal() {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Function to update the cart display
function updateCart() {
    const cartList = document.getElementById("cart-list");
    const totalPrice = document.getElementById("total-price");

    // Clear the cart display
    cartList.innerHTML = "";

    // Populate the cart display
    cart.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price} x ${item.quantity}`;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = () => removeFromCart(item.name);

        listItem.appendChild(removeButton);
        cartList.appendChild(listItem);
    });

    // Update total price
    totalPrice.textContent = `Total: $${calculateTotal()}`;
}
