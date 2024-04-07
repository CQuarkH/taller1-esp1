<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AlbumCard',
  props: {
    album: {
      type: Object,
      required: true
    }
  }
});


</script>


<template>
  <div class="album__card">
    <img :src="album.imageUrl" />
    <div class="album__card-content">
      <h4> {{ album.name }}</h4>
      <p> {{ album.releaseDate }}</p>
    </div>

  </div>

</template>


<style scoped>
 album__card {
  display: flex;
  width: 210px;
  flex-direction: column;
  padding: 10px;
  border-radius: 8px;
}

.album__card img {
  width: 100%;
  height: 210px;
  object-fit: cover;
  aspect-ratio: square;
  border-radius: 8px;
}

.album__card-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding-top: 0.5rem;
}

.album__card-content h4,
p {
  margin: 0;
  padding-top: 0.1rem;
}

.album__card-content p {
  font-size: 1rem;
  color: #FFFFFF85;

}
</style>