import { createStore } from "vuex";

export default createStore({
  state: () => ({
    personsStore: [],
    foodsStore: [],
  }),

  getters: {
    findEmptyFieldName(state) {
      return state.personsStore.find((person) => person.name === "");
    },

    findEmptyFieldFood(state) {
      let msg = [ false, "so bad code" ];

      state.foodsStore.forEach(food => {
        if(food.name === ''){
          msg = [ true, "Вы не задали все названия" ];
          return
        }
        else if(food.price === null){
          msg = [ true, "Вы не указали все цены" ];
          return
        }
        else if(food.payerId === null){
          msg = [ true, `Вы не указали того, кто платит` ];
          return
        }
        else if(!(Array.isArray(food.whoOrderedFood) && food.whoOrderedFood.length)){
          msg = [ true, `Вы не указали тех, кто заказывал` ];
          return
        }
      })

      return msg
    },
  },

  mutations: {
    addPersonStore(state) {
      state.personsStore.push({ id: Date.now(), name: "", whomMoney: [] });
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

    calculate(state){

      state.personsStore.forEach(p => {
        p.whomMoney.length = 0
      })
      

      state.personsStore.forEach(person => {

        state.foodsStore.forEach(food => {
          if(food.whoOrderedFood.includes(person.id) && person.id !== food.payerId){
            let index = person.whomMoney.findIndex(item => item.toWhom === food.payerId)
            if(index !== -1){
              person.whomMoney[index].amount +=  food.price / food.whoOrderedFood.length
            }
            else{
              person.whomMoney.push({toWhom: food.payerId, amount: food.price / food.whoOrderedFood.length})
            }
            
          }
        })
      })
    },

  },
});
