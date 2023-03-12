<template>
    <div class="loginPage">
        <div class="loginForm">
            <div class="wrapperLoginRegister">
                <div class="logoImage">
                    <RouterLink to="/">
                        <img src="@/assets/img/LogoDark.svg" alt="" width="65" height="67" />
                    </RouterLink>
                </div>
                <h1 class="uppercase">Register</h1>
                <form method="post">
                    <p class="aboveInputText"><font-awesome-icon icon="fa-solid fa-envelope" class="paddingIconForm" />
                        Email</p>
                    <input type="email" placeholder="Enter your email here" class="formInputStyle" />
                    <br />
                    <br />
                    <p class="aboveInputText"><font-awesome-icon icon="fa-solid fa-lock" class="paddingIconForm" />
                        Password</p>
                    <input type="password" placeholder="Enter your password here" class="formInputStyle" />
                    <br />
                    <br />
                    <p class="aboveInputText"><font-awesome-icon icon="fa-solid fa-lock" class="paddingIconForm" />
                        Confirm password</p>
                    <input type="password" placeholder="Enter your password here" class="formInputStyle" />
                    <div class="buttonsForm">
                        <p class="aboveRegisterText">Already have an account?</p>
                        <RouterLink to="/login">
                            <button class="loginButtonStyleRegister">LOG
                                IN</button>
                        </RouterLink>
                        <RouterLink to="/">
                            <input type="submit" class="registerButtonStyleRegister" value="REGISTER">
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
        <div class="loginPicture"></div>
    </div>
</template>