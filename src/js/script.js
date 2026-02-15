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

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault(); // cegah submit default

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Encode agar aman di URL
  const subject = encodeURIComponent("Kontak dari Portfolio");
  const body = encodeURIComponent(message);

  // Ganti dengan email kamu
  const toEmail = "aldyimam03@gmail.com";

  // Coba buka Gmail (web) terlebih dahulu
  const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=${toEmail}&su=${subject}&body=${body}`;
  const gmailWindow = window.open(gmailLink, "_blank");

  // Jika popup diblokir, fallback ke mailto
  if (!gmailWindow) {
    const mailtoLink = `mailto:${toEmail}?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
  }
});
