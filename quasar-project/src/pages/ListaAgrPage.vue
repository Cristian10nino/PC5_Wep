<template>
  <div class="Agregado-page">
    <ul class="Agregado-list">
      <li class="Agregado-item" v-for="(pelicula, index) in localPelicula" :key="index">
        <!-- Detalle -->
        <div class="Agregado-item-details">
          <img :src="pelicula.poster_path" class="Agregado-item-image">
          <h6 class="Agregado-item-title">{{ pelicula.title }}</h6>
          <p class="Agregado-item-overview">{{ pelicula.overview }}</p>
        </div>
        <!-- Cantidad -->
        <!-- Precio -->
        <div class="Agregado-item-popularity">
          <span>{{ pelicula.popularity }}</span>
        </div>
        <!-- Boton Remove -->
        <div class="cart-item-delete">
          <button class="cart-item-delete-btn" @click="eliminarDelCarrito(index)">Eliminar</button>
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

.cart-item-quantity {
    display: flex;
    align-items: center;
}

.cart-item-quantity-btn {
    font-size: 18px;
    background-color: #ddd;
    border: none;
    padding: 5px;
    margin-right: 5px;
    cursor: pointer;
}

.cart-item-quantity-input {
    width: 50px;
    text-align: center;
}

.cart-item-price {
    font-weight: bold;
}

.cart-item-delete {
    margin-left: 10px;
}

.cart-item-delete-btn {
    background-color: #ff5252;
    border: none;
    color: white;
    padding: 5px;
    cursor: pointer;
}
</style>



<script>
import { userCartStore } from 'src/stores/cart-store';
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'CarritoPage',
  setup() {
    const cartStore = userCartStore();
    const localPelicula = ref(cartStore.getCart());

    const eliminarDelCarrito = (index) => {
      cartStore.eliminarDelCarrito(index);
    };

    return {
      localPelicula,
      eliminarDelCarrito,
    };
  },
});
</script>

