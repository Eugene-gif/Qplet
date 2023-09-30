<script setup>
import { ref } from "vue";

const links = ref([
  { name: "Home", href: "/" },
  { name: "Explore", href: "/explore" },
  { name: "Events", href: "/events" },
  { name: "Contacts", href: "/contacts" },
  { name: "UI-Kit", href: "/uikit" },
]);
const login = ref([
  { name: "Sign up", href: "/register" },
  { name: "Log in", href: "/auth" },
]);
</script>

<template>
  <header class="header">
    <div class="container">
      <router-link class="header__title-link" to="/">QPlet</router-link>
      <nav class="nav">
        <router-link
          class="nav__link header-link"
          v-for="link in links"
          :key="link.name"
          :to="link.href"
          >{{ link.name }}</router-link
        >
      </nav>
      <div class="login">
        <router-link class="header-link" :to="login[0].href">
          Sign up
        </router-link>
        <router-link class="login__link-btn header-link" :to="login[1].href"
          >Log in</router-link
        >
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  // position: fixed;
  width: 100%;
  background-color: #000;
  color: #fff;
  font-size: 20px;
  padding: 25px 100px 30px;
  &-link {
    padding: 10px 0;
    &:active {
      color: var(--pink);
    }
  }
  &__title-link {
    font-weight: 700;
    line-height: 33px;
    font-size: 27px;
  }
  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 50px;
  }
}

.nav {
  max-width: 530px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 10px;
}

.login {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 228px;
  width: 100%;
  gap: 44px;
  &__link-btn {
    padding: 15px 25px;
    border: 1px solid #fff;
    border-radius: 17px;
    &:active {
      border: 1px solid var(--pink);
    }
  }
}
</style>