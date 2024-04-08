<script>


    

</script>

<template>

    <div class="progress__content">
        <section class="progress__section">
            <h5 class="time__progress">1</h5>
            <input type="range" min="0" max="100" step="0.01" value="50%" class="music__progress">
            <h5 class="music__duration">2:00</h5>
        </section>
        <section class="music__controls">
                <div class="volume__button">
                    <img src="../../../src/assets/control-icons/volume.png" alt="" >
                    <input type="range"  class="volume__slider">
                </div>
                <div class="previous__song"><img src="../../../src/assets/control-icons/next.png" alt=""></div>
                <div class="toggle__pause"><img src="../../../src/assets/control-icons/play.png" alt=""></div>
                <div class="next__song"><img src="../../../src/assets/control-icons/next.png" alt=""></div>

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

        appearance: none;
        max-width: 72vw;
        width: 100%;
        height: .5vh;
        cursor: pointer;
        overflow: hidden;

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
