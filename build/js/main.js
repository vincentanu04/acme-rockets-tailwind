const initApp = () => {
    const hamburgerBtn = document.getElementById("hamburger-button");
    const mobileMenu = document.getElementById("mobile-menu");

    function toggleMenu() {
        mobileMenu.classList.toggle('hidden');
        mobileMenu.classList.toggle('flex');
    }

    hamburgerBtn.addEventListener("click", toggleMenu);
    mobileMenu.addEventListener("click", toggleMenu);
}

document.addEventListener("DOMContentLoaded", initApp);