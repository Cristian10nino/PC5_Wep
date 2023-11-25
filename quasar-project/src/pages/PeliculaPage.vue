<template>
  - <div class="pelicula-page">

      <div class="pelicula-list q-mr-md">
          <ListaPelicula :generoIdSelected="0" />
      </div>
  </div>
</template>

<style>
.pelicula-page {
  display: flex;
  justify-content: space-between;
}



.pelicula-list {
  width: 75%;
}
</style>

<script>

import ListaPelicula from 'src/components/Peliculas/ListaPelicula.vue';

export default {
  name: "PeliculaPage",
  components: {

      ListaPelicula
  }
}

</script>
