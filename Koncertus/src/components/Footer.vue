<template>
    <div class="footer">
        <div class="wrapper">
            <div class="footerContent">
                <div class="footerContact">
                    <p class="uppercase bold">Contact</p>
                    <p>Address: Turanjska ulica 3G, Zagreb, Croatia</p>
                    <p>E-mail: dkuharic@tvz.hr</p>
                    <p>Phone: +385 91 497 6618</p>
                </div>
                <div class="footerSocialMediaLogo">
                    <p class="uppercase bold">Social media</p>
                    <font-awesome-icon icon="fa-brands fa-facebook" class="socialMediaIconsSize" />
                    <font-awesome-icon icon="fa-brands fa-twitter" class="socialMediaIconsSize" />
                    <font-awesome-icon icon="fa-brands fa-instagram" class="socialMediaIconsSize" />
                    <font-awesome-icon icon="fa-brands fa-youtube" class="socialMediaIconsSize" />
                    <div class="footerLogo">
                        <img src="@/assets/img/Logo.svg" alt="" width="85" height="87">
                        <p class="uppercase bold logoText">Koncertus</p>
                    </div>
                </div>
                <div class="footerSitemap">
                    <p class="uppercase bold">Sitemap</p>

                    <RouterLink to="/">HOME</RouterLink>
                    <br/>
                    <RouterLink to="/concerts">CONCERTS</RouterLink>
                    <br/>
                    <RouterLink to="/profile">MY PROFILE</RouterLink>
                    <br/>
                    <RouterLink to="/about">ABOUT</RouterLink>
                    <br/>
                    <RouterLink to="/login">LOG IN</RouterLink>
                </div>
            </div>
            <div class="footerCopyright">
                <p>Copyright © 2023 | All rights reserved | Privacy policy</p>
            </div>
        </div>
    </div>
</template>