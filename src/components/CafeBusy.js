import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00'],
      datasets: [
        {
          label: 'Café Usage',
          backgroundColor: '#467df8',
          data: [150, 120, 500, 200, 150, 20, 5]
        }
      ]
    }, {
      scales: {
        xAxes: [ {
          scaleLabel: {
            display: true,
            labelString: 'Time of Day'
          }
        }]
      }
    })
  }
}
