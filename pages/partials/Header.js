let header = document.querySelector("#header")

header.innerHTML = `
<nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
        <!--Logga-->  
        <a class="navbar-item nav-logo" href="index.html">
            <img src="/pictures/Logotype.png" width="112" height="28"/>
        </a>   
        <!--Hamburgaremeny-->  
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    
    <div id="navbarBasicExample" class="navbar-menu">
        <ul>
            <div class="navbar-start">
                <li>
                    <a class="navbar-item page" href="/index.html">
                        HEM
                    </a>
                </li>
                <li>
                    <a class="navbar-item page" href="/pages/properties.html">
                        TILL SALU
                    </a>
                </li>
                <li>
                    <a class="navbar-item page" href="/pages/testimonials.html">
                        SÅLDA OBJEKT
                    </a>
                </li>
                <li>
                    <a class="navbar-item page" href="/pages/contact.html">
                        KONTAKT
                    </a>
                </li>
                <li>
                    <a class="navbar-item page" href="/pages/about.html">
                        OM OSS
                    </a>
                </li>
            </div>
        </ul>
    </div>
</nav>`