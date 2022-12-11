<template>
  <div class="results-item" :class="objectStyle">
    <img
      class="results-item__image"
      src="@/assets/images/image_small.svg"
      alt=""
    />
    <div class="results-item__wrapper">
      <div class="results-item__title">{{ user.username }}</div>
      <div class="results-item__email">{{ user.email }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResultsItem',
  props: {
    content: {
      type: Object,
      default() {
        return {};
      },
    },
    user: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    objectStyle() {
      return {
        // 'results-item--active':
      };
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.results-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 274px;
  height: 70px;

  background-color: $color-white;
  border-radius: 10px;
  cursor: pointer;
  -webkit-box-shadow: 0px 0px 13px -6px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 0px 13px -6px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 0px 13px -6px rgba(34, 60, 80, 0.2);

  &:hover {
    background-color: $color-grey-light-small;
    outline: 1px solid $color-grey-light-small;
  }

  &--active {
    background-color: $color-grey-light-small;
    outline: 1px solid $color-grey-light-small;
  }

  &__wrapper {
    margin: 0 auto 0 0;
    padding-left: 16px;
    padding-right: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }

  &__image {
    background-color: $color-white;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
  }

  &__title {
    text-align: left;
    color: $color-dark;
    font-weight: 600;
    font-size: 14px;
  }

  &__email {
    font-size: 14px;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
  }
}
</style>
