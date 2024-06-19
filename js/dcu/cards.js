// Detecta si el dispositivo es táctil y agrega la clase expandido si es necesario
if (window.matchMedia("(hover: none)").matches) {
    document.querySelectorAll('.card').forEach(card => {
        card.classList.add('expanded')
    })
}