<template>
  <q-card class="pelicula-card">
      <q-card-section>
          <q-img :src="pelicula.poster_pathURL" alt="Imagen de la pelicula"></q-img>
      </q-card-section>
      <q-card-section>
          <q-card-title>{{ pelicula.title }}</q-card-title>
          <div class="text-h6 font-weigth-bold">{{ pelicula.popularity }}</div>
          <div class="text-center">
              <q-btn @click="addToCart" color="primary" icon="add_shopping_cart" label="Agregar" />
          </div>
      </q-card-section>
  </q-card>
</template>

<style>
.pelicula-card {
  width: 300px;
}

.pelicula-card q-card-section {
  height: 100px;
  overflow: hidden;
}
</style>

<script>

import { userCartStore } from 'src/stores/cart-store'

export default {
  name: "PeliculaItem",
  props: {
      peliculas: {
          type: Object,
          required: true
      }
  },
  methods: {
      addToCart() {
          const store = userCartStore()
          store.addToCart(this.peliculas)
      }

  }
}
