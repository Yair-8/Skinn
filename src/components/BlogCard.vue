<template>
  <div class="blog-card">
    <div class="blog-card__image">
      <img :src="image" alt="image" />
    </div>
    <div class="blog-card__content content">
      <p class="content__title title">{{ title }}</p>
      <button class="button--rounded" @click="goToBlog">Read more</button>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";

const { id, image } = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
const router = useRouter();

function goToBlog() {
  router.push({ name: "blog-detail", params: { id } });
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;
@use "../assets/styles/common-styles/common.scss" as *;

.blog-card {
  display: flex;
  flex-direction: row;
  gap: 2rem;
  @media screen and (max-width: $mobileSmall) {
    flex-direction: column;
    gap: 0.5rem;
  }
  &__image {
    flex: 1 1 50%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  // .blog-card__content

  &__content {
    flex: 1 1 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 10px;
  }
}
.content {
  // .content__title

  &__title {
    font-size: 20px;
  }
}

.button {
  // .button--rounded

  &--rounded {
    width: fit-content;
  }
}
</style>
