<template>
  <div id="polls-page">
    <h1>Andamento Partiti</h1>
    <poll-table :tableData="tableData" />
  </div>
</template>

<script>
import PollTable from '../components/PollTable.vue';

export default {
  name: 'PollsPage',
  components: {
    'poll-table': PollTable,
  },
  data() {
    return {
      tableData: null,
      allPolls: null,
      loaded: false,
    };
  },
  mounted() {
    this.$api.get('/30').then((res) => {
      // object to array
      const apiData = res.data.map((poll) => Object.values(poll));
      // remove the first 3 values
      apiData.map((poll) => poll.splice(0, 3));
      // set to int all the values of the arrays
      const intApiData = apiData.map((poll) => poll.map((p) => Number(p)));
      this.loaded = true;
      this.allPolls = intApiData;
      this.tableData = res.data;
      console.log(this.tableData);
    }).catch((err) => {
      console.log(err);
    });
  },
};
</script>

<style scoped>
</style>
