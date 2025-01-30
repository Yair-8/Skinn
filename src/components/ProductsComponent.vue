<template>
  <div :class="customClass">
    <ProductCard
      v-for="product in limitedProducts"
      :key="product.id"
      :id="product.id"
      :image="product.image"
      :name="product.name"
      :category="product.category"
      :price="product.price"
    />
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import ProductCard from "./ProductCard.vue";

const props = defineProps({
  limit: {
    type: Number,
    default: null,
  },
  customClass: {
    type: String,
    default: "products__container",
  },
});

const products = ref([]);
const limitedProducts = ref([]);

onMounted(async () => {
  try {
    const response = await fetch("/data/products.json");
    const allProducts = await response.json();
    products.value = allProducts;
    limitedProducts.value = props.limit
      ? allProducts.slice(0, props.limit)
      : allProducts;
  } catch (error) {
    console.error("Failed to fetch products:", error);
  }
});
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;

.products {
  // .products__container

  &__container {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1rem;
    width: 100%;
    //padding: 2rem;
    @media screen and (max-width: $mobileSmall) {
      padding: 0 0 20px 0;
    }
  }
}
</style>
