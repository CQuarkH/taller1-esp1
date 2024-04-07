
<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'MusicCard',
        props: {
            song: {
                type: Object,
                required: true
            }
        }
    });

</script>

<template>
    <div class="music__content">
        <div class="music__card">
            <div class="song__name"><img src ="../../assets/img_banner.jpeg" alt="song.name" /><h4>nombre nombre  </h4></div>
            <h4 class="song__artista">artista artista</h4>
            <h4 class="song__album">album </h4>
            <h4 class="song_duracion">2:00</h4>
        </div>
    </div>
        
    


</template>

<style scoped>
    .song__name h4{
        word-spacing: 1px;
        justify-items: start;
        text-align: justify;
        overflow: hidden;
        max-height: 3vh;
    }

    .song__artista, .song__album{
        
        
        justify-items: start;
        text-align: justify;
        overflow: hidden;
        max-height: 3vh;
        
    }
    .music__card{
        padding-inline: 1vw;
        display: grid;
        align-items: center;
        grid-template-columns: 30% 30% 30% 10% ;
        justify-items: start;
        margin-bottom: 1.5vh;
        gap: 1vw;
    }
    .song__name{
        display: flex;
        gap: 1vw;
        align-items: center;
        
    }

    .song__name img{
        max-width: 50px;
        width: 100%;
        height: 50px;
        border-radius: .8vw;
        aspect-ratio: 1;        
    }

    .music__content:hover{
        
        border-radius: .8vw;
        background-color: rgba(255, 255, 255, 0.14);
        
        
    }
    

</style>
