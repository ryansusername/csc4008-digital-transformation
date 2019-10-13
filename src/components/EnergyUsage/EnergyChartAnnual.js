import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  mounted () {
    this.renderChart({
      labels: ['2016', '2017', '2018'],
      datasets: [
        {
          label: 'Energy (kW)',
          backgroundColor: '#0abde3',
          data: [200, 230, 190]
        }
      ]
    }, {
      scales: {
        xAxes: [ {
          scaleLabel: {
            display: true,
            labelString: 'Year'
          }
        }]
      }
    })
  }
}
