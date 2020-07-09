<template>
  <div id="home-page">
    <h1>MetaSondaggi</h1>
    <h4>Il sondaggio più recente</h4>
    <poll-table :tableData="tableData" />
    <div class="home-chart">
      <poll-bar-chart v-if="loaded" :pollForChart="pollForChart" />
    </div>
  </div>
</template>

<script>
import PollBarChart from '../components/PollBarChart.vue';
import PollTable from '../components/PollTable.vue';

export default {
  name: 'HomePage',
  components: {
    'poll-bar-chart': PollBarChart,
    'poll-table': PollTable,
  },
  data() {
    return {
      tableData: null,
      pollForChart: null,
      loaded: false,
    };
  },
  mounted() {
    this.$api.get('/1').then((res) => {
      const apiData = Object.keys(res.data[0]).map((poll) => res.data[0][poll]);
      apiData.splice(0, 3);
      const intApiData = apiData.map((poll) => Number(poll));
      this.pollForChart = intApiData;
      this.loaded = true;
      [this.tableData] = res.data;
    }).catch((err) => {
      console.log(err);
    });
  },
};
</script>

<style scoped>
#home-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(170, 170, 170, 0.3);
}
h1 {
  margin: 10px;
  font-size: 48px;
}
.homepage-table {
  height: 45%;
  width: 100%;
  margin-top: 5%;
  border-top: 1px solid;
  border-bottom: 3px solid;
  box-shadow: 2px 2px 10px grey;
}
.home-chart {
  max-width: 50%;
  margin: 0 auto;
}
</style>
