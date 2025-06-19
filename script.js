const navbar = document.getElementById("navbar");

    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
      } else {
        navbar.classList.remove("scrolled");
      }
    });

  
    const toggleBtn = document.getElementById("toggleBtn");
    const navLinks = document.getElementById("navLinks");

    toggleBtn.addEventListener("click", () => {
      navbar.classList.toggle("active");
    });