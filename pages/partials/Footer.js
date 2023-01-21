let footer = document.querySelector("#footer")
footer.className = "columns"

footer.innerHTML = `
<div class="column is-8-widescreen is-offset-2-widescreen is-6-fullhd is-offset-3-fullhd">
    <div class="columns">
        <!--MENY-->
        <div class="column is-3-tablet footer-container" >
            <p>MENY</p>
            <div class="columns links">
                <div class="column">
                    <ul>
                        <li>
                            <a class="page" href="../../index.html">
                                HEM
                            </a>
                        </li>
                        <li>
                            <a class="page" href="../pages/properties.html">
                                TILL SALU
                            </a>
                        </li>
                        <li>
                            <a class="page" href="../pages/sell.html">
                                SÄLJ MED OSS
                            </a>
                        </li>
                        <li>
                            <a class="page" href="../pages/testimonials.html">
                                SÅLDA OBJEKT
                            </a>
                        </li>
                        <li>
                            <a class="page" href="../pages/contact.html">
                                KONTAKT
                            </a>
                        </li>
                        <li>
                            <a class="page" href="../pages/about.html">
                                OM OSS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--HITTA OSS-->
        <div class="column is-4-tablet is-inline footer-container">
            <p>HITTA OSS</p>

            <!--PLATS-->
            <a href="https://www.google.com/maps/place/Grev+Turegatan+6,+114+46+Stockholm/@59.3352003,18.066199,15z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5b6fd25049:0x7c52e24738b70557!8m2!3d59.3352006!4d18.0749537" aria-label="Hitta till Anrika Fastigheter via Google Maps" rel="external" target="_blank">
                <div class="columns is-mobile is-narrow">
                    <div class="column is-narrow">
                        <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
                    </div>
                    <div class="column is-narrow">
                        <address>
                            Grevturegatan 6
                            <br/>114 46 Stockholm
                        </address>
                    </div>
                </div>
            </a>
            <!--TELEFON-->
            <a href="tel:+46707343434" aria-label="Ring Anrika Fastigheter">
                <div class="columns is-mobile">
                    <div class="column is-narrow">
                        <i class="fa-solid fa-phone" aria-hidden="true"></i>
                    </div>
                    <div class="column is-narrow">
                        <p>070 734 34 34</p>
                    </div>
                </div>
            </a>
            <!--MEJL-->
            <a href="mailto:info@anrika.se" aria-label="Mejla Anrika Fastigheter">
                <div class="columns is-mobile">
                    <div class="column is-narrow">
                        <i class="fa-solid fa-envelope" aria-hidden="true"></i>
                    </div>
                    <div class="column is-narrow">
                        <p>info@anrika.se</p>
                    </div>
                </div>
            </a>
        </div>
        <!--FÖLJ OSS-->
        <div class="column is-2-tablet footer-container">
            <p>FÖLJ OSS</p>
            <div class="columns is-mobile">
                <div class="column is-narrow">
                    <a href="https://www.facebook.com/" aria-label="Följ Anrika Fastigheter på Facebook" rel="external" target="_blank">
                        <i class="fa-brands fa-facebook" aria-hidden="true"></i>
                    </a>
                </div>
                <div class="column is-narrow">
                    <a href="https://www.instagram.com/" aria-label="Följ Anrika Fastigheter på Instagram" rel="external" target="_blank">
                        <i class="fa-brands fa-instagram" aria-hidden="true"></i>
                    </a>
                </div>
            </div>
        </div>
        <!--LOGGA-->
        <div class="column is-3-tablet footer-logo">
                <a href="/">
                    <img src="/pictures/black-logo.png"
                        alt="Anrika Fastigheters logga, länk till startsida"
                    />
                </a>
        </div>
    </div>
    <p class="header--footer has-text-centered">© ANRIKA FASTIGHETER 2022</p>
</div>
`