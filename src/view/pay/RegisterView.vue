<script setup>
import NavBar from '../../components/NavBar.vue';
import SelectCard from '../../components/SelectCard.vue';
import { ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const name = ref('');
const lastname = ref('');
const email = ref('');
const emailConfirm = ref('');
const password = ref('');
const passwordConfirm = ref('');

console.log(name);
function goToRegisterCard() {
  if (
    name.value === '' ||
    lastname.value === '' ||
    email.value === '' ||
    emailConfirm.value === '' ||
    password.value === '' ||
    passwordConfirm.value === ''
  ) {
    alert('Por favor, rellene todos los campos');
  } else {
    router.push('/pay/register/card');
  }
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
            <input
              v-model="name"
              type="text"
              name="name"
              placeholder="Nombre"
            />
            <input
              v-model="lastname"
              type="text"
              name="lastname"
              placeholder="Apellido"
            />
          </div>

          <div class="form__subcontainer">
            <input
              v-model="email"
              type="email"
              name="email"
              placeholder="Correo"
            />
            <input
              v-model="emailConfirm"
              type="email"
              name="email-confirm"
              placeholder="Confirmar correo"
            />
          </div>

          <div class="form__subcontainer">
            <input
              v-model="password"
              type="password"
              name="password"
              placeholder="contraseña"
            />
            <input
              v-model="passwordConfirm"
              type="password"
              name="password-confirm"
              placeholder="Confirmar contraseña"
            />
          </div>

          <button
            @click="goToRegisterCard()"
            class="avanzar--button"
            type="submit"
          >
            Guardar
          </button>
        </form>
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
  color: #f2f2f2;

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
