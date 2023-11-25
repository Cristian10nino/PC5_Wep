<template>
  <div>
    <h5>Listado de Películas</h5>
    <div class="peliculas-list">
      <div class="peliculas-grid">
        <div class="peliculas-item" v-for="pelicula in peliculas" :key="pelicula.id">
          <ListaPeliculaItem :pelicula="pelicula" />
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.peliculas-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import axios from 'axios';
import ListaPeliculaItem from 'components/Pelicula/ListaPeliculaItem.vue';

export default {
  name: 'ListaPelicula',
  components: {
    ListaPeliculaItem,
  },
  props: {
    generoIdSelected: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      peliculas: [],
    };
  },
  mounted() {
    this.cargarPeliculas();
  },

    async cargarPeliculas() {
  try {
    const response = await fetch('https://api.themoviedb.org/4/account/655e7b652b113d00ada2423e/movie/favorites?page=1&language=en-US', {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer ec9b06cc057df9a1487e71c4949ea44b',
        'accept': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Error al obtener las películas favoritas');
    }

    const data = await response.json();
    this.peliculas = data.results;
  } catch (error) {
    console.error('Error al cargar las películas favoritas:', error.message);
  }
}
}

</script>

