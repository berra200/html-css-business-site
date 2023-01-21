let header = document.querySelector("#header")

header.innerHTML = `
<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <!--Logga-->  
        <a class="navbar-item nav-logo" href="../../index.html">
            <img src="../../pictures/logo-text.png" alt="Anrika Fastigheters logga, länk till startsida"/>
        </a>   
        <!--Hamburgaremeny-->  
        <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
        </a>
    </div>
    
    <div id="navbarBasicExample" class="navbar-menu">
        <ul class="navbar-start">
            <li>
                <a class="navbar-item page" href="../../index.html">
                    HEM
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="../pages/properties.html">
                    TILL SALU
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="../pages/sell.html">
                    SÄLJ MED OSS
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="../pages/testimonials.html">
                    SÅLDA OBJEKT
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="../pages/contact.html">
                    KONTAKT
                </a>
            </li>
            <li>
                <a class="navbar-item page" href="../pages/about.html">
                    OM OSS
                </a>
            </li>
        </ul>
    </div>
</nav>`