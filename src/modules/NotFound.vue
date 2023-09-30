<script setup>
</script>

<template>
  <div class="not-found">
    <span class="not-found__absolute">1</span>
    <span class="not-found__absolute">2</span>
    <span class="not-found__absolute">3</span>
    <div class="not-found__container">
      <div class="not-found__title-container">
        <span class="not-found_title">Данная страница не найдена.</span>
      </div>

      <div class="not-found__button-container">
        <button
            class="not-found__button"
            @click="$router.push('/home')"
        >
          Вернуться на главную
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.not-found {
  height: 100vh;
  width: 100%;
  &::before {
    content: url('@/assets/img/decor/path-arrow.png');
    position: absolute;
    top: 50%;
    left: 15%;
  }

  &::after {
    content: url('@/assets/img/decor/like.svg');
    position: absolute;
    top: 50%;
    left: 75%;
  }

  &__absolute {
    position: absolute;
    font-size: 50px;
    font-weight: 600;
    top: 60%;
    left: 40%;
    &:nth-of-type(1) {
      top: 40%;

    }
    &:nth-of-type(2) {
      top: 50%;
      left: 70%;
    }
  }
  

  &__container {
    position: absolute;
    top: 50%;
    left: 50%;
    border-radius: 22px;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    font-size: 35px;
    font-weight: bold;
    width: 600px;
    height: 200px;
    background: #0C0F1E;
    z-index: 1;
  }

  &__button {
    width: 317px;
    height: 80px;
    border-radius: 22px;
    font-size: 27px;
    font-weight: bold;
    color: white;
    border: none;
    background: linear-gradient(84.57deg, #BA24D7 -3.09%, #5D2DE6 28.41%, #0030E8 59.91%, #3A98FF 101.19%);
    cursor: pointer;
  }
}
</style>