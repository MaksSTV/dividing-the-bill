<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
//#844D36 - #474853 - #86B3D1 - #AAA0A0 - #8E8268 50/50
//#f3b00e - #f8d369 - #760910 - #907477 - #c6bfba - #47352d
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;600&display=swap");
//font-family: 'Roboto', sans-serif;

.app {
  background-color: #0d8261;
  display: flex;
  flex-direction: column;
  flex: 1;
}

.container {
  max-width: 80%;
  margin: 0 auto;
  height: inherit;
}

</style>