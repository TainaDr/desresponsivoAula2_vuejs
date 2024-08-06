<template>
       <header></header>
      <H1>Imagens | Desenvolvimento Responsivo - Aula 1</H1>
      <h3>Tainá Dreissig | IIW2022B</h3>
      <footer></footer>
      <div>
            <router-link style="margin-left: 0px;" to="/imagens">Imagens</router-link>
            <router-link style="margin-left: 10px;" to="/video">Video</router-link>
            <router-link style="margin-left: 10px;" to="/tabela">Tabela</router-link>
            <router-view />
      </div>

     
</template>

<script>
export default {
      name: 'MenuPrincipal'
}
</script>

<style>
div {
      text-align: center;
}

H1,
h3 {
      text-align: center;
      font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}


header, footer {
      background-color: rgb(0, 38, 76);
      height: 20px;
      margin: 0;
}
</style>