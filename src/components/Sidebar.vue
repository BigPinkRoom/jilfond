<template>
  <div class="sidebar">
    <Search class="sidebar__search" @updateValue="getUsers"></Search>
    <Results></Results>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import Search from '@/components/Search';
import Results from '@/components/results/Results';

export default {
  name: 'Sidebar',
  components: {
    Search,
    Results,
  },
  methods: {
    ...mapActions(['getUsers']),
  },
};
</script>

<style lang="scss" scoped>
@import '@/assets/scss/variables.scss';

.sidebar {
  max-width: 290px;
  padding: 28px 30px 28px 20px;

  background-color: $color-grey-lighter;
  border-right: 1px solid $color-grey-light;

  &__search {
    margin-bottom: 22px;
  }
}
</style>
