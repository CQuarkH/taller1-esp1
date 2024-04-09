<script setup>
import NavBar from '../../components/NavBar.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToPremium() {
  router.push('/pay/register');
}
</script>

<template>
  <NavBar />
  <main class="container">
    <article class="container__body">
      <div class="img">
        <img
          class="container__body--logo"
          src="../../assets/icono-ufro-compacto.png"
          alt="Logo UFRO"
        />
      </div>

      <section class="informacion">
        <h1 class="container__body--titulo">
          Obtén UFRO music Premium y escucha música sin anuncios, sin conexión y
          sin limites
        </h1>
        <h2 class="container__body--subtitulo">
          1 mes de prueba gratuita • Luego, CLP 4,550⁠/⁠ al mes
        </h2>
      </section>

      <section class="container__avanzar">
        <div class="container__avanzar--button">
          <button @click="goToPremium()" class="avanzar--button">
            Obtén premium
          </button>
        </div>
        <div class="container__avanzar--text">
          <small class="info__small">
            Te enviaremos un recordatorio 7 días antes de que termine la prueba.
            Facturación recurrente. Se aplican restricciones.
          </small>
        </div>
      </section>
    </article>
  </main>
</template>

<style scoped>
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

.img {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container__body--logo {
  width: 20%;
  height: auto;
}

.informacion {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 3fr 1fr;
}

.container__body--titulo {
  height: 100%;
  width: 70%;

  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 2.5vw;
}

.container__body--subtitulo {
  height: 100%;
  width: 75%;

  font-size: small;
  font-weight: 500;
  font-style: italic;
}

.container__avanzar {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 1fr;
  place-content: center;
}

.container__avanzar--button {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: end;
  justify-content: center;
}

button {
  font-style: none;
  border: none;
  background: none;
}

.avanzar--button {
  width: 45%;
  height: 55%;

  font-size: medium;
  border-radius: 1vw;
  font-weight: 600;
  background-color: #ffd440;
}

.container__avanzar--text {
  display: flex;
  align-items: start;
  justify-content: center;
}

.info__small {
  margin-top: 1vh;
  font-size: xx-small;
  width: 50%;
}
</style>
