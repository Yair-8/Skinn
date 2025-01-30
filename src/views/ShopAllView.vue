<template>
  <MainMasterPage>
    <ProductsComponent class="products-component" />
  </MainMasterPage>
</template>
<script setup>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import ProductsComponent from "@/components/ProductsComponent.vue";
</script>
<style lang="scss">
@use "../assets/styles/common-styles/container.scss" as *;

.products-component {
  padding: 100px 10px 50px 10px;
  @media screen and (max-width: $mobile) {
    padding: 50px 10px 20px 10px;
  }
}
</style>
