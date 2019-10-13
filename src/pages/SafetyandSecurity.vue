<template>
  <q-page>
    <q-card inline class="fullscreen bigger q-pa-sm q-ma-lg" style="width: 650px; height: 550px" color="negative" v-if="fire">
      <q-card-title>
        <b class = "justify-center row centre">EMERGENCY</b>
      </q-card-title>
      <img src="~/assets/FireWarnings/emergency-exit.png" class = "justify-center row centre">
      <q-card-main>
        <b class="justify-center row centre">All doors and windows have been unlocked</b>
        <br>
        <b class="justify-center row centre">Move calmly to the nearest exit</b>
      </q-card-main>
    </q-card>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px; height: 325px">
        <q-card-primary>
          <q-card-title><b>Door Locks</b></q-card-title>
          <q-card-separator></q-card-separator>
          <q-card-main>
          <q-list no-border="True">
          <q-item>
            <q-item-main>
              <q-toggle v-model="groundFloorDoor" unchecked-icon="lock_open"
                        checked-icon="lock" label="Ground Floor" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="firstFloorLabDoor" unchecked-icon="lock_open"
                        checked-icon="lock" label="1st Floor Lab" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="secondFloorLabDoor" unchecked-icon="lock_open"
                        checked-icon="lock" label="2nd Floor Lab" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="maloneRoadDoor" unchecked-icon="lock_open"
                        checked-icon="lock" label="18 Malone Road" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="parkingLotDoor" unchecked-icon="lock_open"
                        checked-icon="lock" label="Parking Lot" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
        </q-card-primary>
    </q-card>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px; height: 325px">
      <q-card-title><b>Window Locks</b></q-card-title>
      <q-card-separator></q-card-separator>
      <q-card-main>
        <q-list no-border="True">
          <q-item>
            <q-item-main>
              <q-toggle v-model="groundFloorWindow" unchecked-icon="lock_open"
                        checked-icon="lock" label="Ground Floor" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="firstFloorWindow" unchecked-icon="lock_open"
                        checked-icon="lock" label="1st Floor" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="secondFloorWindow" unchecked-icon="lock_open"
                        checked-icon="lock" label="2nd Floor" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="roofWindow" unchecked-icon="lock_open"
                        checked-icon="lock" label="Skylights" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
          <q-item>
            <q-item-main>
              <q-toggle v-model="maloneRoadWindow" unchecked-icon="lock_open"
                        checked-icon="lock" label="18 Malone Road" :readonly="userType!=='admin' || fire"></q-toggle>
            </q-item-main>
          </q-item>
        </q-list>
      </q-card-main>
  </q-card>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 250px; height: 350px">
        <q-card-title><b>Smoke & Fire Detectors</b></q-card-title>
        <q-card-separator></q-card-separator>
        <q-card-main>
          <table style="width:100%" border=0>
            <tr class="spaceUnder">
              <td>
                <b>Ground Floor</b>
              </td>
              <td>
                <q-toggle @input="fireAlarm" v-model="groundFloorSafety" val="fire" unchecked-icon="check"
                          checked-icon="whatshot" label="Fire" color="red" :readonly="userType!=='admin'"></q-toggle>
                <q-toggle @input="smokeGroundFloor" v-model="groundFloorSafety" val="smoke" unchecked-icon="check"
                          checked-icon="smoking_rooms" label="Smoke" color="orange" :readonly="userType!=='admin'"></q-toggle>
              </td>
            </tr>
            <tr class="spaceUnder">
              <td>
                <b>1st Floor</b>
              </td>
              <td>
                <q-toggle @input="fireAlarm" v-model="firstFloorSafety" val="fire" unchecked-icon="check"
                          checked-icon="whatshot" label="Fire" color="red" :readonly="userType!=='admin'"></q-toggle>
                <q-toggle @input="smokeFirstFloor" v-model="firstFloorSafety" val="smoke" unchecked-icon="check"
                          checked-icon="smoking_rooms" label="Smoke" color="orange" :readonly="userType!=='admin'"></q-toggle>
              </td>
            </tr>
            <tr class="spaceUnder">
              <td>
                <b>2nd Floor</b>
              </td>
              <td>
                <q-toggle @input="fireAlarm" v-model="secondFloorSafety" val="fire" unchecked-icon="check"
                          checked-icon="whatshot" label="Fire" color="red" :readonly="userType!=='admin'"></q-toggle>
                <q-toggle @input="smokeSecondFloor" v-model="secondFloorSafety" val="smoke" unchecked-icon="check"
                          checked-icon="smoking_rooms" label="Smoke" color="orange" :readonly="userType!=='admin'"></q-toggle>
              </td>
            </tr>
            <tr>
              <td>
                <b>18 Malone Road</b>
              </td>
              <td>
                <q-toggle @input="fireAlarm" v-model="maloneRoadSafety" val="fire" unchecked-icon="check"
                          checked-icon="whatshot" label="Fire" color="red" :readonly="userType!=='admin'"></q-toggle>
                <q-toggle @input="smokeMalone" v-model="maloneRoadSafety" val="smoke" unchecked-icon="check"
                          checked-icon="smoking_rooms" label="Smoke" color="orange" :readonly="userType!=='admin'"></q-toggle>
              </td>
            </tr>
          </table>
        </q-card-main>
      </q-card>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 380px;" v-if="userType==='admin'">
        <q-card-title>
          <b>Bulk Lock Commands</b>
          <span slot="right" class="row items-center">
        </span>
        </q-card-title>
        <q-card-separator />
        <q-list>
          <q-collapsible icon="mdi-earth" label="All">
            <q-btn label="Unlock All" color="blue" size="md" @click="unlockAll" :disable="fire"></q-btn><div class="divider"></div>
            <q-btn label="Lock All" color="blue" size="md" @click="lockAll" :disable="fire"></q-btn><div class="divider"></div>
            <q-btn label="Invert All" color="blue" size="md" @click="invertAll" :disable="fire"></q-btn>
          </q-collapsible>
          <q-collapsible icon="mdi-door" label="Doors">
            <q-btn label="Unlock All" color="blue" size="md" @click="unlockAllDoors" :disable="fire"></q-btn><div class="divider"></div>
            <q-btn label="Lock All" color="blue" size="md" @click="lockAllDoors" :disable="fire"></q-btn><div class="divider"></div>
            <q-btn label="Invert All" color="blue" size="md" @click="invertAllDoors" :disable="fire"></q-btn>
          </q-collapsible>
          <q-collapsible icon="mdi-window-closed" label="Windows">
            <q-btn label="Unlock All" color="blue" size="md" @click="unlockAllWindows" :disable="fire"></q-btn><div class="divider"></div>
            <q-btn label="Lock All" color="blue" size="md" @click="lockAllWindows" :disable="fire"></q-btn> <div class="divider"></div>
            <q-btn label="Invert All" color="blue" size="md" @click="invertAllWindows" :disable="fire"></q-btn>
          </q-collapsible>
        </q-list>
      </q-card>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 800px">
      <q-card-title>
        <b> Building Schedule </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator></q-card-separator>
      <q-card-main>
        <calendar :readonly="userType!=='admin' || fire">
          event-ref="MYCALENDAR"
          :prevent-event-detail="true"
          :event-array="events"
          :allow-editing="true"
          :num-days="3"
          :nav-days="3"
        </calendar>
      </q-card-main>
    </q-card>
  </q-page>
