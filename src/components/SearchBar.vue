<template>

  <div class="general-container-SearchBar">

    <h2 class="tittle-container"> {{titulo}} </h2>


    <div class="search-icon-container">

      <div class="search-container">
        <input
            type="text"
            v-model="searchQuery"
            @keyup.enter="onSearch"
            class="search-input"
            placeholder="Buscar canciones, artistas..."
        >
      </div>

      <div class="icon-container">

        <img src="../assets/profile-pic.png" alt="profile pic" />

      </div>
    </div>

  </div>

</template>

<style scoped>

.icon-container img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: 20px;
  margin-right: auto;
}

.search-icon-container{
  display: flex;
  align-items: center;
  justify-content: flex-end;
  flex-grow: 1;
  padding-left: 15px;
}

.tittle-container{
  text-align: left ;

}

.general-container-SearchBar{
  display: flex;
  height: 100%;
  width: 74vw;
  max-height: 100%;
  justify-content: space-between;
  align-items: center;
}

.search-container {
  display: flex;
  align-items: center;
  background: #5E4B8B;
  border-radius: 10px;
  padding: 5px 15px;
  height: 4.8vh;
  max-height: 100%;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  padding: 5px 0;
  margin-left: 5px;
  font-size: 15px;
}

.search-input::placeholder {
  color: rgba(251, 251, 251, 0.6)
}

.search-input:focus {
  outline: none;
}
</style>

<script>
import { defineComponent, ref } from 'vue';
import { useRouter } from 'vue-router';

export default defineComponent({
  name: 'SearchBar',
  setup() {
    const searchQuery = ref('');
    const router = useRouter();

    function onSearch() {
      console.log('Redirigiendo con el término de búsqueda:', searchQuery.value);
      router.push({ name: 'Searchresults', query: { search: searchQuery.value } });
    }

    return {
      searchQuery,
      onSearch
    };
  },
  props: {
    titulo: {
      type: String,
      default: 'Inserte Título'
    }
  }
});
</script>

