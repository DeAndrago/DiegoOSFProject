(() => {
    const cartButton = document.querySelectorAll(".cart-icon");
    const closeCartButton = document.querySelector("span.close-icon");

    closeCartButton.onclick = () => {
        const cart = document.querySelector(".cart");
    

    cart.style.display = "none";
    }

    cartButton.forEach(element => {
        element.addEventListener("click", () => {
            const cart = document.querySelector(".cart");
    
            cart.style.display = "block";
        })
    })
    

    // When clicking in the Cart Button, opens the Cart.

    // When clicking in closeCartButton, hide the Cart.
    console.log(cartButton);
    console.log(closeCartButton);

})();