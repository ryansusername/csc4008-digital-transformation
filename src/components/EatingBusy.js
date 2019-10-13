import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  mounted () {
    // Overwriting base render method with actual data.
    this.renderChart({
      labels: ['09:00', '11:00', '13:00', '15:00', '17:00', '19:00', '21:00'],
      datasets: [
        {
          label: 'Eating Area Usage',
          backgroundColor: '#467df8',
          data: [50, 100, 450, 50, 200, 20, 10]
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
