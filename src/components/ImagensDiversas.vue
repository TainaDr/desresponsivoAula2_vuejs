<template>
      <div id="imagemGrande">
            <img src="@/assets/pexels-eberhard-grossgasteiger-691668 (1).jpg" alt="Imagem 1" width="100%">
      </div>
      <br>
      <article class="flexbox">
            <img src="@/assets/pexels-mohamed-almari-1485894.jpg" alt="Imagem 2" width="410" height="300">
            <img src="@/assets/pexels-pok-rie-2049422.jpg" alt="Imagem 3" width="410" height="300">
            <img src="@/assets/images (9).jpeg" alt="Imagem 3" width="410" height="300">
      </article>
      <br>
</template>

<style>
#imagemGrande {
      display: flex;
      flex-wrap: nowrap;
      justify-content: center;
}


.flexbox {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      align-items: center;
}
</style>