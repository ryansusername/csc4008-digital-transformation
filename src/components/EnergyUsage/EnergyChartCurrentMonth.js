import { Line } from 'vue-chartjs'

export default {

  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '23', '24', '25', '26', '27', '28', '29', '30'],
      datasets: [
        {
          label: 'Energy (kW)',
          backgroundColor: '#0abde3',
          data: [160, 300, 450, 270, 60, 30, 100, 450, 270, 60, 30, 100, 300, 450, 270, 60, 30, 100, 450, 270, 60, 30, 300, 450, 270, 60, 30, 100, 450, 270, 60, 30]
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
