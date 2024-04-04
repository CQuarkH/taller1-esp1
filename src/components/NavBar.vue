<script setup></script>

<template>
  <nav class="nav">
    <section class="nav__icon">
      <img class="nav__icon--ufro" src="../assets/icono-ufro-extendido.png" alt="" />
    </section>

    <section class="nav__option">
      <a href="" class="nav__option--icon">
        <img class="icon" src="../assets/icono-casa.png" />Inicio
      </a>

      <a href="" class="nav__option--icon">
        <img class="icon" src="../assets/icono-brujula.png" />Explorar
      </a>

      <a href="" class="nav__option--icon">
        <img class="icon" src="../assets/icono-libreria.png" />Biblioteca
      </a>

      <a href="" class="nav__option--icon">
        <img class="icon" src="../assets/icono-premium.png" />Premium
      </a>
    </section>

    <section class="nav__play"></section>
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
  grid-template-rows: 1fr 4fr 1fr;
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
  width: 100%;
  height: 40vh;

  display: flex;
  flex-direction: column;
  gap: 1vh;

  justify-content: center;
  align-items: center;
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
</style>
