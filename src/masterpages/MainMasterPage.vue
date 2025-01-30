<template>
  <div class="wrapper">
    <HeaderComponent />
    <main class="main">
      <slot></slot>
    </main>
    <FooterComponent />
  </div>
</template>

<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import FooterComponent from "@/components/FooterComponent.vue";
</script>

<style lang="scss" scoped></style>
