function mostrarPopup(titulo, autor, fecha, razon) {
    var popupOverlay = document.querySelector('.popup-overlay');
    var popup = document.getElementById('popup');
    var popupTitulo = document.getElementById('titulo');
    var popupAutor = document.getElementById('autor');
    var popupFecha = document.getElementById('fecha');
    var popupRazon = document.getElementById('razon');

    popupTitulo.textContent = titulo;
    popupAutor.textContent = 'Autor: ' + autor;
    popupFecha.textContent = 'Fecha de publicación: ' + fecha;
    popupRazon.textContent = 'Razón de la recomendación: ' + razon;
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