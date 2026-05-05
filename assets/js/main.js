(function () {
  function setupNav() {
    var toggle = document.querySelector(".nav-toggle");
    var links = document.querySelector(".nav-links");
    if (!toggle || !links) return;

    function closeMenu() {
      links.classList.remove("open");
      toggle.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }

    toggle.addEventListener("click", function () {
      var isOpen = links.classList.toggle("open");
      toggle.classList.toggle("open", isOpen);
      toggle.setAttribute("aria-expanded", String(isOpen));
    });

    links.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
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
    var touchStartX = 0;

    function show(nextIndex) {
      index = (nextIndex + slides.length) % slides.length;
      slides.forEach(function (slide, slideIndex) {
        slide.classList.toggle("active", slideIndex === index);
        slide.setAttribute("aria-hidden", String(slideIndex !== index));
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

    slider.addEventListener("mouseenter", function () {
      window.clearInterval(timer);
    });

    slider.addEventListener("mouseleave", start);

    slider.addEventListener("touchstart", function (event) {
      touchStartX = event.changedTouches[0].clientX;
    }, { passive: true });

    slider.addEventListener("touchend", function (event) {
      var deltaX = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < 40) return;
      show(deltaX > 0 ? index - 1 : index + 1);
      start();
    }, { passive: true });
  }

  function setupLightbox() {
    var viewer = document.querySelector("[data-lightbox-viewer]");
    if (!viewer) return;

    var image = viewer.querySelector("img");
    var caption = viewer.querySelector("p");
    var close = viewer.querySelector("[data-lightbox-close]");
    var previousFocus = null;

    document.querySelectorAll("[data-lightbox]").forEach(function (link) {
      link.addEventListener("click", function (event) {
        event.preventDefault();
        previousFocus = document.activeElement;
        image.src = link.href;
        image.alt = link.querySelector("img").alt || "";
        caption.textContent = link.textContent.trim();
        viewer.classList.add("open");
        viewer.setAttribute("aria-hidden", "false");
        if (close) close.focus();
      });
    });

    function hide() {
      viewer.classList.remove("open");
      viewer.setAttribute("aria-hidden", "true");
      image.src = "";
      if (previousFocus && previousFocus.focus) previousFocus.focus();
    }

    if (close) close.addEventListener("click", hide);
    viewer.addEventListener("click", function (event) {
      if (event.target === viewer) hide();
    });
    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") hide();
    });
  }

  function setupAcademicYears() {
    var statusNodes = document.querySelectorAll("[data-enrollment-year][data-program]");
    if (!statusNodes.length) return;

    var now = new Date();
    var currentYear = now.getFullYear();
    var currentMonth = now.getMonth() + 1;

    statusNodes.forEach(function (node) {
      var enrollmentYear = Number(node.getAttribute("data-enrollment-year"));
      var rolloverMonth = Number(node.getAttribute("data-rollover-month") || "9");
      var program = node.getAttribute("data-program") || "PhD Student";
      var graduated = node.getAttribute("data-graduated") === "true";

      if (!enrollmentYear) return;

      var academicYear = currentMonth >= rolloverMonth ? currentYear : currentYear - 1;
      var yearNumber = academicYear - enrollmentYear + 1;

      if (graduated || yearNumber > 4) {
        node.textContent = "Former " + program;
        return;
      }

      if (yearNumber < 1) yearNumber = 1;
      node.textContent = "Year " + yearNumber + " " + program;
    });
  }

  document.addEventListener("DOMContentLoaded", function () {
    setupNav();
    setupSlider();
    setupLightbox();
    setupAcademicYears();
  });
})();
