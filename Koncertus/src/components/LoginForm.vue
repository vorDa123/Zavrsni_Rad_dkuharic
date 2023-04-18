<template>
  <div class="loginPage">
    <div class="loginForm">
      <div class="wrapperLoginRegister">
        <div class="logoImage">
          <RouterLink to="/">
            <img
              src="@/assets/img/LogoDark.svg"
              alt=""
              width="65"
              height="67"
            />
          </RouterLink>
        </div>
        <h1 class="uppercase">Login</h1>
        <form @submit.prevent="onSubmit">
          <label for="email" class="aboveInputText"
            ><font-awesome-icon
              icon="fa-solid fa-envelope"
              class="paddingIconForm"
            />
            Email</label
          >
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div class="errorMessage">{{ error.$message }}</div>
          </div>
          <input
            name="email"
            type="email"
            placeholder="Enter your email here"
            class="formInputStyle"
            v-model="v$.form.email.$model"
          />
          <p class="forgotForm">Forgot email?</p>
          <br />
          <label for="password" class="aboveInputText"
            ><font-awesome-icon
              icon="fa-solid fa-lock"
              class="paddingIconForm"
            />
            Password</label
          >
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
          >
            <div class="errorMessage">{{ error.$message }}</div>
          </div>
          <input
            name="password"
            type="password"
            placeholder="Enter your password here"
            class="formInputStyle"
            v-model="v$.form.password.$model"
          />
          <p class="forgotForm">Forgot password?</p>
          <br />
          <div class="buttonsForm">
            <p class="aboveRegisterText">Don't have an account?</p>
            <RouterLink to="/register">
              <button class="registerButtonStyle">REGISTER</button>
            </RouterLink>
            <RouterLink to="/">
              <button
                type="submit"
                class="loginButtonStyle"
                :disabled="v$.form.$invalid"
              >
                LOG IN
              </button>
            </RouterLink>
          </div>
        </form>
      </div>
    </div>
    <div class="loginPicture"></div>
  </div>
</template>

<script>
import useVuelidate from "@vuelidate/core";
import { required, email, minLength } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
      },
    };
  },

  validations() {
    return {
      form: {
        email: {
          required,
          email,
        },
        password: {
          required,
          min: minLength(8),
        },
      },
    };
  },
};
</script>
