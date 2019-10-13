<template>
  <q-page>
    <q-toolbar color="dark">
      <q-icon name="wb_incandescent" style="font-size: 35px" />
      <q-toolbar-title>
        HVAC and Lighting
      </q-toolbar-title>
    </q-toolbar>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px">
      <q-card-title>
        <b class = "justify-center row centre"> Your Preferences</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
        <q-list link v-if="userType==='admin'">
          <q-item>
              <q-item-tile style="padding-right: 10px"> Temperature:  </q-item-tile>
                  <q-select
                    color = "blue"
                    v-model="adminTemper"
                    :options="TempOptions"
                  />
            </q-item>
          <q-item main>
            <q-item-tile style="padding-right: 10px"> Brightness: </q-item-tile>
            <q-select
              color = "blue"
              v-model="adminLighter"
              :options="LightOptions"
            />
          </q-item>
          <q-item main>
            <q-item-tile style="padding-right: 10px"> Sound: </q-item-tile>
            <q-select
              color = "blue"
              v-model="adminSound"
              :options="SoundOptions"
            />
          </q-item>
        </q-list>
      <q-list link v-if="userType==='student' || userType == 'staff'">
        <q-item>
          <q-item-tile style="padding-right: 10px"> Temperature:  </q-item-tile>
          <q-select
            color = "blue"
            v-model="userTemper"
            :options="TempOptions"
          />
        </q-item>
        <q-item main>
          <q-item-tile style="padding-right: 10px"> Brightness: </q-item-tile>
          <q-select
            color = "blue"
            v-model="userLighter"
            :options="LightOptions"
          />
        </q-item>
        <q-item main>
          <q-item-tile style="padding-right: 10px"> Sound: </q-item-tile>
          <q-select
            color = "blue"
            v-model="userSound"
            :options="SoundOptions"
          />
        </q-item>
      </q-list>
      <div class = "row justify centre"><q-btn color = "blue" textcolor = "white" label = "confrim changes"/></div>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px;" v-if="userType==='admin'" >
      <q-card-title>
        <b class = "justify-center row centre"> Admin Override</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <p class="caption">
        <span class="chip-container">
          <q-chip square color="secondary">
            Set Light Lux levels
          </q-chip>
        </span>
      </p>
      <q-slider v-model="smartBlindVal" :min="0" :max="1000" :step="100" label color="blue" />
      <b> Select Smart Blind Tint</b>
      <q-select
        color = "blue"
        v-model="BlindTint"
        :options="LightOptions"
      />
      <br>
      <p class="caption">
        <span class="chip-container">
          <q-chip square color="secondary">
            Set Temperature
          </q-chip>
        </span>
      </p>
      <q-slider v-model="tempVal" :min="16" :max="23" :step="1" label color="blue" />
      <br>
      <b> Choose room to override</b>
      <q-select class="round-borders text-white row justify-center full-height full-width text-center"
                color = "blue"
                v-model="presetRoom"
                :options="Rooms"
      />
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px" v-if="userType==='student' || userType == 'staff'">
      <q-card-title>
        <b class = "justify-center row centre"> Comfort Control</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <p class="caption">
        <span class="chip-container">
          <q-chip square color="secondary">
            Set Light Lux levels
          </q-chip>
        </span>
      </p>
      <q-slider v-model="smartBlindVal" :min="0" :max="1000" :step="100" label color="blue" />
      <b> Select Smart Blind Tint</b>
      <q-select
        color = "blue"
        v-model="BlindTint"
        :options="LightOptions"
      />
      <br>
      <p class="caption">
        <span class="chip-container">
          <q-chip square color="secondary">
            Set Temperature
          </q-chip>
        </span>
      </p>
      <q-slider v-model="tempVal" :min="16" :max="23" :step="1" label color="blue" />
      <br>
      <q-item-tile class="row justify-center full-height full-width text-center">
        Current Room.
      </q-item-tile>
      <q-item>
        <q-item-side/>
        <q-item-main  class="round-borders justify-center row centre bg-blue text-white">{{currentLocation}}</q-item-main>
        <q-item-side/>
      </q-item>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px">
      <q-card-title>
        <b class = "justify-center row centre"> Helpful Tips</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-carousel
        color="white"
        arrows
        quick-nav
        height="300px"
      >
        <q-carousel-slide img-src="assets/Tip2.png" />
        <q-carousel-slide img-src="assets/energy2.jpg" />
        <q-carousel-slide img-src="assets/noise.jpg" />
      </q-carousel>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 290px" v-if="userType==='admin'">
      <q-card-title>
        <b class = "justify-center row centre"> Warnings</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <img src="~/assets/HVACwarnings/smallWarning.jpg" class = "justify-center row centre">
      <q-popover>
        <img src="~/assets/HVACwarnings/popoutWarning.jpg" class = "justify-center row centre">
        <q-card-separator />
      </q-popover>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px" >
      <q-card-title>
        <b class = "justify-center row centre"> HVAC, Lighting and Sound analytics</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-option-group inline
                      type="radio"
                      v-model="currentchoice"
                      :options="viewOptions"/>
      <q-card-separator />
      <div v-if="currentchoice=== 'viewTemp'"> <TempAverageG :height="150"></TempAverageG> </div>
      <div v-if="currentchoice=== 'viewSound'"> <SoundAverageG :height="150"></SoundAverageG> </div>
      <div v-if="currentchoice=== 'viewLight'"> <LightAverageG :height="150"></LightAverageG> </div>
      <q-item-tile class="row justify-center full-height full-width text-center">
        Recommended Lab for you based on your preferences.
      </q-item-tile>
      <q-item>
        <q-item-side/>
        <q-item-main  class="round-borders justify-center row centre bg-blue text-white">
          <div v-if="userType==='admin'">
            {{myValueAdmin}}
          </div>
          <div v-if="userType==='student' || userType == 'staff'">
            {{myValueUser}}
          </div>
        </q-item-main>
        <q-item-side/>
      </q-item>
    </q-card>

  </q-page>
