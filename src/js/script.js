// Navbar Fixed
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
  } else {
    header.classList.remove("navbar-fixed");
  }
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault(); // cegah submit default

  let name = document.getElementById('name').value;
  let email = document.getElementById('email').value;
  let message = document.getElementById('message').value;

  // Encode agar aman di URL
  let subject = encodeURIComponent("Kontak dari Portfolio");
  let body = encodeURIComponent(
    `Nama: ${name}\nEmail: ${email}\nPesan: ${message}`
  );

  // Ganti dengan email kamu
  let mailtoLink = `mailto:aldyimam02@gmail.com?subject=${subject}&body=${body}`;

  // Buka di tab baru
  window.location.href = mailtoLink;
});
