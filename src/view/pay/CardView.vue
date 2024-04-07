<script setup>
import NavBar from '../../components/NavBar.vue';
import { useRouter } from 'vue-router';
import { ref, watch } from 'vue';

const router = useRouter();

const nameCard = ref('');
const lastCard = ref('');
const numberCard = ref('');
const cvvCard = ref('');
const dateCard = ref('');

watch([nameCard, lastCard, numberCard, cvvCard, dateCard], { deep: true });

function resetString(ref) {
  ref.value = ""
}

function goToHome() {
  router.push('/');
}
</script>

<template>
  <NavBar />
  <main class="container">
    <article class="container__card">
      <h1 class="title">Metodo de pago</h1>

      <section class="card">
        <div class="card__container">
          <div class="seccion seccion__top">
            <p>{{ nameCard }} {{ lastCard }}</p>
          </div>
          <div class="seccion seccion__mid">
            <p>{{ numberCard }}</p>
          </div>
          <div class="seccion seccion__button">
            <p>{{ cvvCard }}</p>
            <p>{{ dateCard }}</p>
          </div>
        </div>
      </section>

      <section class="form">
        <div class="form__div">
          <input class="form__input" type="text" placeholder="Nombre" v-model="nameCard" />
          <input class="form__input" type="text" placeholder="Apellido" v-model="lastCard" />
        </div>
        <input class="form__single" type="text" placeholder="Número de tarjeta" v-model="numberCard" />
        <div class="form__div">
          <input class="form__input" type="text" placeholder="CVV" v-model="cvvCard" />
          <input class="form__input" type="text" placeholder="Fecha de expiración" v-model="dateCard" />
        </div>
        <button @click="goToHome()" class="avanzar--button">Registrar</button>
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
}

.container__card {
  height: 97.2%;
  width: 77vw;
  margin-left: 22vw;

  display: grid;
  grid-template-rows: 0.3fr 2fr 2fr;
  align-items: center;
  justify-items: center;

  border-radius: 0.8vw;
  border: solid 2px rgb(217, 217, 217, 0.3);
}

.title {
  margin-top: 2vh;
}

.card {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.card__container {
  background-color: rgba(255, 255, 255, 0.3);
  width: 40%;
  height: 70%;
  border-radius: 0.7rem;

  display: grid;
  align-items: center;
  justify-items: center;
  grid-template-rows: 1fr 2fr 1fr;
}

.seccion {
  width: 90%;
  height: 100%;
}

.seccion__top {
  display: flex;
  align-items: center;
  justify-content: left;

  font-size: small;
  font-weight: 400;
}

.seccion__mid {
  display: flex;
  align-items: center;
  justify-content: center;
  letter-spacing: 0.3rem;
  font-size: 1.2rem;
  font-weight: 400;
}

.seccion__button {
  font-size: small;
  font-weight: 400;

  display: flex;
  align-items: center;
  justify-content: space-between;
}

.form {
  width: 100%;
  height: 100%;

  display: grid;
  grid-template-rows: 1fr 1fr 1fr 1fr;

  align-items: center;
  justify-items: center;
}

.form__div {
  width: 65%;
  height: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

.form__single {
  height: 50%;
  width: 58.5%;

  display: flex;
  align-items: center;
  justify-content: center;
}

input {
  background: rgb(217, 217, 217, 0.3);
  font-style: none;
  border: none;
  margin: 0;
  padding: 0;
  color: #f2f2f2;
  border-radius: 0.5vw;
  text-indent: 0.8rem;
}

.form__input {
  width: 40%;
  height: 50%;
}

button {
  font-style: none;
  border: none;
  background: none;
}

.avanzar--button {
  width: 20%;
  height: 45%;

  font-size: medium;
  border-radius: 0.5vw;
  font-weight: 600;
  background-color: #ffd440;
}
</style>
