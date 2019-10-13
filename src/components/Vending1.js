import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Vending Machine 2'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [78, 22],
          backgroundColor: [
            '#FF6384'
          ]
        }
      ]
    })
  }
}
