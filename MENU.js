document.addEventListener('DOMContentLoaded', function() {
const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
   
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
});
});
const productCards = document.querySelectorAll(".product-card");
const productModal = document.getElementById("product-modal");
const modalCloseButton = document.getElementById("close-modal");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalIngredients = document.getElementById("modal-ingredients");


productCards.forEach(card => {
    card.addEventListener("click", () => {
        const name = card.getAttribute("data-name");
        const price = card.getAttribute("data-price");
        const image = card.getAttribute("data-image");
        const description = card.getAttribute("data-description");
        const ingredients = card.getAttribute("data-ingredients").split(", ");


        modalImage.src = image;
        modalImage.alt = name;
        modalTitle.textContent = name;
        modalDescription.textContent = description;
        modalIngredients.innerHTML = '';
        ingredients.forEach(ingredient => {
            const li = document.createElement("li");
            li.textContent = ingredient;
            modalIngredients.appendChild(li);
    });
    productModal.style.display = "block";
    });
});


modalCloseButton.addEventListener("click", () => {
    productModal.style.display = "none";
});


window.addEventListener("click", (event) => {
    if (event.target === productModal) {
        productModal.style.display = "none";
    }
});

