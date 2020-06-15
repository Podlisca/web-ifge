class Navbar extends HTMLElement {
    constructor() {
        super();

        var shadow = this.attachShadow({mode: 'open'});

        var wrapper = document.createElement("nav");
        wrapper.textContent = "Navigationsleiste";

        var style = document.createElement("style");
        style.textContent = "nav {font-size: 2em;}"

        shadow.appendChild(style);
        shadow.appendChild(wrapper);
        
    }
}

customElements.define('lw-navbar', Navbar);