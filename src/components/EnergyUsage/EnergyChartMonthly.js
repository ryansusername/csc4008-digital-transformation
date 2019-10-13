import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dev'],
      datasets: [
        {
          label: 'Energy (kW)',
          backgroundColor: '#0abde3',
          data: [200, 200, 170, 150, 180, 130, 100, 90, 80, 110, 180, 220]
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
