<template>
  <div class="add-person">
    <div class="container">
      <div class="add-person__content">
        <div class="add-person__title">
          Добавьте людей, между которым поделим счет 
        </div>
        <button class="add-person__add-btn" @click="$store.commit('addPersonStore')">Добавить</button>
        <hr class="line" />
        <div class="add-person__list" v-if="$store.state.personsStore.length !== 0">
          <div
            class="add-person__list-person"
            v-for="person in $store.state.personsStore"
            :key="person.id"
          >
            <div class="person-avatar">
              <avatar-person />
            </div>
            <input
              v-model="person.name"
              type="text"
              class="person-name"
              placeholder="Введите имя..."
            />
            <button class="add-person__del-btn" @click="$store.commit('deletePersonStore', person)">
              Удалить
            </button>
          </div>
        </div>
        <div class="info-block" v-else>Здесь пока никого нет...</div>
      </div>
      <button class="next-page-btn" v-if="$store.state.personsStore.length > 1" @click="nextPage">
        Далее
      </button>
    </div>
  </div>
</template>

<script>
import AvatarPerson from "@/components/AvatarPerson.vue";
/***  this.$router.push('/edit/' + joke.id); 
 * v-bind:value="person.name"
              @input="person.name = $event.target.value"
              :model-value="person.name"
              @update:model-value="$store.commit('setPersonName', person)"
 */
export default {
  components: {
    AvatarPerson,
  },

  data() {
    return {
    };
  },

  methods: {
    nextPage() {
      const isEmptyField = this.$store.getters.findEmptyFieldName;
      
      if (isEmptyField) {
        alert("Пожалуйста, дайте имена всем гостям");
      } else {
        this.$router.push("/add-food");
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.add-person {
  flex: 1;
  background-image: url(../assets/img/back_1.3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.add-person__content {
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
  animation: add-person-animate 0.65s ease-in-out;
}

@keyframes add-person-animate {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

.add-person__list {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 2px solid rgba(255, 255, 255, 0.408);
  border-radius: 5px;
  padding: 10px;
  max-height: 400px;
  overflow: auto;
}

.add-person__list-person {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 10px;
}

.add-person__title {
  font-size: 26px;
  text-align: center;
  margin-bottom: 15px;
}

.add-person__add-btn {
  background-color: #f3b00e;
  border: 2px solid #f3b00e;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 17px;
  margin-bottom: 10px;
}

.add-person__add-btn:hover {
  background-color: #f3ae0e87;
}

.add-person__add-btn:active {
  background-color: #f3ae0e49;
}

.line {
  height: 1px;
  width: 100%;
  background-color: rgba(255, 255, 255, 0.408);
  margin-bottom: 30px;
}

.person-name {
  flex: 1;
  margin: 0 20px;
  padding: 0 10px;
  border-radius: 15px;
  background-color: transparent;
  border: 2px solid transparent;
  font-size: 30px;
}

.person-name:focus,
.person-name:active {
  border: 2px solid rgba(255, 255, 255, 0.408);
}

.add-person__del-btn {
  background-color: #760910;
  border: 2px solid #760910;
  padding: 5px 12px;
  border-radius: 15px;
  font-size: 17px;
}

.add-person__del-btn:hover {
  background-color: #76091087;
}

.add-person__del-btn:active {
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
