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
      

      state.personsStore.forEach(person => { // просчет кто кому должен без компенсации повтора
        state.foodsStore.forEach(food => {
          if(food.whoOrderedFood.includes(person.id) && person.id !== food.payerId){
            let index = person.whomMoney.findIndex(item => item.toWhomId === food.payerId)
            if(index !== -1){
              person.whomMoney[index].amount +=  food.price / food.whoOrderedFood.length
            }
            else{
              let name = state.personsStore.find(p => p.id === food.payerId).name
              person.whomMoney.push({toWhomId: food.payerId, toWhomName: name, amount: food.price / food.whoOrderedFood.length})
            }
          }
        })
      })

      //просчет повторений
      state.personsStore.forEach(person_1 => {
        //debugger
        state.personsStore.forEach(person_2 => {
          let person_1WhomMoney = person_1.whomMoney.find(p => p.toWhomId === person_2.id)
          let person_2WhomMoney = person_2.whomMoney.find(p => p.toWhomId === person_1.id)
          if(person_1WhomMoney && person_2WhomMoney){

            let amount_1 = person_1WhomMoney.amount
            let amount_2 = person_2WhomMoney.amount

            if(amount_1 > amount_2){
              let index = person_1.whomMoney.findIndex(p => p.toWhomId === person_1WhomMoney.toWhomId)
              person_1.whomMoney[index].amount = amount_1 - amount_2

              person_2.whomMoney = person_2.whomMoney.filter(p => p.toWhomId !== person_2WhomMoney.toWhomId)
            }

            if(amount_1 < amount_2){
              let index = person_2.whomMoney.findIndex(p => p.toWhomId === person_2WhomMoney.toWhomId)
              person_2.whomMoney[index].amount = amount_2 - amount_1

              person_1.whomMoney = person_1.whomMoney.filter(p => p.toWhomId !== person_1WhomMoney.toWhomId)
            }

            if(amount_1 === amount_2){
              person_1.whomMoney = person_1.whomMoney.filter(p => p.toWhomId !== person_1WhomMoney.toWhomId)
              person_2.whomMoney = person_2.whomMoney.filter(p => p.toWhomId !== person_2WhomMoney.toWhomId)
            }
          }
        })
      })      
    },

  },
});
