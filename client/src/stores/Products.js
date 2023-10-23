import { defineStore } from 'pinia';

export const useProductsStore = defineStore('products', {
  state: () => ({
    statusAddCart: false,
  }),
  actions: {
    handleStatusAddCart(status) {
      this.statusAddCart = status;
    },
  },
});
