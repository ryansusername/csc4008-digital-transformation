<template>
  <q-page padding class="row items-start">
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px; height: 602px">
      <q-card-title>
        <b> Energy Usage </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-title class="relative-position">
        <q-btn label="Energy Usage" to="/EnergyUsage" fab color="primary" icon="arrow_forward_ios" class="absolute" style="top: 0; right: 8px; transform: translateY(-110%);"/>
      </q-card-title>
      <p style="text-align: center; font-size:110%"> <u>Building Energy Usage:</u></p>
      <EnergyChart :height="180"></EnergyChart> <br>
      <q-card-separator />
      <q-card-main>
        <br>
        <p> <b style="padding-right: 30px">WARNINGS:</b>
          <q-chip closable color="orange-7">
            High peak energy usage on Thursday
          </q-chip>
        </p>
      </q-card-main>
      <q-card-separator />
      <q-card-main>
        <br>
        <p> <b>Recommendations:</b></p>
        <q-chip closable color="teal-5">
          Ensure building achieves maximum efficiency mid week
        </q-chip>
      </q-card-main>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px;">
      <q-card-title>
        <b> HVAC and Lighting </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-title class="relative-position">
        <q-btn label="HVAC and Lighting" to="/HVACandLighting" fab color="primary" icon="arrow_forward_ios" class="absolute" style="top: 0; right: 8px; transform: translateY(-110%);"/>
      </q-card-title>
      <q-card-main>
        <p style="text-align: center; font-size:110%"> <u>Current room statistics:</u></p>
        <div class="row">
          <div class="col-sm-4" style="background-color:rgba(70,125,248,0.12);">
            <p style="font-size:150%; padding: 10px 0 0 20px;">Temp: {{ currentTemp }}</p>
          </div>
          <div class="col-sm-4" style="background-color:rgba(160,173,248,0.22);">
            <p style="font-size:150%; padding: 10px 0 0 20px;">Light: {{ currentLight }}</p>
          </div>
          <div class="col-sm-4" style="background-color:rgba(160,173,248,0.22);">
            <p style="font-size:150%; padding: 10px 0 0 20px;">Sound: {{ currentSound }}</p>
          </div>
        </div>
      </q-card-main>
      <q-card-separator />
      <q-card-main>
        <p style="font-size:110%"> <b>Room Preferences:</b></p>
      </q-card-main>
      <div class="row">
        <div class="col-sm-6" style="background-color:rgba(204,211,248,0.12);">
          <q-list link>
            <br>
            <q-item>
              <q-item-tile style="padding-right: 10px"> Temperature:  </q-item-tile>
              <!-- <q-btn-dropdown color = "blue" label="temp">-->
              <q-select
                color = "blue"
                v-model="temper"
                :options="TempOptions"
              />
              <!--</q-btn-dropdown>-->
            </q-item>
            <q-item main>
              <q-item-tile style="padding-right: 10px"> Brightness: </q-item-tile>
              <q-select
                color = "blue"
                v-model="lighter"
                :options="LightOptions"
              />
            </q-item>
            <br>
          </q-list>
        </div>
        <div class="col-sm-6" style="background-color:rgba(204,211,248,0.12);">
          <p style="text-align: center; font-size:110%; padding: 10px 0 0 0; margin:0"> Weather:</p>
          <q-icon name="cloud" color="grey" size="130px" style="padding: 0 0 0 60px"/>
        </div>
      </div>
      <br>
      <q-card-separator />
      <q-card-main>
        <br>
        <p style="text-align: center; font-size:110%"> <u>Building Average:</u></p>
        <div class="row">
          <div class="col-sm-4" style="background-color:rgba(70,125,248,0.12);">
            <p style="font-size:150%; padding: 10px 0 0 20px;">Temp: 20</p>
          </div>
          <div class="col-sm-4" style="background-color:rgba(160,173,248,0.22);">
            <p style="font-size:150%; padding: 10px 0 0 20px;">Light: Dim</p>
          </div>
          <div class="col-sm-4" style="background-color:rgba(160,173,248,0.22);">
            <p style="font-size:150%; padding: 10px 0 0 20px;">Sound: Loud</p>
          </div>
        </div>
      </q-card-main>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px; height: 602px">
      <q-card-title>
        <b> Safety and Security </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-title class="relative-position">
        <q-btn label="Safety and Security" to="/SafetyandSecurity" fab color="primary" icon="arrow_forward_ios" class="absolute" style="top: 0; right: 8px; transform: translateY(-110%);"/>
      </q-card-title>
      <br>
      <div v-if="userType==='admin'">
        <div class="row justify-center">
          <q-btn :loading="progress" color="red" @click="progress = true" size="xl">
            Emergency Building Alarm
            <span slot="loading">
          <q-spinner-puff class="on-left" />
          Alarm is sounding..
        </span>
          </q-btn>
        </div>
        <br>
        <div class="row justify-center">
          <q-btn :disable="!progress" color="faded" @click="progress = false" label="Stop Alarm" />
        </div>
      </div>
      <br>
      <br>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Building Status:</u></p>
      <br>
      <div class="row">
        <div class="col-sm-6">
          <q-btn label="Fire" size="xl" class="full-width" color="green"/>
        </div>
        <div class="col-sm-6">
          <q-btn label="Electricity" size="xl" class="full-width" color="orange"/>
        </div>
      </div>
      <q-card-main>
        <br> <br>
        <p> <b>WARNINGS:</b></p>
        <q-chip closable color="orange-7">
          Heating electrical fault in room 0G.018
        </q-chip>
      </q-card-main>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px">
      <q-card-title>
        <b> Space Allocation </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-title class="relative-position">
        <q-btn label="Space Allocation" to="/SpaceAllocation" fab color="primary" icon="arrow_forward_ios" class="absolute" style="top: 0; right: 8px; transform: translateY(-110%);"/>
      </q-card-title>
      <div class="row">
          <div class="col-sm-9" style="background-color:rgba(204,211,248,0.12);">
            <q-list link>
              <br>
              <q-item>
                <!-- <q-btn-dropdown color = "blue" label="temp">-->
                <q-select
                  color = "blue"
                  float-label="Select room:"
                  v-model="roomtemp"
                  :options="RoomOptions"
                />
                <!--</q-btn-dropdown>-->
              </q-item>
              <q-item main>
                <q-select
                  color = "blue"
                  float-label="Select time:"
                  v-model="timetemp"
                  :options="TimeOptions"
                />
              </q-item>
              <br>
            </q-list>
          </div>
        <div class="col-sm-3 row" style="background-color:rgba(0,0,0,0);">
          <q-btn label="Book" size="30px" class="block" color="blue" @click="bookingAppear"/>
        </div>
      </div>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Active Bookings:</u></p>
      <q-card-main>
        <q-chip color="green-6">
          {{ this.booking }}
        </q-chip>
      </q-card-main>
      <br>
      <q-card-separator />
      <br> <br>
      <div class="row">
        <div class="col-sm-4">
          <SpaceChart :height="400"></SpaceChart>
        </div>
        <div class="col-sm-4">
          <SpaceChart1 :height="400"></SpaceChart1>
        </div>
        <div class="col-sm-4">
          <SpaceChart2 :height="400"></SpaceChart2>
        </div>
      </div>
      <br> <br> <br>
      <p style="text-align: center; font-size:110%"> <u>Eating Area Space:</u></p>
      <q-progress :percentage="40" stripe animate color="secondary" :buffer="buffer" height="20px"/>
      <br> <br>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px;">
      <q-card-title>
        <b> Amenities </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-title class="relative-position">
        <q-btn label="Amenities" to="/Amenities" fab color="primary" icon="arrow_forward_ios" class="absolute" style="top: 0; right: 8px; transform: translateY(-110%);"/>
      </q-card-title>
      <q-card-main>
        <p style="text-align: center; font-size:110%"> <u>QUB Wallet Balance:</u></p>
        <br>
        <div class="label">
          £20.00
        </div>
      </q-card-main>
      <q-card-separator />
      <br> <br>
      <p style="text-align: center; font-size:110%"> <u>Smart Café Queue:</u></p>
      <q-progress :percentage="40" stripe animate color="indigo-5" :buffer="buffer" height="20px"/>
      <br> <br>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Quick Food Order:</u></p>
      <br>
      <table style="width:100%">
        <tr>
          <th>Meal</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td>Chicken and Chips</td>
          <td>£3.50</td>
        </tr>
        <tr>
          <td>55-Day dry-aged Ribeye</td>
          <td>£150</td>
        </tr>
        <tr>
          <td>Lasagne</td>
          <td>£4.20</td>
        </tr>
      </table>
      <br>
      <br>
      <div class="row">
        <div class="col-sm-7">
          <q-list link>
            <br>
            <q-item-main>
              <q-select
                color = "blue"
                float-label="Select meal:"
                v-model="mealtemp"
                :options="MealOptions"
              />
            </q-item-main>
            <br>
          </q-list>
        </div>
        <div class="col-sm-5">
          <q-item-main>
            <q-btn label="Order" size="43px" class="full-width" color="blue" @click="orderAppear"/>
          </q-item-main>
        </div>
      </div>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Active Orders:</u></p>
      <q-card-main>
        <q-chip color="green-6">
          {{ this.order }}
        </q-chip>
      </q-card-main>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px">
      <q-card-title>
        <b> Account Management </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-title class="relative-position">
        <q-btn label="Amenities" to="/AccountManagement" fab color="primary" icon="arrow_forward_ios" class="absolute" style="top: 0; right: 8px; transform: translateY(-110%);"/>
      </q-card-title>
      <q-input v-model="text" float-label="Enter email address" />
      <br>
      <q-input v-model="text" float-label="Enter old password" />
      <br>
      <q-input v-model="text" float-label="Enter new password" />
      <br> <br>
      <div class="row justify-center">
        <q-btn label="Change Password" to="/Login" color="blue" size="lg"/>
      </div>
      <br> <br>
    </q-card>
  </q-page>
