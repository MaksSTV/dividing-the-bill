<template>
  <div class="calculate">
    <div class="container">
      <div class="calculate__content">
        <div class="calculate__title">Счет</div>
        

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

.calculate__title{
    font-size: 30px;
}
</style>
