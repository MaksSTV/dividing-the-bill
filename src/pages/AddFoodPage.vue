<template>
    <div class="add-food">
    <div class="container">
      <div class="add-food__content">
        <div class="add-food__title">
          Добавьте блюда, которые заказывала ваша компания, а также укажите того, кто платит.
        </div>
        <button class="add-food__add-btn" @click="$store.commit('addFoodStore')">Добавить</button>
        <hr class="line" />
        <div class="add-food__list" v-if="$store.state.foodsStore.length !== 0">
          <div
            class="add-food__listOfFood"
            v-for="food in $store.state.foodsStore"
            :key="food.id"
          >
            <input
              v-model="food.name"
              type="text"
              class="food-name"
              placeholder="Название"
            />
            <input
              v-model="food.price"
              type="number"
              class="food-price"
              placeholder="Цена"
            />
            <button class="add-food__del-btn" @click="$store.commit('deleteFoodStore', food)">
              Удалить
            </button>
          </div>
        </div>
        <div class="info-block" v-else>Здесь пока ничего нет...</div>
      </div>
      <button class="next-page-btn" v-if="$store.state.foodsStore.length > 0" @click="nextPage">
        Рассчитать
      </button>
    </div>
  </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.add-food {
  flex: 1;
  background-image: url(../assets/img/back_1.3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.add-food__content {
  max-width: 700px;
  margin: 200px auto 0 auto;
  border: 3px solid rgba(255, 255, 255, 0.408);
  background-color: rgba($color: #493c3c, $alpha: 0.9);
  border-radius: 10px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  animation: add-food-animate 0.65s ease-in-out;
}

@keyframes add-food-animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.add-food__title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 15px;
}

.add-food__add-btn {
  background-color: #f3b00e;
  border: 2px solid #f3b00e;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 17px;
  margin-bottom: 10px;
}

.add-food__add-btn:hover {
  background-color: #f3ae0e87;
}

.add-food__add-btn:active {
  background-color: #f3ae0e49;
}

.line {
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.408);
  margin-bottom: 30px;
}

.add-food__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.408);
  border-radius: 5px;
  padding: 10px;
  max-height: 400px;
  overflow: auto;
}

.add-food__listOfFood {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.food-name, 
.food-price {
  width: 100%;
  padding: 0 10px;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid transparent;
  font-size: 18px;
}

.food-name:focus,
.food-name:active,
.food-price:focus,
.food-price:active {
  border: 2px solid rgba(255, 255, 255, 0.408);
}

.add-food__del-btn {
  background-color: #760910;
  border: 2px solid #760910;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 17px;
}

.add-food__del-btn:hover {
  background-color: #76091087;
}

.add-food__del-btn:active {
  background-color: #76091049;
}


.info-block {
  font-size: 20px;
  text-align: center;
  margin-bottom: 15px;
}

.next-page-btn {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0d8261;
  border: 3px solid rgba(255, 255, 255, 0.408);
  border-radius: 25px;
  padding: 10px 40px;
  font-size: 25px;
  animation: next-page-animate 0.65s ease-in-out;
}

.next-page-btn:hover {
  background-color: #0d826181;
}

.next-page-btn:active {
  background-color: #0d826131;
}

@keyframes next-page-animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
</style>