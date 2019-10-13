import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Lab1', 'Lab2', 'Lab3', '0G.034', '0G.037', '02.032', '02.033'],
      datasets: [
        {
          label: 'Lux Level (Lux)',
          backgroundColor: '#467df8',
          data: [800, 500, 600, 300, 100, 700, 600]
        }
      ]
    }, {
      scales: {
        xAxes: [ {
          scaleLabel: {
            display: true,
            labelString: 'Lab'
          }
        }]
      }
    })
  }
}
