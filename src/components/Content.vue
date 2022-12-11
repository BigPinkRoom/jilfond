<template>
  <div class="content">
    <img
      class="content__image"
      v-if="currentUser?.id"
      src="@/assets/images/image_big.svg"
      alt=""
    />
    <div class="content__text" v-if="currentUser?.id">
      <div class="content__title">{{ currentUser?.name }}</div>
      <div class="content__email">
        <span class="content__email--bold">email: </span
        >{{ currentUser?.email }}
      </div>
      <div class="content__phone">
        <span class="content__phone--bold">phone: </span
        >{{ currentUser?.phone }}
      </div>
      <div class="content__about">О себе:</div>
      <div class="content__about-text">
        {{ currentUser.company?.catchPhrase }}
      </div>
    </div>
    <div class="content__stub" v-if="!currentUser.id">
      Выберите сотрудника, чтобы посмотреть его профиль
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
  width: 100%;
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

  &__stub {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
  }
}
</style>
