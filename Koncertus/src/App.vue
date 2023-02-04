<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
  <nav>
    <p>
      <RouterLink to="/">HOME</RouterLink>
    </p>
    <p>
      <RouterLink to="/concerts">CONCERTS</RouterLink>
    </p>
    <p>
      <RouterLink to="/reservations">RESERVATIONS</RouterLink>
    </p>
    <p>
      <RouterLink to="/">
        <img src="@/assets/img/logo.png" alt="" width="55" height="57" />
      </RouterLink>
    </p>
    <p>
      <RouterLink to="/profile">MY PROFILE</RouterLink>
    </p>
    <p>
      <RouterLink to="/about">ABOUT</RouterLink>
    </p>
    <p>
      <RouterLink to="/login">LOG IN</RouterLink>
    </p>
  </nav>

  <RouterView />
</template>

