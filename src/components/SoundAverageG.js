import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Lab1', 'Lab2', 'Lab3', '0G.034', '0G.037', '02.032', '02.033'],
      datasets: [
        {
          label: 'Sound Level (dB)',
          backgroundColor: '#467df8',
          data: [51, 30, 41, 32, 49, 43, 46]
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
