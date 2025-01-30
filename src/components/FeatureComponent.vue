<template>
  <section class="feature">
    <div class="feature__container">
      <div class="feature__image-ibg">
        <img src="../assets/images/image7.png" alt="image" />
      </div>
      <div class="feature__content content">
        <SubtitleComponent
          subtitle="Features"
          class="content__subtitle subtitle"
        />
        <TitleComponent
          title="Innovation-led Products"
          class="content__title title"
        />
        <p class="content__paragraph paragraph">
          Temporibus autem quibusdam et aut officiis debitis aut rerum
          necessitatibus saepe eveniet ut et voluptates repudiandae sint.
        </p>
        <button class="content__button button">Read more</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import SubtitleComponent from "./SubtitleComponent.vue";
import TitleComponent from "./TitleComponent.vue";
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;
@use "../assets/styles/common-styles/common.scss" as *;
.feature {
  // .feature__container

  &__container {
    padding: 2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 2rem;
    @media screen and (max-width: $mobile) {
      flex-direction: column;
    }
    @media screen and (max-width: $mobileSmall) {
      padding: 0 0 2rem 0;
    }
  }

  // .feature__image-ibg

  &__image-ibg {
    flex: 1 0 50%;
    padding: 15%;
    img {
      border-radius: 10px;
      @media screen and (max-width: $mobileSmall) {
        border-radius: 0;
      }
    }
  }

  // .feature__content

  &__content {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
.content {
  &__title {
    text-align: center;
    @media screen and (max-width: 1115px) {
      font-size: 60px;
    }
    @media screen and (max-width: $tablet) {
      font-size: 44px;
    }
    @media screen and (max-width: $mobileSmall) {
      font-size: 30px;
    }
  }

  &__subtitle {
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
  // .content__paragraph

  &__paragraph {
  }

  // .content__button

  &__button {
  }
}
</style>
