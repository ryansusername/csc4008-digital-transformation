import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Vending Machine 3'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [42, 58],
          backgroundColor: [
            '#61e770'
          ]
        }
      ]
    })
  }
}
