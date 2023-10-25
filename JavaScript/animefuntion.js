function mostrarPopup(titulo, autor, fecha, razon, videoSrc) {
    var popupOverlay = document.querySelector('.popup-overlay');
    var popup = document.getElementById('popup');
    var popupTitulo = document.getElementById('titulo');
    var popupAutor = document.getElementById('autor');
    var popupFecha = document.getElementById('fecha');
    var popupRazon = document.getElementById('razon');
    var videoContainer = document.getElementById('video-container');

    popupTitulo.textContent = titulo;
    popupAutor.textContent = 'Creador: ' + autor;
    popupFecha.textContent = 'Fecha de lanzamiento: ' + fecha;
    popupRazon.textContent = 'Razón de la recomendación: ' + razon;
    videoContainer.innerHTML = `<iframe width="560" height="315" src="${videoSrc}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
    popup.style.display = 'block';
    popupOverlay.style.display = 'block';
    setTimeout(function() {
        popup.classList.add('show');
        popupOverlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }, 50);
}

function cerrarPopup() {
    var popupOverlay = document.querySelector('.popup-overlay');
    var popup = document.getElementById('popup');
    popup.classList.remove('show');
    popupOverlay.classList.remove('show');
    document.body.style.overflow = 'auto'; 
    setTimeout(function() {
        popup.style.display = 'none';
        popupOverlay.style.display = 'none'; 
    }, 300);
}

document.getElementById('popup').onclick = function(event) {
    event.stopPropagation();
};