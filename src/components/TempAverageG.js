import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['Lab1', 'Lab2', 'Lab3', '0G.034', '0G.037', '02.032', '02.033'],
      datasets: [
        {
          label: 'Temperature (Celsius)',
          backgroundColor: '#467df8',
          data: [23, 19, 17, 18, 23, 19, 17]
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
