<template>
  <div class="blog-comp__container">
    <BlogCard
      v-for="blog in limitedBlogs"
      :key="blog.id"
      :id="blog.id"
      :image="blog.image"
      :title="blog.title"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import BlogCard from "./BlogCard.vue";

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
});

const blogs = ref([]);
const limitedBlogs = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data/blogs.json");
    const allBlogs = await response.json();
    blogs.value = allBlogs;
    limitedBlogs.value = props.limit
      ? allBlogs.slice(0, props.limit)
      : allBlogs;
  } catch (error) {
    console.error("Failed to fetch blogs:", error);
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;
@use "../assets/styles/common-styles/common.scss" as *;
.blog-comp {
  // .blog-comp__container

  &__container {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    width: 100%;
    padding: 2rem;
    margin-bottom: 2rem;
    @media screen and (max-width: $tablet) {
      grid-template-columns: repeat(1, 1fr);
      padding: 1rem;
    }
  }
}
</style>
