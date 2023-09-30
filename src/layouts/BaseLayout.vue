<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <div class="container-fluid">
    <Header />
    <div class="container-content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped>

</style>
