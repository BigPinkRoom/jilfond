<template>
  <div class="wrapper">
    <header class="header">
      <div class="header__logo">Жилфонд</div>
      <div class="header__user">Пользователь</div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Main',
  components: {},
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.wrapper {
  max-width: 1586px;
  margin: 0 auto;
}
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 46px;
  &__logo {
    color: $color-red;
    font-weight: 800;
    font-size: 32px;
  }
  &__user {
    padding-top: 6px;
  }
}
</style>
