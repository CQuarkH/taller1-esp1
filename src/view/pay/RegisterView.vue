<script setup>
import NavBar from '../../components/NavBar.vue';
import SelectCard from '../../components/SelectCard.vue';
import { useRouter } from 'vue-router';

const router = useRouter();

function goToPremium() {
  router.push('/pay/card');
}
</script>

<template>
  <NavBar />
  <main class="container">
    <article class="container__body">
      <SelectCard />
      <section class="container__info">
        <form class="container--form" action="">
          <h2 class="form--title">Registro de usuario</h2>

          <div class="form__subcontainer">
            <input type="text" name="name" placeholder="Nombre" />
            <input type="text" name="lastname" placeholder="Apellido" />
          </div>

          <div class="form__subcontainer">
            <input type="email" name="email" placeholder="Correo" />
            <input
              type="email"
              name="email-confirm"
              placeholder="Confirmar correo"
            />
          </div>

          <div class="form__subcontainer">
            <input type="password" name="password" placeholder="contraseña" />
            <input
              type="password"
              name="password-confirm"
              placeholder="Confirmar contraseña"
            />
          </div>

          <button @click="goToPremium()" class="avanzar--button" type="submit">
            Guardar
          </button>
        </form>
      </section>
    </article>
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
  grid-template-rows: 1.2fr 2fr;
  gap: 3vh;

  align-items: center;
  justify-items: center;
  text-justify: auto;
}

.container__info {
  border-radius: 0.8vw;
  border: solid 2px rgb(217, 217, 217, 0.3);

  width: 100%;
  height: 100%;

  display: grid;
  align-items: center;
  justify-items: center;
}

.container--form {
  display: grid;
  grid-template-rows: auto;
  gap: 2vh;
  width: 90%;
  height: 95%;
  align-items: center;
  justify-items: center;
}

input {
  background: rgb(217, 217, 217, 0.3);
  font-style: none;
  border: none;
  margin: 0;
  padding: 0;

  width: 80%;
  height: 80%;
  border-radius: 0.5vw;
  text-indent: 0.8rem;
}

.form--title {
  font-size: 1.2rem;
}

.form__subcontainer {
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  justify-items: center;
}

button {
  font-style: none;
  border: none;
  background: none;
}

.avanzar--button {
  width: 20%;
  height: 55%;

  font-size: medium;
  border-radius: 0.5vw;
  font-weight: 600;
  background-color: #ffd440;
}
</style>
