<script setup>
import { ref } from 'vue';
import NavBar from '../../components/NavBar.vue';
import SearchBar from '../../components/SearchBar.vue';
import TopSongs from '../../components/TopSongs.vue';
import songsData from '../../assets/data/songs.json';

const searchTerm = ref('');
const hasSearched = ref(false);
const filteredSongs = ref([]);

const handleSearch = (newSearchTerm) => {
  searchTerm.value = newSearchTerm;
  hasSearched.value = true;
  filterResults();
};

const filterResults = () => {
  if (searchTerm.value) {
    filteredSongs.value = songsData.filter(song =>
        song.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    filteredSongs.value = [];
  }
};

</script>

<template>

  <div class="general-container">

    <NavBar />

    <div class="search-header">
      <SearchBar @onSearch="handleSearch" :titulo=" 'Busqueda' " />
    </div>

    <section v-if="hasSearched" class="search-results">

      <div class="search-results__top-songs">
        <h2>Top Songs</h2>
        <TopSongs :songs="filteredSongs" />
      </div>

    </section>

    <h1> Prueba</h1>

  </div>

</template>

<style scoped>

.general-container {
  max-width: 1200px;
  padding: 20px;
  margin: 0 auto 0 28vw;
}

.search-header {
}

.search-results {
}

.search-results__top-songs
{
  margin-bottom: 20px;
}

.search-results h2 {
  margin-bottom: 15px;
}

</style>

