import { Line } from 'vue-chartjs'
import APIService from 'src/services/APIService.js'

export default {
  extends: Line,
  data () {
    return {
      energyusage: []
    }
  },
  methods: {
    async getEnergyUsage () {
      let response = await APIService.getEnergyFeed()
      if (!response.error) {
        this.energyusage = response
        console.log(this.energyusage)
        this.renderChart({
          labels: ['Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday', 'Monday'],
          datasets: [
            {
              label: 'Energy (kW)',
              backgroundColor: '#467df8',
              data: this.energyusage
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
      } else {
        console.log('error getting energy feed, see console')
      }
    }
  },
  mounted () {
    // Overwriting base render method with actual data.
    this.getEnergyUsage()
  }
}
