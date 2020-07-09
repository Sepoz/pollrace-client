<template>
  <div>
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
  </div>
</template>

<script>
export default {
  name: 'PollTable',
  props: {
    tableData: {
      required: true,
    },
  },
};
</script>

<style scoped>
.homepage-table {
  height: 45%;
  width: 100%;
  margin-top: 5%;
  border-top: 1px solid;
  border-bottom: 3px solid;
  box-shadow: 2px 2px 10px grey;
}
</style>
