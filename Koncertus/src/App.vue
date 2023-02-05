<script setup>
import { RouterLink, RouterView } from "vue-router";
</script>

<template>
    <nav>
      <ul>
        <li>
          <RouterLink to="/concerts">CONCERTS</RouterLink>
        </li>
        <li>
          <RouterLink to="/profile">MY PROFILE</RouterLink>
        </li>
        <li>
          <RouterLink to="/">
            <img src="@/assets/img/Logo.svg" alt="" width="45" height="47" />
          </RouterLink>
        </li>
        <li>
          <RouterLink to="/about">ABOUT</RouterLink>
        </li>
        <li>
          <RouterLink to="/login">LOG IN</RouterLink>
        </li>
      </ul>
    </nav>


    <RouterView />
</template>
