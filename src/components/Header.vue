<script>
import { defineComponent } from 'vue';
import SearchBar from './SearchBar.vue';

export default defineComponent({
  name: 'Header',
  components: {
    SearchBar,
  },
  props: {
    title: {
      type: String,
      required: true,
    },
    onSearch: {
      type: Function,
      required: false
    }
  },

});
</script>

<template>
  <header class="header">
    <h1>{{ title }}</h1>
  
    <div class="header__right">
      <SearchBar :onSearch="onSearch"/>
      
      <img src="../assets/profile-pic.png" />
    </div>
  </header>
</template>

<style scoped>
header {
    display: flex;
    height: 75px;
    margin-left: 22vw;
    width: 77vw;
    padding: 0.5rem 0 0.5rem 0;
    justify-content: space-between;
    align-items: center;
}

header img {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-left: auto;
}

.header__right {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding-right: 1rem;
}
</style>
