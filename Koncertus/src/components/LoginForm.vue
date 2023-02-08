<template>
    <div class="loginPage">
        <div class="loginForm">
            <div class="wrapperLoginRegister">
                <div class="logoImage">
                    <RouterLink to="/">
                        <img src="@/assets/img/LogoDark.svg" alt="" width="65" height="67" />
                    </RouterLink>
                </div>
                <h1 class="uppercase">Login</h1>
                <form>
                    <p class="aboveInputText"><font-awesome-icon icon="fa-solid fa-envelope" class="paddingIconForm" />
                        Email</p>
                    <input type="email" placeholder="Enter your email here" class="formInputStyle" />
                    <p class="forgotForm">Forgot email?</p>
                    <br />
                    <p class="aboveInputText"><font-awesome-icon icon="fa-solid fa-lock" class="paddingIconForm" />
                        Password</p>
                    <input type="password" placeholder="Enter your password here" class="formInputStyle" />
                    <p class="forgotForm">Forgot password?</p>
                    <br />
                    <div class="buttonsForm">
                        <p class="aboveRegisterText">Don't have an account?</p>
                        <RouterLink to="/register">
                            <button class="registerButtonStyle">REGISTER</button>
                        </RouterLink>
                        <RouterLink to="/">
                            <button type="submit" class="loginButtonStyle">LOG IN</button>
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
        <div class="loginPicture"></div>
    </div>
</template>