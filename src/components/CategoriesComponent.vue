<template>
  <section class="categories">
    <div v-for="category in categories" :key="category.id" class="category">
      <img
        :src="category.image"
        :alt="category.label"
        class="category__image"
      />
      <div class="category__overlay">
        <span class="category__text">{{ category.label }}</span>
      </div>
    </div>
  </section>
</template>

<script setup>
const categories = [
  { id: 1, image: "/img/image8.png", label: "BODY WASH" },
  { id: 2, image: "/img/image9.png", label: "FACE SCRUB" },
  { id: 3, image: "/img/image10.png", label: "CLEANSER" },
];
</script>

<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-columns: repeat(
    auto-fit,
    minmax(300px, 1fr)
  ); /* Responsive grid */
  gap: 20px;
  padding: 20px;
}

.category {
  position: relative;
  overflow: hidden;
  border-radius: 10px;
  cursor: pointer;
}

.category__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.3s ease-in-out;
}

.category:hover .category__image {
  transform: scale(1.1); /* Subtle zoom effect on hover */
}

.category__overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.3);
  opacity: 0;
  transition: opacity 0.3s ease-in-out;
}

.category:hover .category__overlay {
  opacity: 1;
}

.category__text {
  color: white;
  font-size: 18px;
  font-weight: bold;
  text-transform: uppercase;
  border: 1px solid white;
  padding: 50px 20px;
}
</style>
