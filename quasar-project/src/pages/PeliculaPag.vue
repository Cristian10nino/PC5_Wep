<template>
  - <div class="product-page">

      <div class="product-list q-mr-md">
          <ListaPelicula :generoIdSelected="0" />
      </div>
  </div>
</template>

<style>
.product-page {
  display: flex;
  justify-content: space-between;
}



.product-list {
  width: 75%;
}
</style>

<script>


import ListaPelicula from 'src/components/Pelicula/ListaPelicula.vue'

export default {
  name: "PeliculaPage",
  components: {

    ListaPelicula
  }
}

</script>
