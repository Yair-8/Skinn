<template>
  <section class="skincare">
    <div class="skincare__container">
      <TitleComponent
        title="Natural and certified organic"
        class="skincare__title title"
      />
      <SubtitleComponent
        subtitle="Skincare"
        class="skincare__title-span title-span"
      />
      <p class="skincare__paragraph paragraph">
        At vero eos et accusamus et iusto odio dignissimos ducimus qui
        blanditiis praesentium voluptatum deleniti atque corrupti quos dolores
        et quas molestias excepturi.
      </p>
      <button @click="goToShop" class="skincare__button button--rounded">
        Shop all
      </button>
    </div>
  </section>
</template>

<script setup>
import TitleComponent from "./TitleComponent.vue";
import SubtitleComponent from "./SubtitleComponent.vue";
import { useRouter } from "vue-router";

const router = useRouter();

function goToShop() {
  router.push("/shop-all");
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;

.skincare {
  // .skincare__container

  &__container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-bottom: 5rem;
    padding-top: 5rem;

    background: url("../assets/images/image1.png") no-repeat,
      url("../assets/images/image2.png") no-repeat,
      url("../assets/images/image3.png") no-repeat,
      url("../assets/images/image4.png") no-repeat,
      url("../assets/images/image5.png") no-repeat;
    background-position: 0% 5%, 85% 0%, 5% 75%, 95% 95%, 100% 35%;
    @media (max-width: $tablet) {
      background: linear-gradient(
          rgba(255, 255, 255, 0.8),
          rgba(255, 255, 255, 0.8)
        ),
        /* Transparent overlay */ url("../assets/images/image1.png") no-repeat,
        url("../assets/images/image2.png") no-repeat,
        url("../assets/images/image3.png") no-repeat,
        url("../assets/images/image4.png") no-repeat,
        url("../assets/images/image5.png") no-repeat;

      background-position: 0% 5%, 85% 0%, 5% 75%, 95% 95%, 100% 35%;
      background-size: auto, auto, auto, auto, auto;
    }
    @media screen and (max-width: $mobile) {
      padding: 0;
      margin: 0;
    }
  }

  // .skincare__title

  &__title {
    text-align: center;
    padding: 0 2rem;
    max-width: 700px;
    @media screen and (max-width: $tablet) {
      max-width: 100%;
    }
    @media screen and (max-width: $mobile) {
      font-size: 50px;
    }
  }

  // .skincare__title-span

  &__title-span {
    transform: rotate(-5deg);
    transform-origin: -5%;
    @media screen and (max-width: $mobile) {
      font-size: 70px;
      transform-origin: 0;
    }
  }

  // .skincare__paragraph

  &__paragraph {
    position: relative;
    max-width: 700px;
    z-index: 100;
  }

  // .skincare__button

  &__button {
    margin-bottom: 20px;
  }
}
</style>
