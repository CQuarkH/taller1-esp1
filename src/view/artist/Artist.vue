<script setup>
import NavBar from "../../components/NavBar.vue";
import Header from "../../components/Header.vue";
import { ref, onMounted } from 'vue';
import { useRoute } from "vue-router";
import artistsData from '../../assets/data/artists.json'; // Importa el JSON de la carpeta assets

const artist = ref({});
const route = useRoute();

onMounted(() => {
  const artistId = route.params.id;
  const selectedArtist = artistsData.find(artist => artist.id === parseInt(artistId));
  if (selectedArtist) {
    artist.value = selectedArtist;
  } else {
    console.error(`Artista con ID ${artistId} no encontrado.`);
  }
});

</script>


<template>
  <NavBar />


  <main>
    <section>
      <img class="wallpaper" src="../../assets/wallpaper-artist/beyonce.jpg" :alt="artist.name">
      <p id="artist-name"> {{ artist.name }}   </p>
      <button>
        <img class="icon" src="../../assets/icono-play.png"> Reproducir
      </button>
    </section>

    <div id="about-artist">
      <div>
        <img id="profile-pic" src="../../assets/profile-artist/beyonce.png" alt="">
      </div>
      <div id="info">
        <h2>Sobre {{ artist.name }} </h2>
        {{ artist.description }}
      </div>
    </div>


  </main>

</template>

<style scoped>
main {
  display: flex;
  flex-direction: column;
  height: 88vh;
  width: 77vw;
  margin-left: 22vw;
  overflow-y: auto;
}
.wallpaper{
  width: 100%;
  max-height: 475px;
  display:block;
}
section{
  position: relative;
}
section::before{
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5));
}

#artist-name{
  font-size: 4vw;
  font-weight: bold;
  color: white;
  position: absolute;
  top: 63%;
  right: 7%;
}
button{
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
#about-artist{
  background: linear-gradient(rgba(255, 255, 255, 0.2), rgba(0, 0, 0, 0.2));
  padding: 1.5vw;
  display: flex;
  border-radius: 10px;
}
#profile-pic {
  width: 26vw;
  height: 26vw;
  max-height: 200px;
  max-width: 200px;
  border-radius: 50%;
  overflow: hidden;
  margin: 10px;
  padding: 10px;
}
#info {
  margin: 10px;
  padding: 10px;
}

</style>