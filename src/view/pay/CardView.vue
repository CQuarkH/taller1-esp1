<script setup>
import NavBar from '../../components/NavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToHome() {
  router.push('/pay/register/card');
}
</script>

<template>
  <NavBar />
  <main class="container"></main>
</template>

<style scoped>
.container {
  height: 97.2%;
  width: 77vw;
  margin-left: 22vw;

  display: grid;
  grid-template-rows: 1.2fr 2fr;
  gap: 3vh;

  align-items: center;
  justify-items: center;
  text-justify: auto;
  border: 2px #f2f2f2;
}
</style>
