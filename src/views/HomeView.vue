<template>
  <MainMasterPage>
    <HeroComponent />
    <SkincareComponent />
    <ImageContainer src="/img/image6.png" />
    <div class="products-section">
      <SubtitleComponent subtitle="Products" class="subtitle" />
      <TitleComponent title="Healthy skin, wildly you" customClass="title" />
      <ProductsComponent :limit="4" />
    </div>
    <FeatureComponent />
    <PartnersComponent />
    <CategoriesComponent />
    <TitleComponent title="Skinn blog" customClass="title" />
    <BlogComponent :limit="2" class="blog-section" />
  </MainMasterPage>
</template>

<script setup>
import MainMasterPage from "@/masterpages/MainMasterPage.vue";
import HeroComponent from "@/components/HeroComponent.vue";
import SkincareComponent from "@/components/SkincareComponent.vue";
import ImageContainer from "@/components/ImageContainer.vue";
import TitleComponent from "@/components/TitleComponent.vue";
import SubtitleComponent from "@/components/SubtitleComponent.vue";
import ProductsComponent from "@/components/ProductsComponent.vue";
import FeatureComponent from "@/components/FeatureComponent.vue";
import PartnersComponent from "@/components/PartnersComponent.vue";
import CategoriesComponent from "@/components/CategoriesComponent.vue";
import BlogComponent from "@/components/BlogComponent.vue";
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;

.products-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.title {
  text-align: center;
  @media screen and (max-width: $tablet) {
    font-size: 50px;
  }
  @media screen and (max-width: $mobile) {
    font-size: 40px;
    line-height: 1.2;
    text-align: center;
  }
}
.subtitle {
  @media screen and (max-width: 1115px) {
    font-size: 8rem;
  }
  @media screen and (max-width: $tablet) {
    font-size: 6rem;
  }
  @media screen and (max-width: $mobileSmall) {
    font-size: 4rem;
  }
}
</style>
