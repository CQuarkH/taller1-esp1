<script setup>
import NavBar from "../../components/NavBar.vue";
import AlbumCard from "../../components/AlbumCard.vue";
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import artistsData from '../../assets/data/artists.json';
import albumsData from '../../assets/data/albums.json';
import songsData from '../../assets/data/songs.json';
import SongCard from "../player/SongCard.vue";

const artist = ref({});
const filteredAlbums = ref({});
const filteredSongs = ref({});
const route = useRoute();

onMounted(() => {
  const artistId = parseInt(route.params.id);
  artist.value = artistsData.find(artist => artist.id === artistId);
  if (!artist.value) {
    console.error(`Artista con ID ${artistId} no encontrado.`);
    return;
  }
  filteredAlbums.value = albumsData.filter(album => album.artistID === artist.value.id);
  filteredSongs.value = songsData.filter(song => song.artist === artist.value.name);
});

</script>


<template>
  <NavBar />

  <body class="container-body">
    <main>
      <section>
        <div id="wallpaper-container">
          <img id="wallpaper-pic" :src="artist.wallpaper" :alt="wallpaper">
        </div>
        <p id="artist-name"> {{ artist.name }} </p>
        <button>
          <img class="icon" src="../../assets/icono-play.png" alt=""> Reproducir
        </button>
      </section>

      <div class="section">
        <h2 class="section-title">Canciones más escuchadas</h2>
        <div id="list-songs">
          <SongCard v-for="song in filteredSongs" :key="song.id" :song="song"/>
        </div>
      </div>

      <div class="section">
        <h2 class="section-title">Álbumes</h2>
        <div id="list-albums">
          <AlbumCard v-for="album in filteredAlbums" :key="album.id" :album="album"></AlbumCard>
        </div>
      </div>


      <div class="section" id="about-artist">
        <div id="profile-container">
          <img id="profile-pic" :src="artist.profile" alt="">
        </div>
        <div id="info">
          <h2>Sobre {{ artist.name }} </h2><br>
          {{ artist.description }}
        </div>
      </div>


    </main>

  </body>


</template>

<style scoped>
.section-title {
  text-align: left;
}

.container-body {
  width: 100%;
  height: 100%;
  max-width: 100vw;
  max-height: 100vh;
  display: flex;
  align-items: center;

}

main {
  display: flex;
  flex-direction: column;
  height: 97vh;
  width: 77.5vw;
  margin-left: 22vw;
  overflow-y: auto;
}

#wallpaper-container {
  width: 100%;
  max-height: 470px;
  overflow: hidden;
}

#wallpaper-pic {
  width: 100%;
  height: auto;
}

section {
  position: relative;
}

.section {
  margin-top: 3vw;
}

section::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

#artist-name {
  font-size: 4vw;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 70%;
  right: 7%;
}

button {
  font-size: 1.5vw;
  font-weight: 600;
  color: white;
  position: absolute;
  top: 94%;
  left: 10%;
  background-color: rgba(255, 212, 64, 1);
  border-radius: 100vw;
  height: 3vw;
  display: inline-flex;
  padding: 1.5vw;
  align-items: center;
}

.icon {
  max-height: 2vw;
  margin-right: 5%;
}

#list-songs {
  overflow-y: auto;
}

#list-albums {
  display: grid;
  width: 100%;
  height: 100%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}

#about-artist {
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
  padding: 1.5vw;
  display: flex;
  border-radius: 10px;
}

#profile-container {
  display: inline-block;
  position: relative;
  width: 26vw;
  height: 26vw;
  max-height: 200px;
  max-width: 200px;
  overflow: hidden;
  border-radius: 50%;
  margin: 10px;
}

#profile-pic {
  width: auto;
  height: 100%;
}

#info {
  flex: 1;
  padding: 10px;
}
</style>