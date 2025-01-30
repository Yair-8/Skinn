<template>
  <section class="hero">
    <div class="hero__container">
      <div class="hero__content">
        <h1 class="title">
          Discover The Beauty Within <span class="title-span">You</span>
        </h1>
        <button @click="goToShop" class="button">View Collection</button>
      </div>
      <div class="hero__image"></div>
    </div>
  </section>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToShop() {
  router.push("/shop-all");
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;

.hero {
  padding-top: 100px;
  padding-bottom: 6rem;
  @media screen and (max-width: $tablet) {
    padding-top: 50px;
  }
  @media screen and (max-width: $mobile) {
    padding-bottom: 2rem;
  }
  // .hero__container

  &__container {
    display: flex;
    flex-direction: row;
    height: 100%;
    background-image: url("../assets/images/IMAGE.png");
    background-position: 100% 0%;
  }

  // .hero__content

  &__content {
    flex: 0 1 50%;
    padding: 4rem 0 0 4rem;
    @media (max-width: 1216px) {
      padding: 7rem 0 0 4rem;
      flex: 0 1 60%;
    }
    @media (max-width: $tablet) {
      flex: 0 1 90%;
      padding: 10rem 0 0 4rem;
    }
    @media screen and (max-width: $mobile) {
      padding: 10rem 0 0 0.5rem;
    }
  }
}
.title {
  @media (max-width: $tablet) {
    font-size: 60px;
  }
  @media screen and (max-width: $mobile) {
    font-size: 50px;
    font-weight: 600;
  }
}
.title-span {
  text-align: end;
  transform: rotate(5deg);
  @media screen and (max-width: $mobile) {
    font-size: 90px;
  }
}
.button {
  margin-bottom: 20px;
}
</style>
