<script setup>
import PlayCard from './PlayCard.vue';

function changeView(router) {
  router.push({ path: router });
}
</script>

<template>
  <nav class="nav">
    <section class="nav__icon">
      <img class="nav__icon--ufro" src="../assets/icono-ufro-extendido.png" alt="" />
    </section>

    <section class="nav__option">
      <router-link to="/" class="nav__option--icon">
        <img class="icon" src="../assets/icono-casa.png" />Inicio
      </router-link>

      <router-link to="/searchresults" class="nav__option--icon">
        <img class="icon" src="../assets/icono-brujula.png" />Explorar
      </router-link>

      <router-link to="/player/play" class="nav__option--icon">
        <img class="icon" src="../assets/icono-libreria.png" />Reproducción
      </router-link>

      <router-link to="/pay/promotion" class="nav__option--icon">
        <img class="icon" src="../assets/icono-premium.png" />Premium
      </router-link>
    </section>

    <section class="nav__play">
      
    </section>
  </nav>
</template>

<style scoped>
.nav {
  width: 20vw;
  height: 97.5vh;

  position: absolute;
  left: 0.6vw;
  top: 1vh;

  display: grid;
  grid-template-rows: 1fr 2fr 1fr;
  gap: 1vh;

  border-radius: 0.8vw;
  border: solid 2px rgb(217, 217, 217, 0.3);
}

.nav__icon {
  width: 100%;
  height: 20vh;

  display: flex;
  justify-content: center;
  align-items: center;
}

.nav__icon--ufro {
  width: 80%;
  height: auto;
}

.nav__option {
  margin-left: 5%;
  padding-bottom: 5%;
  width: 90%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  gap: 1vh;

  justify-content: center;
  align-items: center;

  border-bottom: 0.3rem solid rgba(255, 255, 255, 0.76);
}

.nav__option--icon {
  margin-left: 10%;
  width: 80%;
  height: 40vh;

  display: flex;
  grid-template-columns: 1fr 1fr;
  align-items: center;

  color: #fff;
  text-decoration: none;
  font-weight: 600;
  font-size: large;
}

.icon {
  width: 12%;
  height: auto;
  margin-right: 10%;
}

.nav__play {
  width: 100%;
  height: 65%;

  display: flex;
  align-items: center;
  justify-items: center;
}
</style>
