class Header extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
        <nav
            class="navbar navbar-expand-lg navbar-dark w-100"
            style="background-color: transparent; height: 60px; position: absolute"
            >
            <a class="navbar-brand" href="#">Navbar</a>
            <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                    <li class="nav-item">
                        <a class="nav-link" href="./home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Rules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Rundown</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="./register.html">Register Now</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
  }
}

customElements.define('main-header', Header);