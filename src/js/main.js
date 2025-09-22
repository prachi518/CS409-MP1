// /* Your JS here. */
// console.log('Hello World!')

// Navbar shrink
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
  if (window.scrollY > 50) navbar.classList.add('shrink');
  else navbar.classList.remove('shrink');

  // Progress bar
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const progress = (window.scrollY / docHeight) * 100;
  document.querySelector('.progress-bar').style.width = progress + "%";
});

// Carousel
// Carousel with sliding effect
const slidesContainer = document.querySelector('.slides');
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(n) {
  if (n >= slides.length) currentSlide = 0;
  else if (n < 0) currentSlide = slides.length - 1;
  else currentSlide = n;

  slidesContainer.style.transform = `translateX(-${currentSlide * 100}%)`;
}

document.querySelector('.next').onclick = () => showSlide(currentSlide + 1);
document.querySelector('.prev').onclick = () => showSlide(currentSlide - 1);
showSlide(currentSlide);

// Modal
const modal = document.getElementById("contactModal");
document.getElementById("openModal").onclick = () => modal.style.display = "flex";
document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };

// Scroll spy (highlight active nav link)
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar ul li a");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          link.classList.remove("active");
          if (link.getAttribute("href").substring(1) === entry.target.id) {
            link.classList.add("active");
          }
        });
      }
    });
  },
  { threshold: 0.6 } // section must be at least 60% visible
);

sections.forEach(section => observer.observe(section));