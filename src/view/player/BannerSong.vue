
<script>
    import { defineComponent } from 'vue'

    export default defineComponent({
    name: 'BannerSong',
    props: {
            song: {
                type: Object,
                required: true
            }
    } 
    });

</script>

<template>
    <section class="banner__section">
        <img :src="song.imageUrl" alt="">
        <div class="banner__data">
            <h1 class="banner__title">{{ song.name }}</h1>
            <div class="banner__artist">
                <h3 class="artist">
                    {{ song.artist }}
                    <h3 class="banner__album">{{ song.albumID }}</h3>
                </h3>
            </div>

        </div>
        
    </section>
    
    
</template>

<style scoped>
    .banner__section{
        border-color: white;
        display: flex;
        align-items: flex-start;
        align-items: center;
        gap: 5vw;
        background-color: transparent;
        
        width: 98.5%;
        height: 35vh;
        
    
    }
    .banner__section img{
        max-width: 14vw;
        border-radius: 1vw;
        max-height: auto;
        width: 100%;
        aspect-ratio: 1;
    }


    .banner__title{
        font-size: clamp(5px, 40px, 3vw);
        display: flex;
        justify-content: left; 
        margin-top: 0;
        margin-bottom: 0;
    }

    .banner__artist{
        display: flex;
        gap: 1vw;
        font-size: clamp(5px, 15px, 20px);
    }
    .banner__album{
        color: #8A67B7;
        text-decoration: none;
    }

    .banner__artist h3{
        text-wrap: wrap;
    }

</style>