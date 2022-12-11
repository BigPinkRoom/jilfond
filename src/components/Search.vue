<template>
  <div class="search">
    <div class="search__title">{{ title }}</div>
    <div>
      <input
        class="search__field"
        type="text"
        :placeholder="placeholder"
        @input="updateValue($event.target.value)"
      />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'Search',
  props: {
    placeholder: {
      type: String,
      default: 'Введите Id или имя',
    },
    title: {
      type: String,
      default: 'Поиск сотрудников',
    },
  },
  methods: {
    ...mapActions(['setTextField']),
    updateValue(value) {
      this.setTextField(Boolean(value));
      this.$emit('updateValue', value);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.search {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  &__title {
    display: flex;
    margin-bottom: 22px;

    color: $color-dark;
    font-weight: 600;
    font-size: 16px;
  }
  &__field {
    display: flex;
    width: 240px;
    padding: 16px;

    outline: none;
    border: 1px solid $color-grey-light;
    border-radius: 8px;
  }
}
</style>
