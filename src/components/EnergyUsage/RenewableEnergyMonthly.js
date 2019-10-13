import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
      datasets: [
        {
          label: 'Energy (kW)',
          backgroundColor: '#dfe4ea',
          data: [100, 150, 120, 100, 80, 60, 100, 40, 90, 100, 120, 200]
        },
        {
          label: 'Energy (kW)',
          backgroundColor: '#7bed9f',
          data: [200, 200, 170, 150, 180, 130, 80, 90, 80, 110, 180, 220]
        }
      ]
    }, {
      scales: {
        xAxes: [ {
          scaleLabel: {
            display: true,
            labelString: 'Month'
          }
        }]
      }
    })
  }
}