</template>

<style>
</style>

<script>
import EnergyChart from 'src/components/EnergyChart.js'
import SpaceChart from 'src/components/SpaceChart'
import SpaceChart1 from 'src/components/SpaceChart1'
import SpaceChart2 from 'src/components/SpaceChart2'
import APIService from '../services/APIService'

export default {
  name: 'PageIndex',
  components: {
    EnergyChart,
    SpaceChart,
    SpaceChart1,
    SpaceChart2
  },
  data () {
    return {
      progress: false,
      buffer: 0,
      text: '',
      temper: 16,
      lighter: 'Dark',
      sound: 'Quiet',
      roomtemp: '0G.034',
      timetemp: '09:00',
      mealtemp: 'Chicken and Chips',
      TempOptions: [{label: '16', value: 16}, {label: '17', value: 17}, {label: '18', value: 18},
        {label: '19', value: 19}, {label: '20', value: 20}, {label: '21', value: 21}, {label: '22', value: 22}, {label: '23', value: 23}],
      SoundOptions: [{label: 'Quiet', value: 'Quiet'}, {label: 'Medium', value: 'Medium'}, {label: 'Loud', value: 'Loud'}],
      LightOptions: [{label: 'Dark', value: 'Dark'}, {label: 'Medium', value: 'Medium'}, {label: 'Bright', value: 'Bright'}],
      RoomOptions: [{label: '0G.037', value: '0G.037'}, {label: '0G.034', value: '0G.034'}, {label: '02.032', value: '02.032'}, {label: '02.033', value: '02.033'}],
      TimeOptions: [{label: '09:00', value: '09:00'}, {label: '10:00', value: '10:00'}, {label: '14:00', value: '14:00'}],
      MealOptions: [{label: 'Chicken and Chips', value: 'Chicken and Chips'}, {label: '55-Day dry-aged Ribeye', value: '55-Day dry-aged Ribeye'}, {label: 'Lasagne', value: 'Lasagne'}],
      userTypes: [{label: 'admin', value: 'admin'}, {label: 'student', value: 'student'}],
      order: 'No Active Orders..',
      booking: 'No Active Bookings..',
      currentLocation: 0,
      currentTemp: 0,
      currentLight: 'nil',
      currentSound: 'nil',
      wallet: 0
    }
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
    orderAppear () {
      this.order = 'Order: ' + this.mealtemp
    },
    bookingAppear () {
      this.booking = 'Booking: ' + this.roomtemp + ', Time: ' + this.timetemp
    },
    async getCurrentLocation (id) {
      let response = await APIService.getCurrentLocation(id)
      if (!response.error) {
        this.currentLocation = response
        console.log(response)
      } else {
        console.log('error getting rooms, see console')
      }
    },
    async roomTemp () {
      let response = await APIService.getRoomTemp(1)
      if (!response.error) {
        this.currentTemp = response
        console.log(response)
      } else {
        console.log('error getting rooms, see console')
      }
    },
    async roomSound () {
      let response = await APIService.getRoomSound(1)
      if (!response.error) {
        if (response === 1) {
          this.currentSound = 'Quiet'
        } else if (response === 2) {
          this.currentSound = 'Medium'
        } else {
          this.currentSound = 'Loud'
        }
        console.log(response)
      } else {
        console.log('error getting rooms, see console')
      }
    },
    async roomLight () {
      let response = await APIService.getRoomLight(1)
      if (!response.error) {
        if (response === 1) {
          this.currentLight = 'Dark'
        } else if (response === 2) {
          this.currentLight = 'Medium'
        } else {
          this.currentLight = 'Bright'
        }
        console.log(response)
      } else {
        console.log('error getting rooms, see console')
      }
    },
    async walletBalance () {
      let response = await APIService.getWalletBalance(1)
      if (!response.error) {
        this.wallet = response
        console.log(response)
      } else {
        console.log('error getting rooms, see console')
      }
    }
  },
  mounted () {
    if (this.userType === 'admin') {
      this.getCurrentLocation(2)
    } else if (this.userType === 'student') {
      this.getCurrentLocation(1)
    } else if (this.userType === 'staff') {
      this.getCurrentLocation(3)
    }
    this.roomTemp()
    this.roomLight()
    this.roomSound()
    this.walletBalance()
  }
}
</script>

<style>
  .label {
    background-color: rgba(133, 213, 255, 0.54);
    padding: 15px;
    border-radius: 3px;
    display: inline-block;
    margin-left: 189px;
  }

  tr:nth-child(even) {
    background-color: #dddddd;
  }

  td, th {
    border: 1px solid #dddddd;
    text-align: left;
    padding: 8px;
  }
</style>
