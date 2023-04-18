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
        <h1 class="uppercase">Register</h1>
        <form @submit.prevent="onSubmit">
          <p class="aboveInputText">
            <font-awesome-icon
              icon="fa-solid fa-envelope"
              class="paddingIconForm"
            />
            Email
          </p>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.email.$errors"
            :key="index"
          >
            <div class="errorMessage">{{ error.$message }}</div>
          </div>
          <input
            type="email"
            placeholder="Enter your email here"
            class="formInputStyle"
            v-model="v$.form.email.$model"
          />
          <br />
          <br />
          <p class="aboveInputText">
            <font-awesome-icon
              icon="fa-solid fa-lock"
              class="paddingIconForm"
            />
            Password
          </p>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.password.$errors"
            :key="index"
          >
            <div class="errorMessage">{{ error.$message }}</div>
          </div>
          <input
            type="password"
            placeholder="Enter your password here"
            class="formInputStyle"
            v-model="v$.form.password.$model"
          />
          <br />
          <br />
          <p class="aboveInputText">
            <font-awesome-icon
              icon="fa-solid fa-lock"
              class="paddingIconForm"
            />
            Confirm password
          </p>
          <div
            class="input-errors"
            v-for="(error, index) of v$.form.confirmedPassword.$errors"
            :key="index"
          >
            <div class="errorMessage">{{ error.$message }}</div>
          </div>
          <input
            type="password"
            placeholder="Enter your password here"
            class="formInputStyle"
            v-model="v$.form.confirmedPassword.$model"
          />
          <div class="buttonsForm">
            <p class="aboveRegisterText">Already have an account?</p>
            <RouterLink to="/login">
              <button class="loginButtonStyleRegister">LOG IN</button>
            </RouterLink>
            <RouterLink to="/">
              <button type="submit" class="registerButtonStyleRegister" :disabled="v$.form.$invalid">
                REGISTER
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
import { required, email, minLength, sameAs } from "@vuelidate/validators";
export default {
  setup() {
    return { v$: useVuelidate() };
  },

  data() {
    return {
      form: {
        email: "",
        password: "",
        confirmedPassword:"",
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
        confirmedPassword: {
          required,
          same: sameAs(this.form.password),
        },
      },
    };
  },
};
</script>
