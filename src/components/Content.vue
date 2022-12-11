<template>
  <div class="content">
    <img class="content__image" src="@/assets/images/image_big.svg" alt="" />
    <div class="content__text">
      <div class="content__title">{{ currentUser.name }}</div>
      <div class="content__email">
        <span class="content__email--bold">email: </span>{{ currentUser.email }}
      </div>
      <div class="content__phone">
        <span class="content__phone--bold">phone: </span>{{ currentUser.phone }}
      </div>
      <div class="content__about">О себе:</div>
      <div class="content__about-text">
        {{ currentUser.company.catchPhrase }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {
    ...mapState(['currentUser']),
  },
};
</script>

<style lang="scss">
@import '@/assets/scss/variables.scss';

.content {
  display: flex;
  align-items: flex-start;
  padding: 30px 22px;
  &__image {
    max-width: 424px;
    margin-right: 60px;
  }
  &__text {
    text-align: left;
  }
  &__title {
    margin-bottom: 10px;

    color: $color-black;
    font-weight: 600;
  }
  &__email {
    margin-bottom: 10px;

    font-size: 14px;
  }
  &__email--bold {
    color: $color-dark;
    font-weight: 600;
  }

  &__phone {
    margin-bottom: 20px;

    font-size: 14px;
  }

  &__phone--bold {
    color: $color-dark;
    font-weight: 600;
  }

  &__about {
    margin-bottom: 20px;

    color: $color-dark;
    font-weight: 600;
  }
}
</style>
