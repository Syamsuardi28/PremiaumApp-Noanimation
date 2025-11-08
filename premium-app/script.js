// Smooth Scroll Navigation
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
      // Close mobile menu if open
      document.querySelector(".nav-links").classList.remove("active");
    }
  });
});

// Smooth scroll for hero buttons
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    const href = link.getAttribute("href");
    if (href.startsWith("#")) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  const scrollTop = document.getElementById("scrollTop");

  if (window.scrollY > 50) {
    navbar.classList.add("scrolled");
  } else {
    navbar.classList.remove("scrolled");
  }

  // Show/hide scroll to top button
  if (window.scrollY > 300) {
    scrollTop.classList.add("show");
  } else {
    scrollTop.classList.remove("show");
  }
});

// Hamburger menu toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

if (hamburger) {
  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("active");
    hamburger.classList.toggle("active");
  });
}

// Form Handling
const form = document.getElementById("contactForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get form values
    const nama = document.getElementById("nama").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("pesan").value;

    // Show success message
    alert(
      `Terima kasih ${nama}! Pesan Anda telah terkirim. Kami akan segera menghubungi Anda melalui ${email}.`
    );

    // Reset form
    form.reset();
  });
}

// Buy button handling
document.querySelectorAll(".beli-btn").forEach((btn) => {
  btn.addEventListener("click", function () {
    const card = this.closest(".card");
    const productName = card.querySelector("h3").textContent;
    const price = card.querySelector(".price").textContent;

    alert(
      `Anda memilih: ${productName}\nHarga: ${price}\n\nSilakan hubungi admin kami untuk melanjutkan pembelian:\nWhatsApp: +62 812-3456-7890`
    );
  });
});

// Scroll to top button
const scrollTopBtn = document.getElementById("scrollTop");
if (scrollTopBtn) {
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
}

// Animate elements on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe all cards and feature boxes
document
  .querySelectorAll(".card, .feature-box, .testi-card, .info-box")
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Newsletter form handling
const newsletterForm = document.querySelector(".newsletter");
if (newsletterForm) {
  const newsletterBtn = newsletterForm.querySelector("button");
  const newsletterInput = newsletterForm.querySelector("input");

  newsletterBtn.addEventListener("click", (e) => {
    e.preventDefault();
    const email = newsletterInput.value;

    if (email && email.includes("@")) {
      alert(
        `Terima kasih! Email ${email} telah terdaftar untuk newsletter kami.`
      );
      newsletterInput.value = "";
    } else {
      alert("Mohon masukkan email yang valid.");
    }
  });
}

// Add animation delay to cards
document.querySelectorAll(".card").forEach((card, index) => {
  card.style.animationDelay = `${index * 0.1}s`;
});

// Add hover sound effect (optional - commented out)
/*
document.querySelectorAll('.btn, .card, .social-link').forEach(el => {
  el.addEventListener('mouseenter', () => {
    // You can add sound effect here
    console.log('Hover effect');
  });
});
*/

// Parallax effect for hero section
window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset;
  const heroContent = document.querySelector(".hero-content");

  if (heroContent) {
    heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
    heroContent.style.opacity = 1 - scrolled / 500;
  }
});

// Add loading animation
window.addEventListener("load", () => {
  document.body.style.opacity = "0";
  setTimeout(() => {
    document.body.style.transition = "opacity 0.5s ease";
    document.body.style.opacity = "1";
  }, 100);
});

// Console message for developers
console.log(
  "%c🚀 Premio Website",
  "color: #6366f1; font-size: 20px; font-weight: bold;"
);
console.log("%cDeveloped with ❤️", "color: #8b5cf6; font-size: 14px;");
console.log(
  "%cInterested in our services? Contact us!",
  "color: #64748b; font-size: 12px;"
);
