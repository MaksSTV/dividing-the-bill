<template>
  <div class="main">
    <div class="main__screen">
      <div class="container">
        <div class="intro">
          <h1 class="title">Добро пожаловать в "Делим Счет"</h1>
          <div class="subtitle">
            Покажем как быстро и удобно разделить счет в кафе
          </div>
          <router-link to="/add-person" class="intro__btn">Начать</router-link>
        </div>
      </div>
    </div>
    <div class="second-screen">
      <div class="container">
        <div class="second-screen__grid">
          <div class="second-screen__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui, nihil,
            natus alias cumque maiores eius a obcaecati, laudantium dolores quos
            doloremque reprehenderit et odit minima incidunt quas quaerat non
            impedit.
          </div>
          <div class="second-screen__img-1"></div>
          <div class="second-screen__img-2"></div>
          <div class="second-screen__text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Blanditiis, velit. Voluptatum voluptas, excepturi iusto voluptates
            velit iste asperiores, facilis veritatis accusamus quis corporis,
            illo hic saepe tempore totam? Magnam, sed.
          </div>
        </div>
      </div>
    </div>
    <footer class="footer"></footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>

.main {
  background-color: #0d8261;
  display: flex;
  flex-direction: column;
}

.main__screen {
  width: 100%;
  height: 100vh;
  background-image: url(../assets/img/back_1.3.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
}

.container {
  max-width: 80%;
  margin: 0 auto;
  height: inherit;
}

.intro {
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  height: 100%;
  opacity: 0;
  animation: intro-animate 0.65s ease-in-out forwards 1s;
  margin-bottom: 200px;
}

@keyframes intro-animate {
  0% {
    opacity: 0;
    transform: translateY(30%);
  }
  100% {
    opacity: 1;
    transform: translateY(5%);
  }
}

.title {
  font-size: 70px;
  font-weight: 600;
  line-height: 80px;
  margin-bottom: 15px;
}

.subtitle {
  font-size: 45px;
  text-align: center;
  width: 50%;
  margin: 0 auto;
  margin-bottom: 110px;
}

.intro__btn {
  background-color: #0d8261;
  border: 3px solid rgba(255, 255, 255, 0.408);
  border-radius: 25px;
  padding: 10px 40px;
  font-size: 25px;
  color: white;
  text-decoration: none;
}

.intro__btn:hover {
  background-color: #0d826181;
}

.intro__btn:active {
  background-color: #0d826131;
}

.second-screen {
  padding: 100px 0;
}

.second-screen__grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 100px;
  justify-items: center;
}

.second-screen__img-1 {
  background-image: url(../assets/img/second_screen_img_1.jpg);
}

.second-screen__img-2 {
  background-image: url(../assets/img/second_screen_img_2.jpg);
}

.second-screen__img-1,
.second-screen__img-2 {
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  height: 750px;
  width: 80%;
}

.second-screen__text {
  font-size: 45px;
  width: 70%;
}

.footer {
  height: 150px;
  background-color: #434041;
}
</style>