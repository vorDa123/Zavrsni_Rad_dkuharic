<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>
<template>
  <nav v-if="!$route.meta.hideNavbar">
    <RouterLink to="/concerts" class="middleAlign notLogo">CONCERTS</RouterLink>
    <RouterLink to="/profile" class="middleAlign notLogo">MY PROFILE</RouterLink>
    <RouterLink to="/">
      <img src="@/assets/img/Logo.svg" alt="" width="45" height="47" />
    </RouterLink>
    <RouterLink to="/about" class="middleAlign notLogo">ABOUT</RouterLink>
    <RouterLink to="/login" class="middleAlign notLogo">LOG IN</RouterLink>
  </nav>
  <RouterView />
</template>