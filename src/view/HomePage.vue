<script setup>
import NavBar from '../components/NavBar.vue';
import songs from '../assets/data/songs.json';
import artists from '../assets/data/artists.json';
import MusicCard from '../components/MusicCard.vue';
import ArtistCard from '../components/ArtistCard.vue';
import Header from '../components/Header.vue';
</script>

<template>
  <NavBar />
  <Header title="Inicio"/>

  <main>

    <section class="home__explore-container">
      <div class="home__explore-title">
        <p>Descubre nueva música, estilos y artistas.</p>
      </div>

      <section class="home__artist-list">
        <ArtistCard
          v-for="artist in artists"
          :key="artist.id"
          :artist="artist"
        />
      </section>
    </section>

    <section class="home__music-container">
      <h3>
        Lo nuevo
        <svg
          class="chevron"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 64 64"
          aria-hidden="true"
        >
          <path
            d="M19.817 61.863c1.48 0 2.672-.515 3.702-1.546l24.243-23.63c1.352-1.385 1.996-2.737 2.028-4.443 0-1.674-.644-3.09-2.028-4.443L23.519 4.138c-1.03-.998-2.253-1.513-3.702-1.513-2.994 0-5.409 2.382-5.409 5.344 0 1.481.612 2.833 1.739 3.96l20.99 20.347-20.99 20.283c-1.127 1.126-1.739 2.478-1.739 3.96 0 2.93 2.415 5.344 5.409 5.344Z"
          ></path>
        </svg>
      </h3>

      <div class="home__music-grid">
        <MusicCard v-for="song in songs" :key="song.id" :song="song" />
      </div>
    </section>
  </main>
</template>

<style scoped>
svg {
  width: 1rem;
  height: 1rem;
  fill: white;
}

main {
  display: flex;
  flex-direction: column;
  height: 86%;
  max-height: 88%;
  width: 77vw;
  margin-left: 22vw;
  overflow-y: auto;
}

.home__explore-container {
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 1rem;
}

.home__explore-title {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0;
  text-align: left;
}

.home__explore-title h1 {
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0;
}

.home__explore-title p {
  font-size: 1rem;
  font-weight: 400;
  margin-left: 10px;
}

.home__music-container {
  display: flex;
  flex-direction: column;
  max-height: 100%;
  gap: 1rem;
  text-align: left;
}

.home__music-container h3 {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.home__music-grid {
  display: grid;
  width: 100%;
  max-height: 100%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}

.home__artist-list {
  display: flex;
  padding-right: 1rem;
  gap: 1rem;
}
</style>
