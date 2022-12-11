<template>
  <div class="results">
    <div class="results__title">Результаты</div>
    <div class="results__total" v-if="!users.length">Начните поиск</div>
    <ResultsItem
      v-for="user in users"
      :key="user.id"
      :user="user"
      class="results__item"
      @click.native="setUser(user)"
    ></ResultsItem>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ResultsItem from '@/components/results/ResultsItem';
export default {
  name: 'Results',
  components: {
    ResultsItem,
  },
  computed: {
    ...mapState(['users']),
  },
  methods: {
    ...mapActions(['setUser']),
    setCurrentUser(user) {
      this.setUser(user);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.results {
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
  &__total {
    display: flex;

    font-size: 14px;
  }
  &__item {
    margin-bottom: 18px;
  }
}
</style>
