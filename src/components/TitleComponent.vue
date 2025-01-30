<template>
  <h2 :class="customClass">{{ title }}</h2>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true,
  },
  customClass: {
    type: String,
    default: "",
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/common.scss" as *;
</style>
