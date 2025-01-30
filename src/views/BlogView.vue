<template>
  <MainMasterPage>
    <div class="blog">
      <BlogComponent />
    </div>
  </MainMasterPage>
</template>
<script setup>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import BlogComponent from "@/components/BlogComponent.vue";
</script>
<style lang="scss">
@use "../assets/styles/common-styles/container.scss" as *;

.blog {
  padding-top: 100px;
  @media screen and (max-width: $tablet) {
    padding-top: 50px;
  }
}
</style>
