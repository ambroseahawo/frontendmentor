const initApp = () => {
  const hamburgerButton = document.getElementById("hamburger-button")
  const mobileMenu = document.getElementById("mobile-menu")

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden")
    mobileMenu.classList.toggle("flex")
  }

  hamburgerButton.addEventListener("click", toggleMenu)
  mobileMenu.addEventListener("click", toggleMenu)
  hamburgerButton.classList.toggle("toggle-btn")
}

document.addEventListener("DOMContentLoaded", initApp)