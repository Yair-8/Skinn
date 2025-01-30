<template>
  <MainMasterPage>
    <div class="pages__container">
      <h1>This is pages page</h1>
    </div>
  </MainMasterPage>
</template>
<script setup>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
</script>
<style lang="scss">
.pages {
  // .pages__container

  &__container {
    padding-top: 100px;
    text-align: center;
  }
}
</style>
