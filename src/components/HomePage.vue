<template>
  <div id="home-page">
    <h1>MetaSondaggi</h1>
    <h4>Il sondaggio più recente</h4>
    <table class="homepage-table">
      <tr>
        <th>Data</th>
        <th>Sondaggista</th>
        <th>Campione</th>
        <th>M5S</th>
        <th>PD</th>
        <th>LN</th>
        <th>FI</th>
        <th>FdI</th>
        <th>LS</th>
        <th>EU</th>
        <th>EV</th>
        <th>C</th>
        <th>A</th>
        <th>IV</th>
        <th>Altri partiti</th>
        <th>Vantaggio</th>
      </tr>
      <tr>
        <th v-for="(poll, index) in tableData" :key="index">{{ poll }}</th>
      </tr>
    </table>
    <div class="home-chart">
      <poll-chart v-if="loaded" :pollArray="pollArray" />
    </div>
  </div>
</template>

<script>
import pollChart from './PollChart.vue';

export default {
  name: 'HomePage',
  components: {
    'poll-chart': pollChart,
  },
  data() {
    return {
      tableData: null,
      pollArray: null,
      loaded: false,
    };
  },
  mounted() {
    this.$api.get('/1').then((res) => {
      this.pollArray = Object.keys(res.data[0]).map((poll) => res.data[0][poll]);
      this.pollArray.splice(0, 3);
      this.pollArray = this.pollArray.map((poll) => Number(poll));
      this.loaded = true;
      // eslint-disable-next-line prefer-destructuring
      this.tableData = res.data[0];
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
  background-color: rgba(84, 78, 84, 0.1);
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
