<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__content content">
        <div class="content-item">
          <div class="logo">
            <img src="../assets/images/Skinn®.svg" alt="Skinn logo" />
          </div>
          <div class="content-item__skinn">
            <div>
              <p>
                The wise man therefore always holds in these matters to this
                principle
              </p>
            </div>
            <div>
              <p>Designed by <span> Webestica</span></p>
              <p>Powered by <span> Webflow</span></p>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="title">
            <h6>Pages</h6>
          </div>
          <div class="content-item__pages">
            <div>
              <ul class="pages-item">
                <li><button @click="goToHome">Home</button></li>
                <li>
                  <button @click="goToShop">Shop All</button>
                </li>
                <li>
                  <button @click="goToStory">Our Story</button>
                </li>
                <li><button @click="goToBlog">Blog</button></li>
                <li><button>FAQs</button></li>
              </ul>
            </div>
            <div>
              <ul class="pages-item">
                <li>
                  <button>Contact Us</button>
                </li>
                <li>
                  <button>Instructions</button>
                </li>
                <li>
                  <button>Style Guide</button>
                </li>
                <li><button>Licenses</button></li>
                <li><button>Changelog</button></li>
              </ul>
            </div>
          </div>
        </div>

        <div class="content-item">
          <div class="title">
            <h6>Contact us</h6>
          </div>
          <div class="content-item__contacts">
            <div class="contacts-item">
              <h5 class="subtitle">
                Have questions or suggestions?
              </h5>
              <a href="mailto:hello@webestica.com">hello@webestica.com</a>
            </div>
            <div class="contacts-item">
              <h5 class="subtitle">
                Need assistance? Give us a call.
              </h5>
              <a href="tel:015982694756">+01 598 269 4756</a>
            </div>
          </div>
        </div>
        <div class="content-item">
          <div class="title">
            <h6>We're here for you</h6>
          </div>
          <div class="content-item__schedule">
            <div class="schedule-item">
              <p>Monday - Thursday: 9:30 - 18:00</p>
              <p>Friday: 9:30 - 15:00</p>
            </div>

            <div class="social">
              <div class="social__media">
                <ul class="icons">
                  <li>
                    <a href="https://www.facebook.com/">
                      <font-awesome-icon :icon="['fab', 'facebook']"
                    /></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/"
                      ><font-awesome-icon :icon="['fab', 'instagram']"
                    /></a>
                  </li>

                  <li>
                    <a href="https://www.pinterest.com"
                      ><font-awesome-icon :icon="['fab', 'pinterest']"
                    /></a>
                  </li>
                  <li>
                    <a href="https://www.x.com"
                      ><font-awesome-icon :icon="['fab', 'twitter']"
                    /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useRouter } from "vue-router";

const router = useRouter();

function goToHome() {
  router.push("/");
}
function goToShop() {
  router.push("/shop-all");
}
function goToStory() {
  router.push("/our-story");
}
function goToBlog() {
  router.push("/blog");
}
</script>

<style lang="scss" scoped>
@use "../assets/styles/common-styles/container.scss" as *;
@use "../assets/styles/common-styles/common.scss" as *;

.footer {
  font-size: 14px;
  background-color: $lightBrownColor;
  // .footer__container

  // .footer__container

  &__container {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 3rem 1rem;
    gap: 2rem;
  }

  // .footer__content

  &__content {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-content: space-between;
    gap: 5rem;
    @media screen and (max-width: 1150px) {
      gap: 2rem;
    }
    @media screen and (max-width: $tablet) {
      grid-template-columns: repeat(2, 1fr);
    }
    @media screen and (max-width: 510px) {
      grid-template-columns: repeat(1, 1fr);
    }
  }
}

.content-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  line-height: 1.3;
  @media screen and (max-width: $mobile) {
    gap: 0.5rem;
  }
  // .content-item__skinn

  &__skinn {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media screen and (max-width: $mobile) {
      gap: 1rem;
    }
  }

  // .content-item__pages

  &__pages {
    display: flex;
    flex-direction: row;
    gap: 3rem;
    @media screen and (max-width: $mobile) {
      gap: 1rem;
    }
    @media screen and (max-width: 510px) {
      flex-direction: column;
    }
  }

  // .content-item__contacts

  &__contacts {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media screen and (max-width: $mobile) {
      gap: 1rem;
    }
  }

  // .content-item__schedule

  &__schedule {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    @media screen and (max-width: $mobile) {
      gap: 1rem;
    }
  }
}
.pages-item {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  @media screen and (max-width: $mobile) {
    gap: 1rem;
  }
  @media screen and (max-width: 510px) {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
}
.schedule-item p {
  padding-bottom: 1rem;
  @media screen and (max-width: $mobile) {
    padding-bottom: 0.5rem;
  }
}
.contacts-item {
  transition: color 0.3s ease;
  a {
    display: inline-block;
    @media (any-hover: hover) {
      &:hover {
        color: $secondaryColor;
      }
    }
  }
}
.logo {
  padding-bottom: 1rem;
}
.title {
  font-size: 24px;
  padding-bottom: 1rem;
}
.subtitle {
  padding-bottom: 1rem;
  font-weight: 600;
}
.social {
  // .social__media

  &__media {
  }
}
.icons {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  gap: 1rem;
  a {
    display: inline-block;
    font-size: 28px;
    transition: transform 0.3s ease;
    @media (any-hover: hover) {
      &:hover {
        transform: scale(1.2);
      }
    }
  }
}
button {
  transition: color 0.3s ease;
  @media (any-hover: hover) {
    &:hover {
      color: $secondaryColor;
    }
  }
}
</style>
