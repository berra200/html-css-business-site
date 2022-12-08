let footer = document.querySelector("#footer")
footer.className = "columns"

footer.innerHTML = `
<div class="column is-8-widescreen is-offset-2-widescreen is-6-fullhd is-offset-3-fullhd">
    <div class="columns">
        <!--MENY-->
        <div class="column is-3-tablet" >
            <h3 class="header--footer">MENY</h3>
            <div class="columns links">
                <div class="column">
                    <ul>
                        <li>
                            <a class="page" href="/index.html">
                                HEM
                            </a>
                        </li>
                        <li>
                            <a class="page" href="/pages/properties.html">
                                TILL SALU
                            </a>
                        </li>
                        <li>
                            <a class="page" href="/pages/testimonials.html">
                                SÅLDA OBJEKT
                            </a>
                        </li>
                        <li>
                            <a class="page" href="/pages/contact.html">
                                KONTAKT
                            </a>
                        </li>
                        <li>
                            <a class="page" href="/pages/about.html">
                                OM OSS
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!--HITTA OSS-->
        <div class="column is-4-tablet is-inline">
            <h3 class="header--footer">HITTA OSS</h3>
            <div class="columns is-mobile is-narrow">
                <div class="column is-narrow">
                    <a href="https://www.google.com/maps/place/Grev+Turegatan+6,+114+46+Stockholm/@59.3352003,18.066199,15z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5b6fd25049:0x7c52e24738b70557!8m2!3d59.3352006!4d18.0749537" target="_blank">
                        <i class="fa-solid fa-location-dot"></i>
                    </a>
                </div>
                <div class="column is-narrow">
                    <a href="https://www.google.com/maps/place/Grev+Turegatan+6,+114+46+Stockholm/@59.3352003,18.066199,15z/data=!3m1!4b1!4m5!3m4!1s0x465f9d5b6fd25049:0x7c52e24738b70557!8m2!3d59.3352006!4d18.0749537" target="_blank">
                        <p>Grevturegatan 6,</p>
                        <p>114 46 Stockholm</p>
                    </a>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-narrow">
                    <a href="tel:0707343434">
                        <i class="fa-solid fa-phone"></i>
                    </a>
                </div>
                <div class="column is-narrow">
                    <a href="tel:0707343434">
                        <p>070-734 34 34</p>
                    </a>
                </div>
            </div>
            <div class="columns is-mobile">
                <div class="column is-narrow">
                    <a href="mailto:info@anrikafastigheter.se">
                        <i class="fa-solid fa-envelope"></i>
                    </a>
                </div>
                <div class="column is-narrow">
                    <a href="mailto:info@anrikafastigheter.se">
                        <p>info@anrikafastigheter.se</p>
                    </a>
                </div>
            </div>
        </div class="column">
        <!--FÖLJ OSS-->
        <div class="column is-2-tablet">
            <h3 class="header--footer">FÖLJ OSS</h3>
            <div class="columns is-mobile">
                <div class="column is-narrow">
                    <a href="https://www.facebook.com/" target="_blank">
                        <i class="fa-brands fa-facebook"></i>
                    </a>
                </div>
                <div class="column is-narrow">
                    <a href="https://www.instagram.com/" target="_blank">
                        <i class="fa-brands fa-instagram"></i>
                    </a>
                </div>
            </div>
        </div>
        <!--todo: CentreraLogga + copyright-->
        <!--LOGGA-->
        <div class="column is-3-tablet">
                <a href="/index.html">
                    <img src="/pictures/Logotype.png"
                        alt="#"
                        width="200"
                        class="logo"
                    />
                </a>
                <p class="header--footer">© ANRIKA FASTIGHETER 2022</p>
        </div>
    </div>
</div>`

document.querySelector("#footer").append(footer)