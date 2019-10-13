import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Vending Machine 1'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [20, 80],
          backgroundColor: [
            '#968fff'
          ]
        }
      ]
    })
  }
}
