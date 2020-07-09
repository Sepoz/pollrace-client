<script>
import { Bar } from 'vue-chartjs';

export default {
  name: 'PollChart',
  props: {
    pollForChart: {
      type: Array,
      required: true,
    },
  },
  extends: Bar,
  mounted() {
    this.renderChart({
      labels: ['M5S', 'PD', 'LN', 'FI', 'FdI', 'LS', 'EU', 'EV', 'C', 'A', 'IV', 'Altri partiti', 'Vantaggio'],
      datasets: [
        {
          data: this.pollForChart,
          barThickness: 35,
          label: '% di voti',
          backgroundColor: [
            'rgba(232, 226, 39, 0.5)',
            'rgba(255, 82, 87, 0.5)',
            'rgba(2, 161, 18, 0.5)',
            'rgba(60, 177, 255, 0.5)',
            'rgba(0, 0, 143, 0.5)',
            'rgba(208, 0, 5, 0.5)',
            'rgba(245, 204, 0, 0.5)',
            'rgba(107, 204, 122, 0.5)',
            'rgba(255, 174, 33, 0.5)',
            'rgba(0, 79, 255, 0.5)',
            'rgba(255, 30, 150, 0.5)',
            'rgba(189, 201, 192, 0.5)',
            'rgba(119, 111, 120, 0.5)',
          ],
          hoverBorderColor: 'rgba(45, 5, 126, 0.1)',
        },
      ],
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  },
};
</script>
