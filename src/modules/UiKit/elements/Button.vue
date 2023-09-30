<script setup>
import { computed, onMounted } from "@vue/runtime-core";

const props = defineProps({
  label: {
    type: String,
    default: "Действие",
  },
  color: {
    type: String,
    default: "gradient",
  },
  rounded: {
    type: Boolean,
    required: false,
  },
  disabled: {
    type: Boolean,
    required: false,
  },
  outlined: {
    type: Boolean,
    required: false,
  },
  circle: {
    type: Boolean,
    required: false,
  },
  square: {
    type: Boolean,
    required: false,
  },
  // icon: {
  //   type: String,
  //   name: String,
  //   required: false,
  // },
  size: {
    type: String,
    default: "lg",
  },


  filled: {
    type: String,
    required: false,
  }
});

// function getImg(name) {
//  const path = `${name}.svg`;
//     const modules = import.meta.glob("./assets/img/icons/*", { eager: true });
//     const mod = modules[path];
//     console.log(mod);
//     return mod;
// }
</script>
<template>
  <button
    :class="[
      'btn',
      `btn-${color}`,
      { 'btn-rounded': rounded },
      { 'btn-outlined': outlined },
      { 'btn-circle': circle },
      { 'btn-square': square },
      { 'btn-filled': filled},
      // { 'btn-icon': icon },
      { 'btn-xl': size === 'xl' },
      { 'btn-lg': size === 'lg' },
      { 'btn-md': size === 'md' },
      { 'btn-sm': size === 'sm' },
    ]"
    :disabled="disabled"
    @click="ckickOnButton"
  >
    <span>{{ label }}</span>
  </button>
</template>

<style lang="scss" scoped>
.btn {
  max-width: 272px;
  height: 70px;
  width: 100%;
  font-weight: 700;
  font-size: 18px;
  cursor: pointer;
  border-radius: 22px;
  transition: all 0.1s;
  border: none;

  &:disabled {
    border: 1px solid var(--grey);
    color: var(--grey);
  }

  &-gradient {
    color: var(--default);
    background: var(--gradient);
    &:enabled:active {
      // transition: all 0.1s;
      background: var(--gradient-active);
      box-shadow: var(--gradient-shadow);
    }
  }

  &-xl {
    max-width: 330px;
    height: 80px;
    font-size: 22px;
  }

  &-lg {
    height: 70px;
    font-size: 18px;
  }

  &-md {
    height: 60px;
    font-size: 16px;
  }

  &-sm {
    height: 50px;
    font-size: 16px;
  }

  &-outlined {
    background: transparent;
    border: 1px solid var(--default);
    &:enabled:active {
      border-color: var(--pink);
      background: transparent;
      box-shadow: none;
      color: var(--pink);
    }
  }

  &-rounded {
    border-radius: 25px;
    height: 55px;
    font-size: 18px;
  }

  &-circle {
    border-radius: 50%;
    width: 80px;
    height: 80px;
    //mobile: 64px;
  }
  &-square {
    border-radius: 16px;
    height: 60px;
  }

  &-filled {
    background: none;
    color: white;
    background: #FE197F;
  }
}
</style>