</template>

<style scoped>

</style>

<script>
import LightAverageG from 'src/components/LightAverageG.js'
import SoundAverageG from '../components/SoundAverageG'
import TempAverageG from 'src/components/TempAverageG'
import APIService from 'src/services/APIService.js'

export default {
  name: 'HVACandLighting',
  components: {
    LightAverageG,
    SoundAverageG,
    TempAverageG
  },
  data () {
    return {
      currentchoice: 'viewTemp',
      viewOptions: [
        {
          label: 'Temperature Data',
          value: 'viewTemp'
        },
        {
          label: 'Sound Data',
          value: 'viewSound'
        },
        {
          label: 'Light Data',
          value: 'viewLight'
        }],
      label: 0,
      smartBlindVal: 0,
      luxVal: 0,
      tempVal: 16,
      userLighter: 'Dark',
      userSound: 'Quiet',
      userTemper: 16,
      adminLighter: 'Medium',
      adminSound: 'Medium',
      adminTemper: 23,
      TempOptions: [
        {
          label: 16,
          value: 16
        },
        {
          label: 17,
          value: 17
        },
        {
          label: 18,
          value: 18
        },
        {
          label: 19,
          value: 19
        },
        {
          label: 20,
          value: 20
        },
        {
          label: 21,
          value: 21
        },
        {
          label: 22,
          value: 22
        },
        {
          label: 23,
          value: 23
        }],
      SoundOptions: [
        {
          label: 'Quiet',
          value: 'Quiet'
        },
        {
          label: 'Medium',
          value: 'Medium'
        },
        {
          label: 'Loud',
          value: 'Loud'
        }],
      LightOptions: [
        {
          label: 'Dark',
          value: 'Dark'
        },
        {
          label: 'Medium',
          value: 'Medium'
        },
        {
          label: 'Bright',
          value: 'Bright'
        }],
      Rooms: [
        {
          label: 'Lab1',
          value: 'Lab1'
        },
        {
          label: 'Lab2',
          value: 'Lab2'
        },
        {
          label: 'Lab3',
          value: 'Lab3'
        },
        {
          label: 'OG.034',
          value: 'OG.034'
        },
        {
          label: 'OG.037',
          value: 'OG.037'
        },
        {
          label: 'O2.032',
          value: 'O2.032'
        },
        {
          label: 'O2.033',
          value: 'O2.033'
        }],
      AvgTemp: 20,
      AvgLux: 420,
      AvgSound: 69,
      BlindTint: 'Medium',
      presetRoom: 'Lab1',
      userSetting: [
        {
          name: 'student',
          temperature: 20,
          Light: 2,
          Sound: 1
        }],
      labSettings: [
        {
          name: 'lab1',
          temperature: 16,
          Light: 1,
          Sound: 1
        },
        {
          name: 'lab2',
          temperature: 20,
          Light: 2,
          Sound: 3
        },
        {
          name: 'lab3',
          temperature: 23,
          Light: 3,
          Sound: 2
        }],
      myValueUser: ' ',
      myValueAdmin: ' ',
      currentLocation: ''
    }
  },
  methods: {
    async getCurrentLocation (id) {
      let response = await APIService.getCurrentLocation(id)
      if (!response.error) {
        this.currentLocation = response
        console.log(response)
      } else {
        console.log('error getting rooms, see console')
      }
    },
    roomResult: function () {
      var userSetting = [
        {
          name: 'student',
          temperature: 20,
          Light: 2,
          Sound: 1
        }]
      var adminSetting = [
        {
          name: 'admin',
          temperature: 16,
          Light: 1,
          Sound: 3
        }
      ]
      var labSettings = [
        {
          name: 'lab1',
          temperature: 23,
          Light: 3,
          Sound: 3
        },
        {
          name: 'lab2',
          temperature: 19,
          Light: 2,
          Sound: 1
        },
        {
          name: 'lab3',
          temperature: 17,
          Light: 1,
          Sound: 2
        }]
      var answerUser = []
      var answerAdmin = []
      var i
      for (i = 0; i < 3; i++) {
        var diffTemp = userSetting[0].temperature - labSettings[i].temperature
        var diffLight = userSetting[0].Light - labSettings[i].Light
        var diffSound = userSetting[0].Sound - labSettings[i].Sound
        answerUser[i] = Math.abs(diffTemp) + Math.abs(diffLight) + Math.abs(diffSound)
        var diffTempAdmin = adminSetting[0].temperature - labSettings[i].temperature
        var diffLightAdmin = adminSetting[0].Light - labSettings[i].Light
        var diffSoundAdmin = adminSetting[0].Sound - labSettings[i].Sound
        answerAdmin[i] = Math.abs(diffTempAdmin) + Math.abs(diffLightAdmin) + Math.abs(diffSoundAdmin)
      }
      var j
      var lowestUser
      var resultUser = 100
      var resultIndexUser = 0
      var lowestAdmin
      var resultAdmin = 100
      var resultIndexAdmin
      for (j = 0; j < 3; j++) {
        lowestUser = answerUser[j]
        if (lowestUser < resultUser) {
          resultUser = lowestUser
          resultIndexUser = j
        }
        lowestAdmin = answerAdmin[j]
        if (lowestAdmin < resultAdmin) {
          resultAdmin = lowestAdmin
          resultIndexAdmin = j
        }
      }

      var returnedValueUser = labSettings[resultIndexUser].name
      this.myValueUser = returnedValueUser
      var returnedValueAdmin = labSettings[resultIndexAdmin].name
      this.myValueAdmin = returnedValueAdmin
    }
  },
  mounted () {
    this.roomResult()
    if (this.userType === 'admin') {
      this.getCurrentLocation(2)
    } else if (this.userType === 'student') {
      this.getCurrentLocation(1)
    } else if (this.userType === 'staff') {
      this.getCurrentLocation(3)
    }
  },
  computed: {
    userType: {
      get () {
        return this.$store.state.user.userType
      }
    }
  }
}

</script>
