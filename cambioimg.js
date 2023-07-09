 var slides = document.getElementsByClassName("slide");
    var currentSlide = 0;

    function showSlide() {
      slides[currentSlide].style.display = "none";
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].style.display = "block";
    }

    slides[currentSlide].style.display = "block";
    setInterval(showSlide, 4000);