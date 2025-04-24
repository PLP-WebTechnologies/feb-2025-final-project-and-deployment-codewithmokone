const menuOpen = document.querySelector('#menu-icon');
const menuClose = document.querySelector('#menu-close');
const mobileNav = document.querySelector('.mobile-nav');
const mobileLinks = document.querySelectorAll('.mobile-link');

// Loop through each navigation link in the mobile menu
mobileLinks.forEach((link) => {
    link.addEventListener("click", function () {
      // Remove the "active" class from all links
      // mobileLinks.forEach((item) => item.classList.remove("active"));
  
      // Add the 'active' class to the clicked link
      link.classList.add("active");
  
      // Close the mobile menu after clicking a link
      closeMobileMenu();
    });
  });
  
// Function to show the mobile menu
const showMobileMenu = () => {
    
    mobileNav.classList.remove("hidden"); // Remove the 'hidden' class to display the mobile navigation menu
    
    menuClose.classList.remove("hidden"); // Remove the 'hidden' class to display the close icon (X)
  
    menuOpen.classList.add("hidden"); // Add the 'hidden' class to hide the hamburger icon
};
  
// Function for closing mobile menu
  const closeMobileMenu = () => {
    
    mobileNav.classList.add("hidden"); // Add the "hidden" class to hide the mobile nav menu
  
    menuClose.classList.add("hidden"); // Add "hidden" class to hide close icon (X)
  
    menuOpen.classList.remove("hidden"); // Remove "hidden" class to show menu icon
  };
  
  // Add event listeners for opening the mobile menu
  menuOpen.addEventListener("click", showMobileMenu);
  
  // Add event listeners for closing the mobile menu
  menuClose.addEventListener("click", closeMobileMenu);

