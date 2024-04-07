<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'SearchBar',
  data() {
    return {
      searchQuery: ''
    };
  },
  methods: {
    handleSearch() {
      if (this.onSearch) {
        this.onSearch(this.searchQuery);
      }
    }, 

    handleNavigate() {
      if (this.$route.path !== '/searchResults') {
        this.$router.push('/searchResults');
      }

    }
  },

  props: {
    onSearch: {
      type: Function,
      required: false
    }
  }

});
</script>

<template>
    <div class="search-icon-container">

      <div class="search-container">
        <input
            type="text"
            v-model="searchQuery"
            @click="handleNavigate"
            @input="handleSearch"
            class="search-input"
            placeholder="Buscar canciones, artistas..."
        >
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