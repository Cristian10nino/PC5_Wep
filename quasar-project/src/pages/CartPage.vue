<template>
  <div class="cart-page">
      <ul class="cart-list">
          <li class="cart-item" v-for="(pelicula, index) in localPeliculas" :key="index">
              <!-- Detalle -->
              <div class="cart-item-details">
                  <img :src="pelicula.poster_pathURL" class="cart-item-image">
                  <h6 class="cart-item-name">{{ pelicula.original_title}} {{ pelicula.poster_path }}</h6>
                  <p class="cart-item-description">{{ pelicula.title }}</p>
              </div>

              <!-- Precio -->
              <div class="cart-item-price">
                  <span> {{ pelicula.popularity }}</span>
              </div>

          </li>
      </ul>
  </div>
</template>

<style scoped>
.cart-page {
  padding: 20px;
}

.cart-list {
  max-width: 600px;
  margin: 0 auto;
  list-style: none;
  padding: 0;
}

.cart-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin-bottom: 10px;
  background-color: #f9f9f9;
  border: 1px solid #ccc;
}

.cart-item-details {
  display: flex;
  align-items: center;
  margin-right: 10px;
}

.cart-item-image {
  width: 60px;
  height: 60px;
  object-fit: cover;
  margin-right: 10px;
}

.cart-item-name {
  font-weight: bold;
  margin: 0;
}

.cart-item-description {
  font-style: italic;
  margin: 0;
}





.cart-item-price {
  font-weight: bold;
}




</style>

<script>
import { userCartStore } from 'src/stores/cart-store';
import { defineComponent, reactive } from 'vue'

export default defineComponent({
  name: "CartPage",
  setup() {
      const cartStore = userCartStore()
      const localPeliculas = reactive(cartStore.getCart())

      const updateQuantity = (peliculaId, newQuantity) => {
          cartStore.updateQuantity(peliculaId, newQuantity)
      }






      return {
          localPeliculas,



      }

  }
})

</script>


