class SidebarItems extends HTMLElement {

    connectedCallback() {
        this.innerHTML =
            `
            <style>
            .sidebar__close {
                align-self: flex-end;
                background-color: transparent;
                border: none;
                & svg {
                    fill: white
                }
            }

            .sidebar__item {
                font-size: 24px;
                text-align: center;

                & a {
                    color: white;
                    text-decoration: none;
                }
            }
            </style>

            <button class="sidebar__close" onclick="closeSidebar()">
                <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 -960 960 960" width="64px" fill="#e8eaed">
                    <path
                        d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z" />
                </svg>
            </button>
            <section class=" sidebar__item">
                <a href="index.html">Inicio</a>
            </section>
            <section class="sidebar__item">
                <a href="usabilidad.html">Usabilidad</a>
            </section>
            <section class="sidebar__item">
                <a href="accesibilidad.html">Accesibilidad</a>
            </section>
            <section class="sidebar__item">
                <a href="dcu.html">DCU</a>
            </section>
        `
    }
}

customElements.define('sidebar-items', SidebarItems)