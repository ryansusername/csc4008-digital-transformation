import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
      datasets: [
        {
          label: 'Energy (kW)',
          backgroundColor: '#0abde3',
          data: [160, 300, 450, 270, 60, 30, 100]
        }
      ]
    }, {
      scales: {
        xAxes: [ {
          scaleLabel: {
            display: true,
            labelString: 'Day'
          }
        }]
      }
    })
  }
}
