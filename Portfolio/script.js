document.addEventListener("DOMContentLoaded", function () {
    // Smooth scroll to anchor links
    const scrollLinks = document.querySelectorAll('a[href^="#"]');
    for (const scrollLink of scrollLinks) {
      scrollLink.addEventListener("click", smoothScroll);
    }
  
    function smoothScroll(e) {
      e.preventDefault();
      const targetId = this.getAttribute("href");
      document.querySelector(targetId).scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
  