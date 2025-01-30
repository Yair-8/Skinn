<template>
  <div class="image">
    <div class="image-ibg-contain">
      <img :src="src" alt="alt" />
    </div>
  </div>
</template>

<script setup>
defineProps({
  src: {
    type: String,
    required: true,
  },
  alt: {
    type: String,
    default: "Image",
  },
  padding: {
    type: String,
    default: "20%",
  },
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;
.image-ibg-contain {
  padding: 20%;
  img {
  }
}
</style>
