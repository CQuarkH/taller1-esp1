<template>
  <div class="top-songs">


      <ul>
      <li v-for="song in songs" :key="song.id">

        <div class="song-container">

          <div class="song-icon-container">
            <img :src="song.imageUrl" alt="song icon">
          </div>

          <div class="song-name-container">
            <p> {{ song.name }} </p>
          </div>

          <div class="artist-name-container">
            <p> {{song.artist}} </p>
          </div>

          <div class="play-icon-container">
            <img src="https://ichca.ufal.br/pt-br/graduacao/filosofia/imagens-de-apoio/play_circle_fill0_wght400_grad0_opsz24.svg/@@images/ca091fd8-20b9-4018-8658-06c5803244cd.svg"
                 alt="play icon">
          </div>

          <div class="duration-container">
            <p> {{ song.duration }} </p>
          </div>
        </div>

      </li>
      </ul>

  </div>
</template>

<script>
export default {
  props: ['songs']
};
</script>

<style scoped>
.top-songs {
  color: white;
  background-color: rgba(255, 255, 255, 0.05);
}

.song-container {
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 20px;
}

.song-icon-container{
  display: flex;
  align-items: center;
  justify-content: center;
}

.song-icon-container img {
  width: 50px;
  height: 50px;
  border-radius: 20%;
  margin-right: 10px;

}

.song-name-container,
.artist-name-container,
.duration-container {
  flex-grow: 1;
  padding: 0 10px;
}


.song-name-container p,
.artist-name-container p,
.duration-container p {
  margin: 0;
  padding: 0;
}

.play-icon-container img {
  width: 50px;
  height: 50px;
  margin-left: auto;
}

.top-songs ul{
  list-style-type: none;
  padding: 0;
}
</style>
