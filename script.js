// nav links

const navlinks = document.querySelectorAll(".nav-link");
navlinks.forEach((navlink, index) => {
    const up = document.querySelectorAll(".up")[index];
    const down = document.querySelectorAll(".down")[index];
    const dropdown = document.querySelectorAll(".dropdown")[index];

navlink.addEventListener("click", (e) => {
  e.stopPropagation();
  
  navlink.classList.toggle("border-b-4");
  navlink.classList.toggle("border:[#ffc24f]");
  dropdown.classList.toggle("hidden");
  up.classList.toggle("hidden");
  down.classList.toggle("hidden");

  navlinks.forEach((nl, i) =>{
    if(i!== index){
        document.querySelectorAll(".dropdown")[i].classList.add("hidden");
        document.querySelectorAll(".up")[i].classList.add("hidden");
        document.querySelectorAll(".down")[i].classList.remove("hidden");
        nl.classList.remove("border-b-4");
    }
  });
});
});

// Hide dropdown on outside click
document.addEventListener("click", (e) => {
document.querySelectorAll(".dropdown").forEach((dd, i) => {
    const nav = document.querySelectorAll(".nav-link")[i];
    if (!dd.contains(e.target) && !nav.contains(e.target)) {
      dd.classList.add("hidden");
      document.querySelectorAll(".up")[i].classList.add("hidden");
      document.querySelectorAll(".down")[i].classList.remove("hidden");
      nav.classList.remove("border-b-4");
    }
  });
});


// Hover to switch submenu content
document.querySelectorAll(".dropdown-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    const target = item.getAttribute("data-child");

    // Hide all children
    document.querySelectorAll(".sub-dropdown").forEach((panel) => {
      panel.classList.add("hidden");
    });

    // Show selected
    document.getElementById(target).classList.remove("hidden");

    // Remove active from others
    document.querySelectorAll(".dropdown-item").forEach((li) => li.classList.remove("active"));
    item.classList.add("active");
  });
});



// yellow btn
const btn = document.getElementById("btn");
const menu = document.getElementById("btn-dropdown");

btn.addEventListener("click", (e) => {
    e.stopPropagation();
    menu.classList.toggle("hidden"); 
});

document.addEventListener("click", (e) => {
  if (!btn.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.add("hidden");
  }
});


// hamburger toggle
const toggleBtn = document.getElementById("menu-toggle");
const hamburgerMenu = document.getElementById("mobile-menu");
const icon = document.getElementById("menu-icon");

toggleBtn.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("hidden");

  // Toggle icon
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-xmark");
  } else {
    icon.classList.remove("fa-xmark");
    icon.classList.add("fa-bars");
  }
});



// slider
let current = 0;
  const slider = document.getElementById("slider");
  const totalSlides = slider.children.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${current * 100}%)`;
    for (let i = 0; i < totalSlides; i++) {
      document.getElementById("dot" + i).classList.remove("bg-[#022B50]");
      document.getElementById("dot" + i).classList.add("bg-[#CACED1]");
    }
    document.getElementById("dot" + current).classList.add("bg-[#022B50]");
    document.getElementById("dot" + current).classList.remove("bg-[#CACED1]");
  }

  function nextSlide() {
    current = (current + 1) % totalSlides;
    updateSlider();
  }

  function prevSlide() {
    current = (current - 1 + totalSlides) % totalSlides;
    updateSlider();
  }

  setInterval(() => nextSlide(), 5000);