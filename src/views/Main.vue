<template>
  <div class="wrapper">
    <div class="loader-wrapper" :class="objectStyle">
      <div class="loader"></div>
    </div>
    <header class="header">
      <div class="header__logo">Жилфонд</div>
      <div class="header__user">Пользователь</div>
    </header>
    <div class="main">
      <Sidebar></Sidebar>
      <Content></Content>
    </div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar';
import Content from '@/components/Content';
import { mapState } from 'vuex';

export default {
  name: 'Main',
  components: {
    Sidebar,
    Content,
  },
  computed: {
    ...mapState(['loading']),
    objectStyle() {
      return {
        'loader-wrapper--active': this.loading,
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.wrapper {
  max-width: 1586px;
  margin: 0 auto;
}

.loader-wrapper {
  position: absolute;
  display: none;

  width: 99%;
  height: 96%;
  background-color: rgba(255, 255, 255, 0.7);
}

.loader-wrapper--active {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loader {
  position: absolute;
  width: 48px;
  height: 48px;
  border: 5px solid $color-grey;
  border-bottom-color: transparent;
  border-radius: 50%;
  display: inline-block;
  box-sizing: border-box;
  animation: rotation 1s linear infinite;
}

@keyframes rotation {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}

.main {
  display: flex;
  min-height: calc(100vh - 130px);
  border-radius: 10px;
  -webkit-box-shadow: 0px 0px 13px -6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 13px -6px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 13px -6px rgba(34, 60, 80, 0.2);
}
.header {
  display: flex;
  justify-content: space-between;
  margin-top: 46px;
  margin-bottom: 30px;
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
