<template>
  <div class="content">
    <img class="content__image" src="@/assets/images/image_big.svg" alt="" />
    <div class="content__text">
      <div class="content__title">Ervin Howell</div>
      <div class="content__email">
        <span class="content__email--bold">email: </span>Shanna@melissa.tv
      </div>
      <div class="content__phone">
        <span class="content__phone--bold">phone: </span>010-692-6593 x09125
      </div>
      <div class="content__about">О себе:</div>
      <div class="content__about-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </div>
    </div>
  </div>
</template>

<script>
export default {};
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
