<script setup>
</script>

<template>
<div class="greet">
  <div class="greet__slogan">Раскрой свой талант в музыке и поделись ей со всем миром</div>
  <div class="greet__description">
    <p class="greet__text">
      Создавайте и делитесь своей музыкой, слушайте музыку от талантливых музыкантов и помогайте им развиваться
    </p>
    <button
        class="greet__btn"
        @click="$router.push('/register')"
    >
      Зарегистрируйтесь
    </button>
  </div>
</div>
</template>

<style lang="scss" scoped>
.greet {
  display: flex;
  align-items: center;
  gap: 10%;
  &__slogan {
    font-weight: 700;
    // font-size: 96px;
    font-size: 76px;
    // line-height: 105px;
    line-height: 90px;
    max-width: 988px;
    position: relative;
    &::before {
      content: url('../assets/path-arrow.png');
      position: absolute;
      // color: #fff;
      width: 275px;
      height: 56px;
      bottom:10%;
      right:-15%;
    }
  }
  &__description {
    display: flex;
    flex-direction: column;
  }
  &__text {
    font-weight: 500;
    font-size: 18px;
    line-height: 23px;
    margin-bottom: 43px;
  }
  &__btn {
    width: 330px;
    height: 80px;
    font-weight: 700;
    font-size: 22px;
    color: inherit;
    text-align: center;
    border-radius: 22px;
    border: none;
    background: linear-gradient(84.57deg, #BA24D7 -3.09%, #5D2DE6 28.41%, #0030E8 59.91%, #3A98FF 101.19%);
    cursor: pointer;
    &:active {
      box-shadow: inset 0 0 5px 0;
    }
  }
}
</style>
