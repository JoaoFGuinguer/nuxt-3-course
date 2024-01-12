<script setup>
const user = useUser()
</script>
<template>
    <nav>
      <NuxtLink to="/">home    </NuxtLink>
      <NuxtLink to="/movies">movies</NuxtLink>
      <NuxtLink to="https://vueschool.io">Vue School</NuxtLink>
      <NuxtLink v-if="!user.isLoggedIn" to="/login">Login</NuxtLink>
      <a 
        href="#" 
        v-if="user.isLoggedIn" 
        @click.prevent="user.isLoggedIn = false"
      >Loggout</a>
      teste
    </nav>
    <slot></slot>
</template>