(function () {
  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.setAttribute("aria-expanded", String(isOpen));
    });
  }

  function setupSlider() {
    var slider = document.querySelector("[data-slider]");
    if (!slider) return;

    var slides = Array.prototype.slice.call(slider.querySelectorAll(".slide"));
    var dots = Array.prototype.slice.call(slider.querySelectorAll("[data-slider-dot]"));
    var prev = slider.querySelector("[data-slider-prev]");
    var next = slider.querySelector("[data-slider-next]");
    var index = 0;
    var timer = null;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === index);
      });
      dots.forEach(function (dot, dotIndex) {
        dot.classList.toggle("active", dotIndex === index);
      });
    }

    function start() {
      window.clearInterval(timer);
      timer = window.setInterval(function () {
        show(index + 1);
      }, 4000);
    }

    if (prev) {
      prev.addEventListener("click", function () {
        show(index - 1);
        start();
      });
    }

    if (next) {
      next.addEventListener("click", function () {
        show(index + 1);
        start();
      });
    }

    dots.forEach(function (dot) {
      dot.addEventListener("click", function () {
        show(Number(dot.getAttribute("data-slider-dot")));
        start();
      });
    });

    if (slides.length > 1) start();
  }

  function setupLightbox() {
    var viewer = document.querySelector("[data-lightbox-viewer]");
    if (!viewer) return;

    var image = viewer.querySelector("img");
    var caption = viewer.querySelector("p");
    var close = viewer.querySelector("[data-lightbox-close]");

    document.querySelectorAll("[data-lightbox]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        image.src = link.href;
        image.alt = link.querySelector("img").alt || "";
        caption.textContent = link.textContent.trim();
        viewer.classList.add("open");
        viewer.setAttribute("aria-hidden", "false");
      });
    });

    function hide() {
      viewer.classList.remove("open");
      viewer.setAttribute("aria-hidden", "true");
      image.src = "";
    }

    if (close) close.addEventListener("click", hide);
    viewer.addEventListener("click", function (event) {
      if (event.target === viewer) hide();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") hide();
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNav();
    setupSlider();
    setupLightbox();
  });
})();
