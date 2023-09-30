<script setup>
import Button from "@/modules/UiKit/elements/Button.vue";
</script>

<template>
  <div class="ui">
    <h2 class="ui__title-main">
      Добро пожаловать в наш UI-Kit для проекта QPlet
    </h2>
    <h3 class="ui__title">Кнопки:</h3>
    <div class="ui__buttons ui__list">
      <Button size="xl" label="Size xl" />
      <Button label="Default" />
      <Button size="md" outlined label="Outlined md" />
      <Button size="sm" rounded label="Rounded sm" />
      <Button circle label="круг" />
      <Button circle label="click" outlined />
      <Button circle label="click" icon src="" />

      <Button circle label outlined>
        <img src="..src/assets/img/icons/play-white.svg" alt="icon">
      </Button>
      <Button square />
        <div>
          <img src="@/assets/img/icons/plya-white.svg" alt="">
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.ui {
  &__title-main {
    text-align: center;
    margin-bottom: 30px;
    color: var(--default);
  }
  &__title {
    text-align: center;
    max-width: 100px;
    margin: 0 auto 20px;
    position: relative;
    &:after {
      content: "";
      position: absolute;
      height: 2px;
      width: 100%;
      background-color: var(--default);
      bottom: 0;
      left: 0;
    }
  }
  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
  }
}
</style>