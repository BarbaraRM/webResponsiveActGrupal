document.addEventListener('DOMContentLoaded', function() {
    var progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
        var width = parseFloat(bar.getAttribute('data-width')); // Obtener el valor como número decimal
        bar.style.width = '0%'; // Establecer ancho inicial en 0%
        
        anime({
            targets: bar,
            width: width + '%', // Anima hasta el valor de data-width
            duration: 5000, // Duración de la animación en milisegundos
            easing: 'easeInOutSine' // Tipo de easing para la animación
        });
    });
});
