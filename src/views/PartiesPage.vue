<template>
  <div id="parties-page">
    <h1>Scopri i partiti</h1>
    <news-list />
  </div>
</template>

<script>
import NewsList from '../components/NewsList.vue';

export default {
  name: 'PartiesPage',
  components: {
    'news-list': NewsList,
  },
};
</script>

<style scoped>
</style>
