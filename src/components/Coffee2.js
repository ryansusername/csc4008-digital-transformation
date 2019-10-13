import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Coffee Machine 3'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [50, 50],
          backgroundColor: [
            '#5c0007'
          ]
        }
      ]
    })
  }
}
