const menuIcon = document.querySelector('.menu i');
const navLinks = document.querySelector('.links');

document.querySelector('.menu').addEventListener('click', () => {
  navLinks.classList.toggle('active');

  menuIcon.classList.toggle('fa-bars');
  menuIcon.classList.toggle('fa-times');
});


const sections = document.querySelectorAll("section");
const navLinksAll = document.querySelectorAll(".links a");

window.addEventListener("scroll", () => {
  let current = "";

  sections.forEach(section => {
    const sectionTop = section.offsetTop;
    if (scrollY >= sectionTop - 100) {
      current = section.getAttribute("id");
    }
  });

  navLinksAll.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});