import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
      datasets: [
        {
          label: 'Renewable Energy (kW)',
          backgroundColor: '#7bed9f',
          data: [70, 100, 40, 30, 10, 30, 50]
        },
        {
          label: 'Other Energy (kW)',
          backgroundColor: '#dfe4ea',
          data: [50, 200, 130, 200, 20, 10, 100]
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
