<script setup>

</script>

<template>
    <article class="container">
        <img class="img" src="/src/assets/img_banner.jpeg" alt="song.name" />
        <progress id="file" max="100" value="70"></progress>
    </article>
</template>

<style scoped>
.container {
    width: 100%;
    height: 100%;
    margin-top: 10%;
    
    display: flex;
    align-items: center;
    flex-direction: column;
}

.img {
    width: auto;
    height: 90%;
    aspect-ratio: 1;
    margin-bottom: 1vh;
}

.playoptions {
    width: 100%;
    height: 100%;

    display: flex;
    justify-content: center;
    align-items: center;

}

.bar {
    width: 80%;
    height: 10%;
}

.playimg {
    width: auto;
    height: 20%;
    margin: 2%
}
</style>