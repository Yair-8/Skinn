<template>
  <section class="partners__container">
    <div class="partners__paragraph paragraph">
      "Generate Lorem Ipsum which looks reasonable. The generated Lorem Ipsum is
      therefore always free from repetition, injected humour, or
      non-characteristic"
    </div>
    <div class="partners__logos">
      <img src="../assets/images/partners/partner1.svg" alt="logo" />
      <img src="../assets/images/partners/partner2.svg" alt="logo" />
      <img src="../assets/images/partners/partner3.svg" alt="logo" />
      <img src="../assets/images/partners/partner4.svg" alt="logo" />
    </div>
  </section>
</template>

<script setup></script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;

.partners {
  // .partners__container

  &__container {
    padding: 5rem 4rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    @media screen and (max-width: $mobileSmall) {
      max-width: 100%;
      padding: 4rem 0;
    }
  }

  // .partners__paragraph

  &__paragraph {
  }

  // .partners__logos

  &__logos {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
    flex-wrap: wrap;
    @media screen and (max-width: $mobileSmall) {
      padding: 1rem;
      justify-content: center;
    }
  }
}
</style>
