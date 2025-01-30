<template>
  <section class="blog-detail">
    <div v-if="blog" class="blog-detail__container">
      <div class="blog-detail__image-ibg">
        <img :src="blog.image" :alt="blog.name" />
      </div>
      <div class="blog-detail__content content">
        <h1 class="content__name">{{ blog.title }}</h1>

        <p class="content__description paragraph">{{ blog.description }}</p>
        <div class="blog-detail__actions">
          <a href="#" @click="goToBlog">To Blogs</a>
        </div>
      </div>
    </div>
    <p v-else>Loading...</p>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";

const router = useRouter();
const route = useRoute();
const blog = ref(null);

function goToBlog() {
  router.push("/blog");
}

onMounted(async () => {
  try {
    const response = await fetch("/data/blogs.json");
    const blogs = await response.json();
    blog.value = blogs.find((p) => p.id === Number(route.params.id));
  } catch (error) {
    console.error("Failed to fetch blog details:", error);
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;
@use "../assets/styles/common-styles/common.scss" as *;

.blog-detail {
  // .blog-detail__container
  &__container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    gap: 20px;
    padding: 2rem;
  }

  // .blog-detail__image
  &__image-ibg {
    padding: 20%;
  }

  // .blog-detail__content

  &__content {
  }

  &__actions {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    // align-items: center;
    gap: 20px;
  }
}
.content {
  display: flex;
  flex-direction: column;
  //justify-content: space-between;
  gap: 20px;
  // .content__name

  &__name {
    font-size: 2rem;
    color: $secondaryColor;
    font-weight: 500;
  }

  // .content__category

  &__category {
  }

  // .content__price

  &__price {
  }

  // .content__description

  &__description {
    text-align: start;
  }
}
.button {
  width: fit-content;
  border-radius: 5px;
}
a {
  text-decoration: underline;
  transition: color 0.3s ease;
  @media (any-hover: hover) {
    &:hover {
      color: $secondaryColor;
    }
  }
}
</style>
