import axios from 'axios';


export default {
  namespaced: true, // モジュール名でアクセスするための設定
  state: {
    products: [],
  },
  getters: {
    totalPrice(state) {
      return state.products.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
    productsInCart(state) {
      return state.products.filter(p => p.quantity > 0);
    }
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, product) {
      const item = state.products.find(p => p.id === product.id);
      if (item) item.quantity++;
    },
    clearCart(state) {
      state.products.forEach(p => (p.quantity = 0));
    }
  },
  actions: {
    async purchaseItems({ commit }) {
      const res = await axios.get(
        'https://m3h-ueda-0825-g9ambehbcjczc8g5.japaneast-01.azurewebsites.net/api/SELECT?'
      );
      commit('setProducts', res.data.List);


      await new Promise(resolve => setTimeout(resolve, 3000));
      commit('clearCart');
    },
     addProduct(_, newProduct) {
  return axios.post(
    'https://m3h-shunsukeueda-0804-bqf3f9hdh9h3cbgg.japaneast-01.azurewebsites.net/api/INSERT',
    newProduct
  );
}

  }
};
