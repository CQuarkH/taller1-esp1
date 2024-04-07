<script setup>
import { ref, computed, watch} from 'vue';
import { useRoute } from 'vue-router';
import NavBar from '../../components/NavBar.vue';
import SearchBar from '../../components/SearchBar.vue';
import TopSongs from '../../components/TopSongs.vue';
import songsData from '../../assets/data/songs.json';

const route = useRoute();
const searchTerm = ref('');
const hasSearched = ref(false);
const filteredSongs = ref([]);

const searchQuery = computed(() => route.query.search);

const filterResults = () => {
  if (searchTerm.value) {
    filteredSongs.value = songsData.filter(song =>
        song.name.toLowerCase().includes(searchTerm.value.toLowerCase())
    );
  } else {
    filteredSongs.value = [];
  }
};
const handleSearch = (newSearchTerm) => {
  searchTerm.value = newSearchTerm;
  hasSearched.value = true;
  filterResults();
};

watch(searchQuery, (newValue) => {
handleSearch(newValue);
}, { immediate: true });




</script>
<template>

  <NavBar />

  <main>
    <div class="general-container">

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
  </main>


</template>

<style scoped>

.general-container {
  margin-left: 22vw;
  height: 100%;
  width: 74vw;
  max-width: 1200px;
  padding: 20px;
}

.search-header {

  height: 100px;


}

.search-results {
}

.search-results__top-songs
{
  justify-content: center;
  width: 48.611vw;
  margin-bottom: 20px;
}

.search-results h2 {
  margin-bottom: 15px;
}

</style>

