<template>
    <OutroComponente />
    <br>
    <ImagensDiversas />
    <br>
    <VideoUnico />
    <br>
    <TabelaDiversos />
    <footer></footer>
</template>
<script>

import OutroComponente from './OutroComponente.vue'
import ImagensDiversas from './ImagensDiversas.vue'
import VideoUnico from './VideoUnico.vue'
import TabelaDiversos from './TabelaDiversos.vue'

export default {
    name: 'PaginaPrincipal',
    components: {
        ImagensDiversas, VideoUnico, OutroComponente, TabelaDiversos
    }
}

</script>

<style>
body {
    background-color: rgb(255, 255, 255);
}

footer {
    background-color: rgb(0, 38, 76);
    height: 20px;
    margin: 0;
}
</style>