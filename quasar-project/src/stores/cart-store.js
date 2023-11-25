import { defineStore } from 'pinia';

export const userCartStore = defineStore('cart', {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem('cart')) || [],
  }),
  actions: {
    addToCart(pelicula) {
      const cartAllItems = this.cartItems;
      const existingPeliculaIndex = cartAllItems.findIndex((item) => item.id == pelicula.id);

      if (existingPeliculaIndex >= 0) cartAllItems[existingPeliculaIndex].quantity++;
      else cartAllItems.push({ ...pelicula, quantity: 1 });

      localStorage.setItem('cart', JSON.stringify(cartAllItems));
      this.cartItems = cartAllItems;
    },
    removeToCart(peliculaId) {
      const cartAllItems = this.cartItems;

      const existingPeliculaIndex = cartAllItems.findIndex((item) => item.id == peliculaId);

      if (existingPeliculaIndex >= 0) cartAllItems.splice(existingPeliculaIndex, 1);

      localStorage.setItem('cart', JSON.stringify(cartAllItems)); // Corregido aquí
      this.cartItems = cartAllItems;
    },
    updateQuantity(peliculaId, newQuantity) {
      const cartAllItems = this.cartItems;

      const existingPeliculaIndex = cartAllItems.findIndex((item) => item.id == peliculaId);
      if (existingPeliculaIndex >= 0) cartAllItems[existingPeliculaIndex].quantity = newQuantity;

      localStorage.setItem('cart', JSON.stringify(cartAllItems));
      this.cartItems = cartAllItems;
    },
    clearCart() {
      localStorage.removeItem('cart');
      this.cartItems = [];
    },
    getCart() {
      return this.cartItems;
    },
  },
  getters: {
    totalCountItems() {
      return this.cartItems
        ? this.cartItems.reduce((total, item) => total + item.quantity, 0)
        : 0;
    },
  },
});

