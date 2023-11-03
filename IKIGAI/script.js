let slideIndex = 0;
const slides = document.querySelectorAll(".slide");

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.transform = `translateX(${100 * (i - index)}%)`;
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

function toggleMenu() {
    const menuList = document.querySelector(".menu-list");
    menuList.classList.toggle("active");
}

showSlide(slideIndex);

  // JavaScript to toggle the active class on click
  const collapsibleItems = document.querySelectorAll('.collapsible-item');

  collapsibleItems.forEach((item) => {
      const heading = item.querySelector('.collapsible-heading');
      heading.addEventListener('click', () => {
          item.classList.toggle('active');
      });
  });

  