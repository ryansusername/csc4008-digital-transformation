import { Doughnut } from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Lab 2 Usage'],
      datasets: [
        {
          data: [23, 77],
          backgroundColor: [
            '#3ae25f'
          ]
        }
      ]
    })
  }
}
