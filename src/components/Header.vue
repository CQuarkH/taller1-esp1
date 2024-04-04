<script>
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'Header',
    props: {
        title: {
            type: String,
            required: true
        }
    }
});

</script>

<template>
    <header class="header">
        <h1>{{ title }}</h1>

        <div class="header__right">
            Esteban, pon tu componente aqui
            <img src="../assets/profile-pic.png" />
        </div>
    </header>
</template>

<style scoped>
header {
    display: flex;
    height: 75px;
    margin-left: 22vw;
    width: 78vw;
    padding: 0.5rem 0 0.5rem 0;
    justify-content: space-between;
}

header img {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: auto;
}

.header__right {
    display: flex;
    align-items: center;
    gap: 1rem;
    padding-right: 1rem;
}
</style>