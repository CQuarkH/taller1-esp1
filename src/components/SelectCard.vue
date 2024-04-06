<script setup></script>

<template>
  <section class="container__plan">
    <h1 class="title__plan">Seleccione un plan</h1>
    <div class="container__plan--card">
      <div class="card">
        <h2 class="card__title">Individual</h2>
        <div class="container__info--card">
          <small class="card__tempo">Mensual</small>
          <p class="card__price">CLP $4.500/mes</p>
          <small class="card__extra">1 mes gratis</small>
          <button class="card__Button">seleccionar</button>
        </div>
      </div>

      <div class="card">
        <h2 class="card__title">Individual</h2>
        <div class="container__info--card">
          <small class="card__tempo">Mensual</small>
          <p class="card__price">CLP $4.500/mes</p>
          <small class="card__extra">1 mes gratis</small>
          <button class="card__Button">seleccionar</button>
        </div>
      </div>

      <div class="card">
        <h2 class="card__title">Individual</h2>
        <div class="container__info--card">
          <small class="card__tempo">Mensual</small>
          <p class="card__price">CLP $4.500/mes</p>
          <small class="card__extra">1 mes gratis</small>
          <button class="card__Button">seleccionar</button>
        </div>
      </div>
    </div>
  </section>
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

.container__info,
.container__plan {
  border-radius: 0.8vw;
  border: solid 2px rgb(217, 217, 217, 0.3);

  width: 100%;
  height: 100%;
}

.container__plan {
  display: grid;
  grid-template-rows: 1fr 4fr;
  width: 100%;
  height: 100%;
}

.title__plan {
  display: grid;
  justify-items: center;
  align-items: center;
  font-size: 1.2rem;
  width: 100%;
  height: 100%;
}

.container__plan--card {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  justify-items: center;
  align-items: center;
}

.card {
  width: 70%;
  height: 85%;
  border-radius: 0.8vw;
  border: solid 2px rgb(217, 217, 217, 0.3);
  text-align: start;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.card__title {
  text-align: center;
  font-size: 0.8rem;
  font-weight: 700;
  margin-top: 1vh;
  padding-bottom: 1vh;
  border-bottom: solid 0.7vh rgba(255, 255, 255, 0.9);
  width: 80%;
}

.card__tempo {
  text-align: start;
  font-weight: 500;
  color: rgb(177, 177, 177);
}

.card__extra {
  font-weight: 400;
  font-style: italic;
}

.container__info--card {
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
}

.card__tempo,
.card__extra,
.card__price {
  padding: 0;
  margin: 0;
}

.card__Button {
  margin-top: 2vh;
  font-size: medium;
  border-radius: 0.5vw;
  height: 3.5vh;
  font-weight: 500;
  background-color: #ffd440;
}

button {
  font-style: none;
  border: none;
  background: none;
}
</style>