</template>

<style scoped>
  tr.spaceUnder>td {
    padding-bottom: 1em;
  }
  .divider{
    width:5px;
    height:auto;
    display:inline-block;
  }
</style>

<script>
import { Calendar } from 'quasar-calendar'
export default {
  name: 'SafetyandSecurity',
  components: {
    Calendar
    // CalendarMultiDay
  },
  data () {
    return {
      firstFloorLabDoor: false,
      secondFloorLabDoor: false,
      maloneRoadDoor: false,
      groundFloorDoor: false,
      parkingLotDoor: false,
      groundFloorWindow: false,
      firstFloorWindow: false,
      secondFloorWindow: false,
      roofWindow: false,
      maloneRoadWindow: false,
      fire: false,
      groundFloorSafety: [],
      firstFloorSafety: [],
      secondFloorSafety: [],
      maloneRoadSafety: [],
      events: [
        {
          id: 1,
          summary: 'Early Shut Down',
          description: 'All windows and doors will be locked before 5 as is normal for weekdays',
          location: 'Office of the Divine Randomness, 1232 Main St., Denver, CO',
          start: {
            dateTime: '2019-01-14T14:00:00', // ISO 8601 formatted
            timeZone: 'Europe/Belfast' // Timezone listed as a separate IANA code
          },
          end: {
            dateTime: '2019-01-14T17:00:00',
            timeZone: 'Europe/Belfast'
          },
          color: 'positive'
        }
      ]
    }
  },
  methods: {
    unlockAll: function () {
      this.unlockAllDoors()
      this.unlockAllWindows()
    },
    lockAll: function () {
      this.lockAllDoors()
      this.lockAllWindows()
    },
    invertAll: function () {
      this.invertAllDoors()
      this.invertAllWindows()
    },
    unlockAllDoors: function () {
      this.groundFloorDoor = false
      this.firstFloorLabDoor = false
      this.secondFloorLabDoor = false
      this.maloneRoadDoor = false
      this.parkingLotDoor = false
    },
    lockAllDoors: function () {
      this.groundFloorDoor = true
      this.firstFloorLabDoor = true
      this.secondFloorLabDoor = true
      this.maloneRoadDoor = true
      this.parkingLotDoor = true
    },
    invertAllDoors: function () {
      this.groundFloorDoor = !this.groundFloorDoor
      this.firstFloorLabDoor = !this.firstFloorLabDoor
      this.secondFloorLabDoor = !this.secondFloorLabDoor
      this.maloneRoadDoor = !this.maloneRoadDoor
      this.parkingLotDoor = !this.parkingLotDoor
    },
    unlockAllWindows: function () {
      this.groundFloorWindow = false
      this.firstFloorWindow = false
      this.secondFloorWindow = false
      this.roofWindow = false
      this.maloneRoadWindow = false
    },
    lockAllWindows: function () {
      this.groundFloorWindow = true
      this.firstFloorWindow = true
      this.secondFloorWindow = true
      this.roofWindow = true
      this.maloneRoadWindow = true
    },
    invertAllWindows: function () {
      this.groundFloorWindow = !this.groundFloorWindow
      this.firstFloorWindow = !this.firstFloorWindow
      this.secondFloorWindow = !this.secondFloorWindow
      this.roofWindow = !this.roofWindow
      this.maloneRoadWindow = !this.maloneRoadWindow
    },
    fireAlarm: function () {
      // If fire alarm is not currently active
      if (!this.fire) {
        this.fire = true
        this.unlockAll()
      } else {
        // If all fire alarms are now off
        if (((this.groundFloorSafety.indexOf('fire') === -1) && (this.firstFloorSafety.indexOf('fire') === -1) &&
          (this.secondFloorSafety.indexOf('fire') === -1) && (this.maloneRoadSafety.indexOf('fire') === -1))) {
          this.fire = false
        }
      }
    },
    unlockSkylight: function () {
      this.roofWindow = false
    },
    smokeGroundFloor: function () {
      this.groundFloorWindow = false
      this.unlockSkylight()
    },
    smokeFirstFloor: function () {
      this.firstFloorWindow = false
      this.unlockSkylight()
    },
    smokeSecondFloor: function () {
      this.secondFloorWindow = false
      this.unlockSkylight()
    },
    smokeMalone: function () {
      this.maloneRoadWindow = false
      this.unlockSkylight()
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
