import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    this.renderChart({
      labels: ['Renewable', 'Other'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [20, 80],
          backgroundColor: [
            '#7bed9f'
          ]
        }
      ]
    })
  }
}
