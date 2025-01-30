<template>
  <div class="product-card" @click="goToProduct">
    <div class="product-card__image">
      <img :src="image" :alt="name" />
    </div>
    <div class="product-card__info">
      <div class="product-card__content">
        <p class="product-card__category">{{ category }}</p>
        <p class="product-card__price">{{ price }}</p>
      </div>

      <p class="product-card__name">{{ name }}</p>
    </div>
    <button class="product-card__button button">Shop now</button>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const { id, image, name, category, price } = defineProps({
  id: {
    type: Number,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
});
const router = useRouter();

function goToProduct() {
  router.push({ name: "product-detail", params: { id } });
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;

.product-card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: $lightBrownColor;

  border-radius: 10px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.15);
}

.product-card__image img {
  width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 1rem;
}
.product-card__content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}
.product-card__info {
  text-align: start;
  padding: 10px;
}

.product-card__category {
  font-size: 0.9rem;
  color: #8c8c8c;
  text-transform: uppercase;
  margin-bottom: 0.5rem;
}

.product-card__price {
  font-size: 1.1rem;
}

.product-card__name {
  font-size: 1rem;

  margin-bottom: 1rem;
}

.product-card__button {
  background-color: #f1ebe7;
  border-radius: 5px;
}

.product-card__button:hover {
  background-color: rgba($secondaryColor, 0.7);
  color: #fff;
}
</style>
