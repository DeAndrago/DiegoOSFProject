(() => {
    const cartItems = [];
    const cartButton = document.querySelectorAll(".cart-icon");
    const closeCartButton = document.querySelector("span.close-icon");
    const elementsToHide = document.querySelectorAll("[data-empty-cart]");

    if (cartItems.length === 0) {
        
        elementsToHide.forEach((element) => {
            element.style.display = "block";
        });

    } else {
        elementsToHide.forEach((element) => {
            element.style.display = "none";
        });
    }

    closeCartButton.onclick = () => {
        const cart = document.querySelector(".cart");
    

    cart.style.display = "none";
    }


    // When clicking in the Cart Button, opens the Cart.
    cartButton.forEach(element => {
        element.addEventListener("click", () => {
            const cart = document.querySelector(".cart");
    
            cart.style.display = "block";
        })
    })
    

    // When clicking in closeCartButton, hide the Cart.
    console.log(cartButton);
    console.log(closeCartButton);

})();