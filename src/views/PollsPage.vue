<template>
  <div id="polls-page">
    <h1>Andamento Partiti</h1>
  </div>
</template>

<script>
export default {
  name: 'PollsPage',
  data() {
    return {
      allPolls: null,
      loaded: false,
    };
  },
  mounted() {
    this.$api.get('/10').then((res) => {
      // object to array
      const apiData = res.data.map((poll) => Object.values(poll));
      // remove the first 3 values
      apiData.map((poll) => poll.splice(0, 3));
      // set to int all the values of the arrays
      const intApiData = apiData.map((poll) => poll.map((p) => Number(p)));
      this.loaded = true;
      this.allPolls = intApiData;
    });
  },
};
</script>

<style scoped>
#polls-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(170, 170, 170, 0.3);
}
</style>
