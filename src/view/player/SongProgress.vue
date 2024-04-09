<script>
    import songs from '../../assets/data/songs.json'
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: "SongProgress",
        props: {
            song: {
                type: Object,
                required: true
            }
        },
        data () {
            let index = 0;
            let durationSong = this.song.duration;
         
            
            

            return {
                
                index,
                progress : "00:00",
                durationSong,
                isPlaying: false,
                player: new Audio(),
                volume: 0.5
            }
        },
        
        created(){
                
                this.player.addEventListener('timeupdate', this.refreshTime);
                this.player.addEventListener('timeupdate', this.refreshProgress);
            
    
            

            
        },
        mounted() {

                this.configureAudioPlayer()

        },
        methods:{
            configureAudioPlayer() {
                this.player.src = this.song.songUrl;
                this.player.addEventListener('timeupdate', this.refreshTime);
                this.player.addEventListener('timeupdate', this.refreshProgress);
                
              
                this.durationSong = this.song.duration;
            },
            refreshProgress(){
                console.log(this.player.paused)
                console.log(this.player.currentTime);
                let progress = this.player.currentTime
                
                
                let linea_temporal = document.querySelector('.music__progress');
                let seekPosition = progress * (100 / this.player.duration);
                
                linea_temporal.value = seekPosition;
            
            },
            refreshTime(){
                let segundos = this.player.currentTime;
                let minutos = Math.floor(segundos / 60);
                let segundosRestantes = Math.floor(segundos % 60);

                
                minutos = (minutos < 10) ? "0" + minutos : minutos;
                segundosRestantes = (segundosRestantes < 10) ? "0" + segundosRestantes : segundosRestantes;
                
                
                this.progress = minutos + ":" + segundosRestantes;
                console.log("time: "+ this.progress);
                
            
            },    
            setVolume(){
                let volumeButton = document.querySelector('.volume__slider');
                this.player.volume = (volumeButton.value / 100);
                console.log(this.player.volume)
            },

            play(song){

                
                if (typeof song.src != "undefined"){
                    this.current = song;
                    this.player.src = this.src;
                }
                
                this.player.addEventListener('ended',function (){
                    this.index++;
                    if (this.index > this.songs.length - 1) {
                        this.index = 0;
                    }
                    this.current = this.songList[this.index];
                    this.play(this.current);
                })
                
                if (!this.isPlaying || this.player.paused){

                    this.player.play();
                    this.isPlaying = true;

                }else{
                    this.player.pause();
                    this.isPlaying = false;

                }
            },
        
        next(){
            this.index++;
            if (this.index > this.songList.length - 1){
                this.index = 0;
            }

            this.current = this.songs[this.index];
            this.play(this.current);

        },

        prev() {
            this.index--;
            if (this.index < 0){
                this.index = this.songList.length - 1;
            }

            this.current = this.songs[this.index];
            this.play(this.current);
        },

        progressBar(){
            let linea_temporal = document.querySelector('.music__progress');
            let seekto = this.player.duration * (linea_temporal.value / 100);
            console.log("seekto: "+seekto)
            this.player.currentTime = seekto;
            
           
        }
    }
        


    })
    
    

</script>

<template>

    <div class="progress__content">
        <section class="progress__section">
            <h5 class="time__progress">{{  progress }}</h5>
            <input type="range" @input="progressBar" min="0" max="100" step="0.000001" value="0" class="music__progress">
            <audio :src="this.ruta" hidden></audio>
            <h5 class="music__duration">{{durationSong}}</h5>
        </section>
        <section class="music__controls">
                <div class="volume__button">
                    <img src="../../../src/assets/control-icons/volume.png" alt="" >
                    <input type="range" @input="setVolume" max="100" class="volume__slider" v-model="volume_input">
                </div>
                <button class="previous__song" @click="prev" ><img src="../../../src/assets/control-icons/next.png" alt=""></button>
                <button class="toggle__pause" @click="play" v-if="!isPlaying" ><img src="../../../src/assets/control-icons/play.png" alt=""></button>
                <button class="toggle__pause" @click="play" v-if="isPlaying" ><img src="../../../src/assets/control-icons/pause.png" alt=""></button>

                <button class="next__song" @click="next" ><img src="../../../src/assets/control-icons/next.png" alt=""></button>

        </section>
    </div>


</template>

<style scoped>


    .progress__section{
        display: flex;
        gap: 1vw;
        align-items: center;
    }
    .music__progress{
        border-radius: 1vh;
        appearance: none;
        max-width: 72vw;
        width: 100%;
        height: .5vh;
        cursor: pointer;
        overflow: hidden;

    }
        
    .music__progress:hover{
        height: .8vh;
        border-radius: 1vh;
    }
        
    .music__progress::-webkit-slider-thumb {
        appearance: none;
        width: .5vw;
        height: .5vh;
        background-color: #7333A5;
        box-shadow: -40vw 0 0px 40vw #7333A5;
    }

    .music__controls{
        display: flex;
        align-content: center;
        
    }

    .volume__button{
        gap: 1vw;
        margin-right: 17.3vw;
        display: flex;
        align-content: center;
        align-items: center;
        
    }

    .volume__button input{
        
        appearance: none;
        cursor: pointer;
        width: 8vw;
        height: 1vh;
        border-radius: 1vw;
        background-color: #7333A5;
        
        
    }

    .volume__button input::-webkit-slider-thumb{
        color: white;
        background: white;
        
        
    }


    .volume__button img,.previous__song img, .toggle__pause img, .next__song img{
        
        aspect-ratio: 1;
        filter: invert();
        width: 1.5vw;
        height: auto;
        cursor: pointer;
       
        
    }
    .toggle__pause{
        margin-inline: 4vw;
    }

    .previous__song img{
        transform: rotate(180deg);
    }
    

    
</style>
