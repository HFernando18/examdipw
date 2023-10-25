function mostrarPopup(titulo, autor, fecha, razon, videoSrc) {
    var popupOverlay = document.querySelector('.popup-overlay');
    var popup = document.getElementById('popup');
    var popupTitulo = document.getElementById('titulo');
    var popupAutor = document.getElementById('autor');
    var popupFecha = document.getElementById('fecha');
    var popupRazon = document.getElementById('razon');
    var videoContainer = document.getElementById('video-container');

    popupTitulo.textContent = titulo;
    popupAutor.textContent = 'Director: ' + autor;
    popupFecha.textContent = 'Fecha de lanzamiento: ' + fecha;
    popupRazon.textContent = 'Razón de la recomendación: ' + razon;
    videoContainer.innerHTML = `<iframe width="560" height="200" src="${videoSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    popup.style.display = 'block'; // Mostrar el popup
    popupOverlay.style.display = 'block'; // Mostrar el fondo oscuro
    setTimeout(function() {
        popup.classList.add('show'); // Agregar la clase para la animación
        popupOverlay.classList.add('show'); // Agregar la clase para mostrar el fondo oscuro
        document.body.style.overflow = 'hidden'; // Ocultar la barra de desplazamiento
    }, 50); // Pequeño retraso para dar tiempo a la transición de opacity en el fondo oscuro
}

function cerrarPopup() {
    var popupOverlay = document.querySelector('.popup-overlay');
    var popup = document.getElementById('popup');
    popup.classList.remove('show'); // Remover la clase para la animación
    popupOverlay.classList.remove('show'); // Remover la clase para mostrar el fondo oscuro
    document.body.style.overflow = 'auto'; // Mostrar la barra de desplazamiento
    setTimeout(function() {
        popup.style.display = 'none'; // Ocultar el popup
        popupOverlay.style.display = 'none'; // Ocultar el fondo oscuro
    }, 300); // Tiempo de la transición de la animación (0.3s)
}

// Evitar que el clic en la ventana emergente cierre la misma
document.getElementById('popup').onclick = function(event) {
    event.stopPropagation();
};