function openSidebar() {
    const sidebar = document.querySelector('.sidebar');

    // Reinicia la animación eliminando y volviendo a agregar la clase
    sidebar.style.animation = 'none';
    sidebar.offsetHeight; // Trigger reflow para reiniciar la animación
    sidebar.style.animation = 'sidebar-animation 1s linear 0s 1 forwards';

    // Reproduce la animación
    sidebar.style.animationPlayState = 'running';
}

function closeSidebar() {
    const sidebar = document.querySelector('.sidebar');

    // Reinicia la animación eliminando y volviendo a agregar la clase
    sidebar.style.animation = 'none';
    sidebar.offsetHeight; // Trigger reflow para reiniciar la animación
    sidebar.style.animation = 'sidebar-animation 1s linear 0s 1 forwards';
    sidebar.style.animationDirection = "reverse";

    // Reproduce la animación
    sidebar.style.animationPlayState = 'running';
}