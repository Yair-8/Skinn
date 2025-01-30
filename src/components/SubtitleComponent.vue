<template>
  <div>
    <h3 :class="customClass">{{ subtitle }}</h3>
  </div>
</template>

<script setup>
defineProps({
  subtitle: {
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
@use "../assets/styles/common-styles/container.scss" as *;

.subtitle {
  font-family: $fontFamilyCursive;
  color: $secondaryColor;
  font-size: 10rem;
  font-weight: 500;
}
</style>
