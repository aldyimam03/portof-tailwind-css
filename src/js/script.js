// Navbar Fixed & Back to Top & Scroll Spy
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  const toTop = document.querySelector("#back-to-top");

  // Navbar fixed dan Back to Top Visibility
  if (window.pageYOffset > fixedNav) {
    header.classList.add("navbar-fixed");
    toTop.classList.remove("hidden");
    toTop.classList.add("flex");
  } else {
    header.classList.remove("navbar-fixed");
    toTop.classList.remove("flex");
    toTop.classList.add("hidden");
  }

  // Scroll Spy Logic
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("header nav ul li a");

  let current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    // Berikan toleransi jarak sekitar sepertiga atau seperempat layar
    if (pageYOffset >= sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((a) => {
    a.classList.remove("text-primary", "font-bold", "dark:text-primary");
    a.classList.add("text-dark", "dark:text-white");
    if (a.getAttribute("href").includes(current) && current !== "") {
      a.classList.remove("text-dark", "dark:text-white");
      a.classList.add("text-primary", "font-bold", "dark:text-primary");
    }
  });
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

// Dark mode toggle
const darkToggle = document.querySelector("#dark-toggle");
const html = document.querySelector("html");

darkToggle.addEventListener("click", function () {
  if (darkToggle.checked) {
    html.classList.add("dark");
    localStorage.theme = "dark";
  } else {
    html.classList.remove("dark");
    localStorage.theme = "light";
  }
});

// Pindahkan posisi toggle sesuai mode
// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (
  localStorage.theme === "dark" ||
  (!("theme" in localStorage) &&
    window.matchMedia("(prefers-color-scheme: dark)").matches)
) {
  darkToggle.checked = true;
  html.classList.add("dark");
} else {
  darkToggle.checked = false;
  html.classList.remove("dark");
}
