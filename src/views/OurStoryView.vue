<template>
  <MainMasterPage>
    <div class="our-story__container">
      <h1>This is an our story page</h1>
    </div>
  </MainMasterPage>
</template>
<script setup>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
</script>
<style lang="scss">
.our-story {
  // .our-story__container

  &__container {
    padding-top: 100px;
    text-align: center;
  }
}
</style>
