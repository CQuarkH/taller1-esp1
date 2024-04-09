<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ArtistCard',
    props: {
        artist: {
            type: Object,
            required: true
        }
    },
  methods: {
      goToArtist() {
        this.$router.push({ name: 'artist', params: { id: this.artist.id } })
      }
  }
});

</script>

<template>
    <div class="artist__card" @click="goToArtist">
        <img :src="artist.profile" alt="artist.name" />
        <div class="artist__card-content-container">
            <div class="artist__card-content">
                <h4> {{ artist.name }}</h4>
                <p> {{ artist.description }}</p>
            </div>
        </div>
    </div>
</template>



<style scoped>
.artist__card {
    display: flex;
    flex-direction: column;
    position: relative;
    width: 400px;
    height: 250px;
    border-radius: 8px;
}

.artist__card img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
}

.artist__card-content-container {
    display: flex;
    position: absolute;
    max-height: 30%;
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);
    width: 100%;
    bottom: 0;
    flex-direction: column;
    align-items: flex-start;
}

.artist__card-content {
    display: flex;
    flex-direction: column;
    text-align: left;
    padding: 0.5rem;
    color: white;
    overflow: hidden;
    text-overflow: ellipsis;
}

.artist__card-content h4,
p {
    margin: 0;
    padding-top: 0.5rem;
    text-overflow: ellipsis;
}

.artist__card-content p {
    font-size: 0.8rem;
    color: #FFFFFF85;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>