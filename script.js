// Scroll animation for sections
const sections = document.querySelectorAll('.fade-in');
const navLinks = document.querySelectorAll('nav ul li a');

function checkVisibility() {
  const triggerBottom = window.innerHeight * 0.85;
  sections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}
window.addEventListener('scroll', checkVisibility);
window.addEventListener('load', checkVisibility);

// Active link highlight on scroll
function setActiveLink() {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) {
      current = section.getAttribute('id');
    }
  });
  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href') === `#${current}`) {
      link.classList.add('active');
    }
  });
}
window.addEventListener('scroll', setActiveLink);

//Menu toggle hamburger icon 
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");

menuToggle.addEventListener("click", () => {
  mobileMenu.classList.toggle("show");
});

// Close menu when clicking a link
document.querySelectorAll(".mobile-menu a").forEach(link => {
  link.addEventListener("click", () => {
    mobileMenu.classList.remove("show");
  });
});

// Close when clicking outside
document.addEventListener("click", (e) => {
  if (!mobileMenu.contains(e.target) && !menuToggle.contains(e.target)) {
    mobileMenu.classList.remove("show");
  }
});




//back to top button 
const backToTop = document.getElementById('backToTop');
window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    backToTop.classList.add('show');
  } else {
    backToTop.classList.remove('show');
  }
});
backToTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});

// experience section 

document.addEventListener("DOMContentLoaded", () => {
  const years = document.querySelectorAll(".year");
  const details = document.querySelectorAll(".detail");

  years.forEach(year => {
    year.addEventListener("click", () => {
      years.forEach(y => y.classList.remove("active"));
      year.classList.add("active");

      details.forEach(detail => detail.style.display = "none");
      document.getElementById(`detail-${year.dataset.year}`).style.display = "block";
    });
  });

  // Default: show first year as active
  years[0].classList.add("active");
});

//redirection button 
document.querySelectorAll(".redirect-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const link = icon.getAttribute("data-link");
    if (link) window.open(link, "_blank");
  });
});

// form submission and validations 
document.addEventListener("DOMContentLoaded", function () {
  const form = document.querySelector(".contact-form");

  form.addEventListener("submit", async function (event) {
    event.preventDefault(); // Stop default page reload

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        alert("Thank you! Your message has been sent.");
        form.reset(); // ✅ Clear the form
      } else {
        alert("Oops! There was a problem submitting your form.");
      }
    } catch (error) {
      alert("Error: Unable to send your message.");
    }
  });
});

