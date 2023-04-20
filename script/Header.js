class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
        <nav
            class="navbar navbar-expand-lg navbar-dark w-100"
            style="background-color: transparent; height: 60px; position: absolute;"
            >
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
                        <a class="nav-link ${this.getAttribute('active') == 'home' ? 'active' : ''}" href="./home.html">Home</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${this.getAttribute('active') == 'rules' ? 'active' : ''}" href="./rules.html">Rules</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${this.getAttribute('active') == 'rundown' ? 'active' : ''}" href="./rundown.html">Rundown</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link ${this.getAttribute('active') == 'register' ? 'active' : ''}" href="./register.html">Register Now</a>
                    </li>
                </ul>
            </div>
        </nav>
        `;
  }
}

customElements.define("main-header", Header);
