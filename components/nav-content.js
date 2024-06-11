class NavContent extends HTMLElement {

    connectedCallback() {
        this.innerHTML =
            `
        <style>
        .nav__list {
            display: flex;
            list-style-type: none;
            flex-flow: row wrap;
            align-items: center;
            justify-content: flex-end;
            height: 100%;
        }

        .nav__item {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            margin: 5px;

            a {
                color: #efefef;
                text-decoration: none;

                &:hover {
                    color: var(--bright-color);
                }
            }

            &.nav__item--desktop {
                display: none;
            
                @media (width >= 768px) {
                    display: inline-block;
                }
            }

            &.nav__item--mobile {
                display: inline-block;
            
                @media (width >= 768px) {
                    display: none;
                }
            }
        }
        </style>

        <ul class="nav__list">
            <li class="nav__item nav__item--desktop">
                <a href="index.html">Inicio</a>
            </li>
            <li class="nav__item nav__item--desktop">
                <a href="usabilidad.html">Usabilidad</a>
            </li>
            <li class="nav__item nav__item--desktop">
                <a href="accesibilidad.html">Accesibilidad</a>
            </li>
            <li class="nav__item nav__item--desktop">
                <a href="dcu.html">DCU</a>
            </li>
            <li class="nav__item nav__item--mobile" onclick="openSidebar()">
                <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px"
                    fill="#e8eaed">
                    <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
                </svg>
            </li>
        </ul>
        `
    }
}

customElements.define('nav-content', NavContent)