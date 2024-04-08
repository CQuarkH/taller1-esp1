<script>
    import songs from '../../assets/data/songs.json'

    export default{
        
        name: 'progress__content',
        data () {
            return {
                current: [],
                index : 0,
                isPlaying: false,
                songList : songs,
                player: new Audio(),
                volume: 0.5
            }
        },
        songList : songs,
        created(){
            this.current = this.songList[this.index]
            this.player.src = this.current.src;
            
        },
        methods:{
            setVolume(){
                name : 'volume__button';
                this.player.volume = this.volume_input.value/100;
            },

            play(song){
                this.player.src = "/src/assets/songs/Pray You Catch Me.mp3";
                this.current = this.songList[this.index]
                
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
                
                if (!this.isPlaying){
                    this.player.play();
                    this.isPlaying = true;

                }else{
                    this.player.pause();
                    this.isPlaying = false;

                }
            }
        },
        pause(){
            this.player.pause();
            this.isPlaying = false;
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
        }
        


    }
    
    

</script>

<template>

    <div class="progress__content">
        <section class="progress__section">
            <h5 class="time__progress">1</h5>
            <input type="range" min="0" max="100" step="0.01" value="50%" class="music__progress">
            
            <h5 class="music__duration">1.11</h5>
        </section>
        <section class="music__controls">
                <div class="volume__button">
                    <img src="../../../src/assets/control-icons/volume.png" alt="" >
                    <input type="range" max="100" class="volume__slider" v-model="volume_input">
                </div>
                <button class="previous__song" @click="prev" ><img src="../../../src/assets/control-icons/next.png" alt=""></button>
                <button class="toggle__pause" @click="play" ><img src="../../../src/assets/control-icons/play.png" alt=""></button>
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
        margin-right: 19vw;
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
