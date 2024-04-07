
<script setup>
import { ref } from 'vue';
import NavBar from '../../components/NavBar.vue';
import Header from '../../components/Header.vue';
import songsData from '../../assets/data/songs.json';
import MusicCard from '../../components/MusicCard.vue';

const allSongs = ref(songsData);
const filteredSongs = ref(songsData);

const handleSearch = (newSearchTerm) => {
  filterResults(newSearchTerm);
};


const filterResults = (searchTerm) => {
  if (searchTerm.length > 0) {
    filteredSongs.value = songsData.filter(song =>
        song.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  } else {
    filteredSongs.value = allSongs.value;
  }
};


</script>
<template>

  <NavBar />
  <Header title="Buscar Musica" :onSearch= "handleSearch"/>

  <main>
    <section v-if="filteredSongs.length > 0" class="search__results">
      <h4>Top Songs</h4>
      <div class="search__results-grid">
        <MusicCard 
        v-for="song in filteredSongs"
        :song="song" :key="song.id"/>
      </div>

      </section>

  </main>


</template>

<style scoped>


main {
  display: flex;
  flex-direction: column;
  height: 98vh;
  width: 77vw;
  margin-left: 22vw;
  overflow-y: auto;
}

.search__results{
  display: flex;
  flex-direction: column;
  gap: 1rem;
  text-align: left;
}

.search__results h4{
  
  margin-left: 0.5rem;

}

.search__results-grid {

  display: grid;
  width: 100%;
  height: 100%;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
}

</style>

