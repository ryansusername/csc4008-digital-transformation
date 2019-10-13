<template>
  <q-page>
    <q-toolbar color="dark">
      <q-icon name="offline_bolt" style="font-size: 35px"/>
      <q-toolbar-title>
        Energy Usage
      </q-toolbar-title>
    </q-toolbar>

    <div>
      <q-card class="bigger q-pa-sm q-ma-lg">
        <q-item>
          <q-item-main>
            <q-option-group inline
              type="radio"
              v-model="energyViewType"
              :options="energyViewOptions"/>
          </q-item-main>
          <q-item-side>
            <q-btn v-if="userType==='admin'"
              label="Energy Controls"
              @click="onShowEnergyControls"/>
            <q-btn v-if="userType==='admin'"
              label="Live Energy Usage"
              @click="onShowEnergyPerRoom"/>
          </q-item-side>
        </q-item>
      </q-card>

      <div v-if="energyViewType=== 'week'">
          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 350px; height: 300px">
            <q-card-title><b>Average Energy This Week</b></q-card-title>
            <q-card-separator/>
            <q-card-main>
              <q-item>
                <q-item-main class="q-display-4 text-center">
                  353
                </q-item-main>
                <q-item-side class="q-display-1 text-bottom">
                  kW
                </q-item-side>
              </q-item>
            </q-card-main>
          </q-card>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 600px; height: 300px">
            <EnergyChartWeekly :height="200"/>
          </q-card>

          <EquipmentUsage1/>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 600px; height: 300px">
            <RenewableEnergyWeekly :height="200"/>
          </q-card>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 350px; height: 300px">
            <q-card-title><b>Renewable Energy Ratio</b></q-card-title>
            <RenewableEnergyChart :height="250"/>
          </q-card>

          <EnergySuggestions/>
      </div>
      <div v-if="energyViewType=== 'month'">
        <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 350px; height: 300px">
          <q-card-title><b>Average Energy This Month</b></q-card-title>
          <q-card-separator/>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-4 text-center">
                311
              </q-item-main>
              <q-item-side class="q-display-1 text-bottom">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 600px; height: 300px">
            <EnergyChartMonthly :height="200"/>
          </q-card>

          <EquipmentUsage2/>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 600px; height: 300px">
            <RenewableEnergyMonthly :height="200"/>
          </q-card>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 350px; height: 300px">
            <q-card-title><b>Renewable Energy Ratio</b></q-card-title>
            <RenewableEnergyChartMonthly :height="250"/>
          </q-card>

          <EnergySuggestions/>
      </div>

      <div v-if="energyViewType=== 'year'">
        <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 350px; height: 300px">
          <q-card-title><b>Average Energy This Year</b></q-card-title>
          <q-card-separator/>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-4 text-center">
                340
              </q-item-main>
              <q-item-side class="q-display-1 text-bottom">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 600px; height: 300px">
            <EnergyChartAnnual :height="200"/>
          </q-card>

          <EquipmentUsage3/>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 600px; height: 300px">
            <RenewableEnergyAnnual :height="200"/>
          </q-card>

          <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 350px; height: 300px">
            <q-card-title><b>Renewable Energy Ratio</b></q-card-title>
            <RenewableEnergyChartAnnual :height="250"/>
          </q-card>
          <EnergySuggestions/>
      </div>
    </div>
    <div>
      <q-modal v-model="basicModal" :content-css="{maxWidth: '1100px'}">
        <div style="padding: 50px">
          <EnergyPerRoom ref="energyPerRoom"/>
        </div>
      </q-modal>
      <q-modal v-model="basicModal2" :content-css="{maxWidth: '500px'}">
        <div style="padding: 50px">
          <EnergyControls ref="energyControls"/>
        </div>
      </q-modal>
  </div>
  </q-page>
</template>

<script>
import EnergyChartWeekly from 'src/components/EnergyUsage/EnergyChartWeekly.js'
import EnergyChartMonthly from 'src/components/EnergyUsage/EnergyChartMonthly.js'
import EnergyChartAnnual from 'src/components/EnergyUsage/EnergyChartAnnual.js'

import RenewableEnergyChart from 'src/components/EnergyUsage/RenewableEnergyChart.js'
import RenewableEnergyChartMonthly from 'src/components/EnergyUsage/RenewableEnergyChartMonthly.js'
import RenewableEnergyChartAnnual from 'src/components/EnergyUsage/RenewableEnergyChartAnnual.js'

import RenewableEnergyWeekly from 'src/components/EnergyUsage/RenewableEnergyWeekly.js'
import RenewableEnergyMonthly from 'src/components/EnergyUsage/RenewableEnergyMonthly.js'
import RenewableEnergyAnnual from 'src/components/EnergyUsage/RenewableEnergyAnnual.js'

import EquipmentUsage1 from 'src/components/EnergyUsage/EquipmentUsage1.vue'
import EquipmentUsage2 from 'src/components/EnergyUsage/EquipmentUsage2.vue'
import EquipmentUsage3 from 'src/components/EnergyUsage/EquipmentUsage3.vue'

import EnergySuggestions from 'src/components/EnergyUsage/EnergySuggestions.vue'
import EnergyPerRoom from 'src/components/EnergyUsage/EnergyPerRoom.vue'
import EnergyControls from 'src/components/EnergyUsage/EnergyControls.vue'

import APIService from 'src/services/APIService.js'

export default {
  name: 'EnergyUsage',
  data () {
    return {
      rooms: [
      ],
      location: '',
      basicModal: false,
      basicModal2: false,
      userTypes: [
        {
          label: 'admin',
          value: 'admin'
        },
        {
          label: 'student',
          value: 'student'
        }
      ],
      energyViewType: 'week',
      energyViewOptions: [
        {
          label: 'Week View',
          value: 'week'
        },
        {
          label: 'Month View',
          value: 'month'
        },
        {
          label: 'Year View',
          value: 'year'
        }
      ]
    }
  },
  components: {
    EnergyChartWeekly,
    EnergyChartMonthly,
    EnergyChartAnnual,
    RenewableEnergyChart,
    RenewableEnergyChartMonthly,
    RenewableEnergyChartAnnual,
    RenewableEnergyWeekly,
    RenewableEnergyMonthly,
    RenewableEnergyAnnual,
    EquipmentUsage1,
    EquipmentUsage2,
    EquipmentUsage3,
    EnergySuggestions,
    EnergyPerRoom,
    EnergyControls
  },
  computed: {
    userType: {
      get () {
        return this.$store.state.user.userType
      },
      set (val) {
        this.$store.commit('user/setUserType', val)
      }
    }
  },
  methods: {
    async getAllRooms () {
      let response = await APIService.getAllRooms()
      if (!response.error) {
        this.rooms = response
        console.log(JSON.stringify(this.rooms))
      } else {
        console.log('error getting rooms, see console')
      }
    },
    async getCurrentLocation () {
      let response = await APIService.getCurrentLocation(0)
      if (!response.error) {
        this.location = response
        console.log(JSON.stringify(this.location))
      } else {
        console.log('error getting rooms, see console')
      }
    },
    onShowEnergyPerRoom () {
      this.basicModal = true
    },
    onShowEnergyControls () {
      this.basicModal2 = true
    }
  },
  mounted () {
    this.getAllRooms()
    this.getCurrentLocation()
  }
}
</script>

<style scoped>

</style>
