<script setup>
import NavBar from '../../components/NavBar.vue';
</script>

<template>
  <NavBar />
  <main class="container">
    <article class="container__body"></article>
  </main>
</template>

<style>
.container {
  width: 100%;
  height: 100vh;
  max-width: 100vw;
  max-height: 100vh;

  display: flex;
  align-items: center;
  background: linear-gradient(
    180deg,
    rgba(65, 29, 86, 1) 0%,
    rgba(35, 14, 49, 1) 25%,
    rgba(15, 6, 21, 1) 50%,
    rgba(6, 2, 9, 1) 75%,
    rgba(0, 0, 0, 1) 100%
  );
}

.container__body {
  height: 97.2%;
  width: 77vw;
  margin-left: 22vw;

  display: grid;
  grid-template-rows: 2fr 1fr 2fr;
  align-items: center;
  justify-items: center;
  text-justify: auto;
}
</style>
