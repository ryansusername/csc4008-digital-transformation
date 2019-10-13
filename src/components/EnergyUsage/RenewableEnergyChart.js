import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Renewable', 'Other'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [30, 70],
          backgroundColor: [
            '#7bed9f'
          ]
        }
      ]
    })
  }
}
