<template>

  <div class="general-container">

    <div class="tittle-container"> {{titulo}} </div>

    <div class="search-container">
      <input
          type="text"
          v-model="searchQuery"
          @input="onSearch"
          class="search-input"
          placeholder="Buscar canciones, artistas..."
      >
    </div>

  </div>

</template>

<style scoped>
.tittle-container{
}

.general-container{
  display: flex;
}

.search-container {
  display: flex;
  align-items: center;
  background: #5E4B8B;
  border-radius: 20px;
  padding: 5px 15px;
  margin-left: 20%;
}

.search-input {
  flex: 1;
  background: transparent;
  border: none;
  color: white;
  padding: 10px 0;
  margin-left: 10px;
}

.search-input::placeholder {
  color: rgba(255, 255, 255, 0.7);
}

.search-input:focus {
  outline: none;
}
</style>

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
    onSearch() {
      this.$emit('onSearch', this.searchQuery);
    }
  },
  props: {
    titulo: {
      type: String,
      defaul: 'Inserte Titulo'
    }
  }
});
</script>

