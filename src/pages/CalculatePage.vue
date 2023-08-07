<template>
  <div class="calculate">
    <div class="container">
      <div class="calculate__content">
        <div class="calculate__title">Счет</div>
        <div class="calculate_person-list">
          <div
            class="calculate_person"
            v-for="(person, index) in $store.state.personsStore"
            :key="index"
          >
            <div class="calculate_person-title">
              {{ person.name }}
            </div>
            <div
              class="calculate_person-text"
              v-if="person.whomMoney.length != 0"
            >
              <div
                class="calculate_person-list-whomMoney"
                v-for="(toWhomPerson, i) in person.whomMoney"
                :key="i"
              >
                <div class="calculate_person-list-whomMoney-text">
                  Должен {{ toWhomPerson.toWhomName }}:
                  {{ toWhomPerson.amount.toFixed(2) }}р
                </div>
              </div>
            </div>
            <div class="calculate_person-text" v-else>
              Никому ничего не должен
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.calculate {
  flex: 1;
  background-image: url(../assets/img/back_1.3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.calculate__content {
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

.calculate__title {
  font-size: 30px;
}

.calculate_person-list{
  width: 100%;
  padding: 30px;
}

.calculate_person{
  margin-top: 10px;
  border-bottom: 2px solid #b49f9f;
}

.calculate_person-title{
  font-size: 23px;
}

.calculate_person-text{
  font-size: 17px;
}
</style>
