import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Lab 3 Usage'],
      datasets: [
        {
          label: 'Lab Usage (%)',
          data: [42, 58],
          backgroundColor: [
            '#5564ff'
          ]
        }
      ]
    })
  }
}
