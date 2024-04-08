<script setup>
import NavBar from '../../components/NavBar.vue';
import BannerSong from './BannerSong.vue';
import songs from '../../assets/data/songs.json';
import SongCard  from './SongCard.vue';
import SongProgress from '../player/SongProgress.vue';



</script>


<template>
  
  <NavBar />
  <main>
    <img src="../../assets/img_banner.jpeg" class="img__fondo" >
    <div class="content">
      <BannerSong />
      <div class="nav__menu">
        <h4>Cancion</h4>
        <h4>Artista</h4>
        <h4>Álbum</h4>
        <h4>Duración</h4>
      </div>
      <section class="song__section">

        <SongCard />
        <SongCard />
        

        

      </section>
      
      <SongProgress />
     

      
      
      
    </div>
    


  </main>
 
</template>

<style scoped>

  main {
    margin-top: 1vh;
    display: flex;
    flex-direction: column;
    width: 78.2vw;
    margin-left: 21.2vw;
    overflow-y: auto;
    height: 97.5vh;
    border: solid 2px rgb(217, 217, 217, 0.3);
    border-radius: 0.8vw;
}



.content{
  z-index: 2;
  display: flex;
  width: auto;
  flex-direction: column;
  height: 100%;
  padding: 0vh 3vw 0 3vw; 

}

.img__fondo{
  position: absolute;
  z-index: 1;
  max-width: 67vw;
  width: 100%;
  height: 80vh;
  left: 25vw;
  top: 5vh;
  opacity: 10%;
  filter: blur(2vw);
  border-radius: 3vw;
}

.nav__menu{
    display: grid;
    padding-inline: 1vw;
    justify-items: start;
    grid-template-columns: 31.5% 31.5% 30% auto ;
    margin-right: .5vw;
    margin-bottom: 2vh;
}

.song__section{
  height: 38vh;
  
  overflow-y: auto;
}
::-webkit-scrollbar{
  width: .5vw;
 
}


</style>
