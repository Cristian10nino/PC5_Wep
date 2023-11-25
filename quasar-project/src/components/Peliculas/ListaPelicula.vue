<template>
  <h5>Listado de peliculas</h5>
  <div class="pelicula-list">
      <div class="pelicula-grid">
          <div class="pelicula-item" v-for="pelicula in peliculas" :key="pelicula.id">
              <PeliculaItem :pelicula="pelicula" />
          </div>
      </div>
  </div>
</template>

<style>
.pelicula-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;
}
</style>

<script>
import axios from 'axios'
import PeliculaItem from 'components/Peliculas/PeliculaItem.vue'
export default {
  name: "ListaPelicula",
  components: {
      PeliculaItem
  },
  props: {
      generoIdSelected: {
          type: Number,
          required: true
      }
  },
  data() {
  return {
    peliculas: [],
    generoId: 0
  };
},
mounted() {
  this.getPeliculas(0);
},
methods: {
  getPeliculas(idGenero) {
    this.generoId = idGenero || 0;

    // Verifica si el valor en localStorage es null
    var localStorageItem = localStorage.getItem("ec9b06cc057df9a1487e71c4949ea44b");

    if (localStorageItem) {
      var token = JSON.parse(localStorageItem).token;

      if (token) {
        var url = 'https://api.themoviedb.org/4/account/655e7b652b113d00ada2423e/movie/favorites?page=1&language=en-US&sort_by=created_at.asc';
        var cabeceraToken = {
          headers: {
            Authorization: 'Bearer ' + token
          }
        };

        axios.get(url, cabeceraToken).then(response => {
          this.peliculas = response.data.results;  // Asumiendo que los resultados están en la propiedad "results"
        }).catch(error => {
          console.log("Error: " + error);
        });
      } else {
        console.error("La propiedad 'token' no está presente en el objeto almacenado en localStorage.");
      }
    } else {
      console.error("El valor almacenado en localStorage es null.");
    }
  }
}




}

</script>

