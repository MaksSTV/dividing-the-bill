import { createStore } from "vuex";

export default createStore({
  state: () => ({
    personsStore: [],
    foodsStore: [],
  }),

  getters: {
    findEmptyField(state) {
      return state.personsStore.find((person) => person.name === "");
    },
  },

  mutations: {
    addPersonStore(state) {
      state.personsStore.push({ id: Date.now(), name: "" });
    },

    deletePersonStore(state, person) {
      state.personsStore = state.personsStore.filter((p) => p !== person);
    },

    addFoodStore(state) {
      state.foodsStore.push({
        id: Date.now(),
        name: "",
        price: null,
        payerId: null, 
        whoOrderedFood: [],
      });
    },

    deleteFoodStore(state, food) {
      state.foodsStore = state.foodsStore.filter((f) => f !== food);
    },

  },
});
