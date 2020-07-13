<template>
  <div id="poll-table">
    <table class="homepage-table">
      <tr>
        <th class="table-labels">Data</th>
        <th class="table-labels">Sondaggista</th>
        <th class="table-labels">Campione</th>
        <th class="table-labels" style="color: rgb(232, 226, 39)">M5S</th>
        <th class="table-labels" style="color: rgb(255, 82, 87)">PD</th>
        <th class="table-labels" style="color: rgb(2, 161, 18)">LN</th>
        <th class="table-labels" style="color: rgb(60, 177, 255)">FI</th>
        <th class="table-labels" style="color: rgb(0, 0, 143)">FdI</th>
        <th class="table-labels" style="color: rgb(208, 0, 5)">LS</th>
        <th class="table-labels" style="color: rgb(245, 204, 0)">EU</th>
        <th class="table-labels" style="color: rgb(107, 204, 122)">EV</th>
        <th class="table-labels" style="color: rgb(255, 174, 33)">C</th>
        <th class="table-labels" style="color: rgb(0, 79, 255)">A</th>
        <th class="table-labels" style="color: rgb(255, 30, 150)">IV</th>
        <th class="table-labels" style="color: rgb(189, 201, 192)">Altri partiti</th>
        <th class="table-labels" style="color: rgb(119, 111, 120)">Vantaggio</th>
      </tr>
      <tr class="table-row" v-for="(poll, index) in tableData" :key="index">
        <th v-for="(element, index) in poll" :key="index">{{ element }}</th>
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
  height: 100%;
  width: 90%;
  margin: 15px auto 15px auto;
  border-left: 8px solid #69F5A5;
  border-radius: 10px;
  box-shadow: 2px 2px 10px grey;
  border-spacing: 0 15px;
}
.table-row {
  margin: 10px auto 10px auto;
}
.table-labels {
  font-size: 20px;
}
.table-row:hover {
  background-color: #69F5A5;
}
</style>
