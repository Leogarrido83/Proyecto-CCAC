// SLIDE CARROUSEL

function showSlide(carousel, index) {
    const slides = carousel.getElementsByTagName('img');
    const totalSlides = slides.length;

    for (let i = 0; i < totalSlides; i++) {
        slides[i].classList.remove('active');
    }

    if (index >= totalSlides) {
        index = 0;
    } else if (index < 0) {
        index = totalSlides - 1;
    }

    slides[index].classList.add('active');
    carousel.setAttribute('data-index', index);
}

function nextSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    let index = parseInt(carousel.getAttribute('data-index'));
    showSlide(carousel, index + 1);
}

function prevSlide(carouselId) {
    const carousel = document.getElementById(carouselId);
    let index = parseInt(carousel.getAttribute('data-index'));
    showSlide(carousel, index - 1);
}

// SLIDE AUTO
function startAutoSlideShow(carouselId, interval) {
    const carousel = document.getElementById(carouselId);
    setInterval(() => {
        nextSlide(carouselId);
    }, interval);
}

// INICIA CARROUSEL
document.addEventListener('DOMContentLoaded', () => {
    const carousels = document.querySelectorAll('.carousel');
    carousels.forEach(carousel => {
        carousel.setAttribute('data-index', 0);
        showSlide(carousel, 0);
        // CAMBIO CADA 5 SEG
        startAutoSlideShow(carousel.id, 5000);
    });
});


// FORM

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // PREVIENE EL ENVIO DEL FORMULARIO VACIO

        // VALIDAR TODOS LOS CAMPOS PARA QUE ESTEN COMPLETOS
        if (form.checkValidity()) {
            alert('Enviado con éxito!');
            form.reset(); // RESETEA EL FORM AL ENVIARLO
            window.location.href = 'index.html'; // REGRESA AL INDEX
        } else {
            alert('Todos los campos obligatorios.'); 
        }
    });
});