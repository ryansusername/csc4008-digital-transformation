<template>
  <q-page>
    <q-toolbar color="dark">
      <q-icon name="business" style="font-size: 35px" />
      <q-toolbar-title>
        Space Allocation
      </q-toolbar-title>
    </q-toolbar>

    <q-table
      title="Book a Project Room"
      :data="tableData"
      :columns="columns"
      :separator="'cell'"
      :loading="loading"
      row-key="name"
      class="bigger q-ma-lg"
      >
      <q-tr slot="body" slot-scope="props" :props="props" class="cursor-pointer">
        <q-td key="projectroom" :props="props" v-bind:class="props.row.name">{{ props.row.name }}</q-td>
        <q-td key="nine" :props="props" v-bind:class="props.row.nine" @click.native="setSelected(props.row.nine, props.row, 'nine')"> {{ props.row.nine }}</q-td>
        <q-td key="ten" :props="props" v-bind:class="props.row.ten" @click.native="setSelected(props.row.ten, props.row, 'ten')">{{ props.row.ten }}</q-td>
        <q-td key="eleven" :props="props" v-bind:class="props.row.eleven" @click.native="setSelected(props.row.eleven, props.row, 'eleven')">{{ props.row.eleven }}</q-td>
        <q-td key="twelve" :props="props" v-bind:class="props.row.twelve" @click.native="setSelected(props.row.twelve, props.row, 'twelve')">{{ props.row.twelve }}</q-td>
        <q-td key="thirteen" :props="props" v-bind:class="props.row.thirteen" @click.native="setSelected(props.row.thirteen, props.row, 'thirteen')">{{ props.row.thirteen }}</q-td>
        <q-td key="fourteen" :props="props" v-bind:class="props.row.fourteen" @click.native="setSelected(props.row.fourteen, props.row, 'fourteen')">{{ props.row.fourteen }}</q-td>
        <q-td key="fifteen" :props="props" v-bind:class="props.row.fifteen" @click.native="setSelected(props.row.fifteen, props.row, 'fifteen')">{{ props.row.fifteen }}</q-td>
        <q-td key="sixteen" :props="props" v-bind:class="props.row.sixteen" @click.native="setSelected(props.row.sixteen, props.row, 'sixteen')">{{ props.row.sixteen }}</q-td>
        <q-td key="seventeen" :props="props" v-bind:class="props.row.seventeen" @click.native="setSelected(props.row.seventeen, props.row, 'seventeen')">{{ props.row.seventeen }}</q-td>
      </q-tr>
      <template slot="top-right" slot-scope="props">
        <q-btn
          round dense icon="chevron_left" color="primary" class="q-mr-md"
          :disable="props.isFirstPage"
          @click="props.prevPage"
        />
        <q-chip color="primary" class="q-mr-md">{{today}}</q-chip>
        <q-btn
          round dense icon="chevron_right" color="primary" class="q-mr-lg"
          :disable="props.isLastPage"
          @click="props.nextPage"
        />
        <q-btn
          flat round dense
          :icon="props.inFullscreen ? 'fullscreen_exit' : 'fullscreen'"
          @click="props.toggleFullscreen"
        />
      </template>
      <div slot="bottom" slot-scope="props" class="row flex-center fit q-mb-md">
        <div class="row flex-center fit q-mt-md">
        </div>
        <div class="row fit q-mt-md" v-if="selectedProjectRooms.length > 0">
          <div class="col-sm-5" style="background-color:rgba(204,211,248,0.12);">
            <q-list link>
              <q-item v-if="selectedProjectRooms.length > 0"><div>1. Project room {{selectedProjectRooms[0].projectroom}} booked for {{selectedProjectRooms[0].timeslot}}</div></q-item>
              <q-item v-if="selectedProjectRooms.length > 1"><div>2. Project room {{selectedProjectRooms[1].projectroom}} booked for {{selectedProjectRooms[1].timeslot}}</div></q-item>
              <q-item v-if="selectedProjectRooms.length > 2"><div>3. Project room {{selectedProjectRooms[2].projectroom}} booked for {{selectedProjectRooms[2].timeslot}}</div></q-item>
              <q-item v-if="selectedProjectRooms.length > 3"><div>4. Project room {{selectedProjectRooms[3].projectroom}} booked for {{selectedProjectRooms[3].timeslot}}</div></q-item>
            </q-list>
          </div>
          <div class="col-sm-1 row" style="background-color:rgba(0,0,0,0);">
            <q-btn label="Book" size="30px" class="block" color="orange-7" @click="loading = !loading"/>
          </div>
          <div class="col-sm-3 row" style="background-color:rgba(0,0,0,0);">
            <img src="~/assets/lab.jpg" style="max-height: 178px">
          </div>
        </div>
      </div>
    </q-table>

    <q-card id="lab-usage" class="bigger q-pa-sm q-ma-lg">
      <q-card-title>
        <b> Lab Usage </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <div class="row">
          <div class="col-sm-8">
            <p> <b>LAB 1:</b> </p>
            <q-progress
              :percentage="70"
              stripe
              animate
              height="45px"
              color="orange"
            />
            <br>
          </div>
          <div class="col-sm-4">
            <q-knob
              v-model="audio1"
              :min="min"
              :max="max"
              color="orange"
              track-color="orange-3"
              readonly
              class="q-ml-lg"
            >
              <q-icon class="on-left" name="volume_up" /> {{audio1}} dB
            </q-knob>
            <br>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <p> <b>LAB 2:</b> </p>
            <q-progress
              :percentage="30"
              stripe
              animate
              height="45px"
              color="orange"
            />
          </div>
          <div class="col-sm-4">
            <q-knob
              v-model="audio2"
              :min="min"
              :max="max"
              color="orange"
              track-color="orange-3"
              readonly
              class="q-ml-lg"
            >
              <q-icon class="on-left" name="volume_up" /> {{audio2}} dB
            </q-knob>
            <br>
          </div>
        </div>
        <div class="row">
          <div class="col-sm-8">
            <p> <b>LAB 3:</b> </p>
            <q-progress
              :percentage="50"
              stripe
              animate
              height="45px"
              color="orange"
            />
          </div>
          <div class="col-sm-4">
            <q-knob
              v-model="audio3"
              :min="min"
              :max="max"
              color="orange"
              track-color="orange-3"
              readonly
              class="q-ml-lg"
            >
              <q-icon class="on-left" name="volume_up" /> {{audio3}} dB
            </q-knob>
            <br>
          </div>
        </div>
      </q-card-main>
    </q-card>

    <q-card id="lab-rules" inline class="bigger q-pa-sm q-ma-lg" style="width: 500px; height: 300px">
      <q-card-title><b>Lab Rules</b></q-card-title>
      <q-card-separator/>
      <q-card-main>
        <q-chip color="orange-4" icon="wb_incandescent">
          No food or drink permitted in the labs
        </q-chip>
        <q-chip color="orange-6" icon="wb_incandescent">
          Only drinks containers with a screw lid permitted
        </q-chip>
        <q-chip color="orange-8" icon="wb_incandescent">
          Keep noise levels to a minimum
        </q-chip>
        <q-chip color="orange-10" icon="wb_incandescent">
          Do not misuse university property
        </q-chip>
      </q-card-main>
    </q-card>

    <q-card id="lab-stats" inline class="bigger q-pa-sm q-ma-lg">
      <q-card-title>
        <b> Lab Stats </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-card-main>
          <div class="row">
            <div class="col-sm-12">
              <q-item>
                <q-item-main class="q-display-4 text-center">
                  353
                </q-item-main>
                <q-item-side class="q-display-1 text-bottom">
                  Current<br>Occupancy
                </q-item-side>
              </q-item>
              <br>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <q-item>
                <q-item-main class="q-display-4 text-center">
                  160
                </q-item-main>
                <q-item-side class="q-display-1 text-bottom">
                  Lab<br>Occupancy
                </q-item-side>
              </q-item>
              <br>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <q-item>
                <q-item-main class="q-display-4 text-center">
                  301
                </q-item-main>
                <q-item-side class="q-display-1 text-bottom">
                  Computers<br>in Use
                </q-item-side>
              </q-item>
              <br>
            </div>
          </div>
          <div class="row">
            <div class="col-sm-12">
              <q-item>
                <q-item-main class="q-display-4 text-center">
                  50
                </q-item-main>
                <q-item-side class="q-display-1 text-bottom">
                  Computers<br>Available
                </q-item-side>
              </q-item>
              <br>
            </div>
          </div>
        </q-card-main>
      </q-card-main>
    </q-card>

    <q-card id="aug-real-nav" class="bigger q-pa-sm q-ma-lg">
      <q-card-title>
        <b> AR Building Navigator</b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-card-media>
          <img src="~/assets/aricon.png">
        </q-card-media>
        <div class="row">
          <div class="col-sm-9" style="background-color:rgba(204,211,248,0.12);">
            <q-list link>
              <q-item>
                <q-select
                  color = "blue"
                  float-label="Select room:"
                  v-model="roomtemp"
                  :options="RoomOptions"
                />
              </q-item>
            </q-list>
          </div>
          <div class="col-sm-3 row" style="background-color:rgba(0,0,0,0);">
            <q-btn label="Book" size="30px" class="block" color="blue" @click="bookingAppear"/>
          </div>
        </div>
      </q-card-main>
    </q-card>

    <q-card id="aug-real-nav2" class="bigger q-pa-sm q-ma-lg">
      <q-card-media>
        <q-video src="https://www.youtube.com/embed/NV7_SlZyL-8"
                 style="width: 100%; height: 500px;" fullscreen/>
      </q-card-media>
    </q-card>

    <q-card id="camera-demo" inline class="bigger q-pa-sm q-ma-lg" style="width: 500px">
      <q-card-title>
        <b> View Mobile Camera Demo <q-icon name="hourglass_empty" color="black" /></b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
        <template>
          <div>
            <q-btn color="primary" label="Get Picture" @click="captureImage" />
            <img :src="imageSrc">
          </div>
        </template>
    </q-card>

    <q-card id="carpark" v-if="userType!=='student'" class="bigger q-pa-sm q-ma-lg">
      <q-card-title>
        <b> Staff Parking </b>
        <br/>
        <span slot="right" class="row items-center">
          <q-btn
            round dense icon="chevron_left" color="primary" class="q-mr-md"
            @click="previousCarpark()"
          />
          <q-chip color="primary" class="q-mr-md">{{today}}</q-chip>
          <q-btn
            round dense icon="chevron_right" color="primary" class="q-mr-lg"
            @click="nextCarpark()"
          />
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-card-media>
          <img :src="'assets/' + carparkImg">
        </q-card-media>
      </q-card-main>
      <q-card-main>
        <div class="row fit q-mt-md" v-if="selectedProjectRooms.length > 0">
          <div class="col-sm-5" style="background-color:rgba(204,211,248,0.12);">
            <q-list link>
              <q-item v-if="selectedProjectRooms.length > 0"><div>1. Project room {{selectedProjectRooms[0].projectroom}} booked for {{selectedProjectRooms[0].timeslot}}</div></q-item>
              <q-item v-if="selectedProjectRooms.length > 1"><div>2. Project room {{selectedProjectRooms[1].projectroom}} booked for {{selectedProjectRooms[1].timeslot}}</div></q-item>
              <q-item v-if="selectedProjectRooms.length > 2"><div>3. Project room {{selectedProjectRooms[2].projectroom}} booked for {{selectedProjectRooms[2].timeslot}}</div></q-item>
              <q-item v-if="selectedProjectRooms.length > 3"><div>4. Project room {{selectedProjectRooms[3].projectroom}} booked for {{selectedProjectRooms[3].timeslot}}</div></q-item>
            </q-list>
          </div>
          <div class="col-sm-1 row" style="background-color:rgba(0,0,0,0);">
            <q-btn label="Book" size="30px" class="block" color="orange-7" @click="loading = !loading"/>
          </div>
          <div class="col-sm-3 row" style="background-color:rgba(0,0,0,0);">
            <img src="~/assets/lab.jpg" style="max-height: 178px">
          </div>
        </div>
      </q-card-main>
    </q-card>

    <q-card id="lab-timetable" class="bigger q-pa-sm q-ma-lg">

      <q-card-title>
        <b> Lab Timetable </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <q-card-media>
          <img src="~/assets/lab.png">
        </q-card-media>
      </q-card-main>
    </q-card>

    <q-card id="calendar" class="bigger q-pa-sm q-ma-lg">

      <q-card-title>
        <b> Calendar </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <calendar
          event-ref="MYCALENDAR"
          :prevent-event-detail="true"
          :event-array="blah"
          :allow-editing="true"
          :num-days="3"
          :nav-days="3"
        />
      </q-card-main>
    </q-card>
  </q-page>
</template>

<script>
import { Calendar } from 'quasar-calendar'
import { date } from 'quasar'

let formattedString = date.formatDate(new Date(2019, 0, 10), 'Do MMMM YYYY')

document.addEventListener('deviceready', () => {
  console.log(navigator.device.capture)
}, false)

export default {
  name: 'SpaceAllocation',
  components: {
    Calendar
  },
  methods: {
    setSelected: function (value, row, col) {
      if (value === 'Available' && this.selectedProjectRooms.length < 4) {
        this.selectedProjectRooms.push({
          timeslot: col,
          projectroom: row.name
        })
        this.tableData[this.tableData.indexOf(row)][col] = 'Selected'
      } else if (this.selectedProjectRooms.length >= 4) {
        this.$q.notify({
          message: 'You cannot book more than 4 slots!',
          icon: 'warning',
          position: 'top'
        })
      }
      console.log(this.selectedProjectRooms)
    },
    randomNumber: function randomNumber (min, max) {
      return Math.floor(Math.random() * (max - min) + min)
    },
    sleep: function sleep (ms) {
      return new Promise(resolve => setTimeout(resolve, ms))
    },
    updateAudio: async function () {
      var rand = Math.floor(Math.random() * 10)
      if (this.audio1 > 90) {
        this.audio1 = this.audio1 - rand
      } else if (this.audio1 < 10) {
        this.audio1 = this.audio1 + rand
      } else {
        this.audio1 = this.audio1 + Math.floor((Math.random() - 0.5) * 10)
      }

      rand = Math.floor(Math.random() * 10)
      if (this.audio2 > 90) {
        this.audio2 = this.audio2 - rand
      } else if (this.audio2 < 10) {
        this.audio2 = this.audio2 + rand
      } else {
        this.audio2 = this.audio2 + Math.floor((Math.random() - 0.5) * 10)
      }

      rand = Math.floor(Math.random() * 10)
      if (this.audio3 > 90) {
        this.audio3 = this.audio3 - rand
      } else if (this.audio3 < 10) {
        this.audio3 = this.audio3 + rand
      } else {
        this.audio3 = this.audio3 + Math.floor((Math.random() - 0.5) * 10)
      }

      await this.sleep(1000)
      this.updateAudio()
    },
    captureImage: function () {
      // navigator.camera.getPicture(
      //   data => { // on success
      //     this.imageSrc = `data:image/jpeg;base64,${data}`
      //   },
      //   () => { // on fail
      //     this.$q.notify('Could not access device camera.')
      //   },
      //   {
      //     // camera options
      //   }
      // )
      console.log(navigator)
      window.alert(navigator.device)
      // navigator.device.capture.captureAudio(
      //   CaptureCB captureSuccess, CaptureErrorCB captureError,  [CaptureAudioOptions options]
      // )
    },
    nextCarpark: function () {
      this.day += 1
      this.today = date.formatDate(new Date(2019, 0, this.day), 'Do MMMM YYYY')
      this.carparkImg = 'carpark' + this.randomNumber(1, 3) + '.png'
    },
    previousCarpark: function () {
      this.day -= 1
      this.today = date.formatDate(new Date(2019, 0, this.day), 'Do MMMM YYYY')
      this.carparkImg = 'carpark' + this.randomNumber(1, 3) + '.png'
    }
  },
  computed: {
    userType: {
      get () {
        return this.$store.state.user.userType
      }
    }
  },
  mounted () {
    this.updateAudio()
  },
  data () {
    this.$root.$on(
      'click-event-MYCALENDAR',
      function (eventDetailObject) {
        // do something here
      }
    )
    return {
      stars: 5,
      column: 3,
      roomtemp: '0G.034',
      timetemp: '09:00',
      RoomOptions: [{label: '0G.037', value: '0G.037'}, {label: '0G.034', value: '0G.034'}, {label: '02.032', value: '02.032'}, {label: '02.033', value: '02.033'}],
      TimeOptions: [{label: '09:00', value: '09:00'}, {label: '10:00', value: '10:00'}, {label: '14:00', value: '14:00'}],
      blah: [
        {
          id: 1,
          summary: 'Test event',
          description: 'Some extra info goes here',
          location: 'Office of the Divine Randomness, 1232 Main St., Denver, CO',
          start: {
            dateTime: '2018-12-16T14:00:00', // ISO 8601 formatted
            timeZone: 'America/New_York' // Timezone listed as a separate IANA code
          },
          end: {
            dateTime: '2018-12-16T16:30:00',
            timeZone: 'American/New_York'
          },
          color: 'positive',
          attendees: [
            {
              id: 5,
              email: 'somebody@somewhere.com',
              displayName: 'John Q. Public',
              organizer: false,
              self: false,
              resource: false
            }
          ]
        },
        {
          id: 2,
          summary: 'Test all-day event',
          description: 'Some extra info goes here',
          start: {
            date: '2018-12-16' // A date variable indicates an all-day event
          },
          end: {
            date: '2018-12-19'
          }
        },
        {
          id: 3,
          summary: 'Some other test event',
          description: 'Some extra info goes here',
          start: {
            dateTime: '2018-12-17T10:00:00+0500' // timezone embedded in dateTime
          },
          end: {
            dateTime: '2018-12-17T12:30:00+0500'
          }
        }
      ],
      columns: [
        {
          name: 'projectroom',
          required: true,
          label: 'Project Room',
          align: 'left',
          field: 'name',
          sortable: true,
          classes: 'my-class'
        },
        {
          name: 'nine',
          required: true,
          label: '09:00 - 10:00',
          align: 'left',
          field: 'nine',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'ten',
          required: true,
          label: '10:00 - 11:00',
          align: 'left',
          field: 'ten',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'eleven',
          required: true,
          label: '11:00 - 12:00',
          align: 'left',
          field: 'eleven',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'twelve',
          required: true,
          label: '12:00 - 13:00',
          align: 'left',
          field: 'twelve',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'thirteen',
          required: true,
          label: '13:00 - 14:00',
          align: 'left',
          field: 'thirteen',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'fourteen',
          required: true,
          label: '14:00 - 15:00',
          align: 'left',
          field: 'fourteen',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'fifteen',
          required: true,
          label: '15:00 - 16:00',
          align: 'left',
          field: 'fifteen',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'sixteen',
          required: true,
          label: '16:00 - 17:00',
          align: 'left',
          field: 'sixteen',
          sortable: false,
          classes: 'my-class'
        },
        {
          name: 'seventeen',
          required: true,
          label: '17:00 - 18:00',
          align: 'left',
          field: 'seventeen',
          sortable: false,
          classes: 'my-class'
        }
      ],
      tableData: [
        {
          name: '0G.034',
          'nine': 'Yours',
          'ten': 'Yours',
          'eleven': 'Booked',
          'twelve': 'Yours',
          'thirteen': 'Yours',
          'fourteen': 'Booked',
          'fifteen': 'Booked',
          'sixteen': 'Available',
          'seventeen': 'Available'
        },
        {
          name: '0G.037',
          'nine': 'Available',
          'ten': 'Booked',
          'eleven': 'Booked',
          'twelve': 'Booked',
          'thirteen': 'Available',
          'fourteen': 'Available',
          'fifteen': 'Available',
          'sixteen': 'Booked',
          'seventeen': 'Booked'
        },
        {
          name: '02.032',
          'nine': 'Available',
          'ten': 'Available',
          'eleven': 'Booked',
          'twelve': 'Booked',
          'thirteen': 'Booked',
          'fourteen': 'Available',
          'fifteen': 'Available',
          'sixteen': 'Available',
          'seventeen': 'Available'
        },
        {
          name: '02.033',
          'nine': 'Available',
          'ten': 'Available',
          'eleven': 'Available',
          'twelve': 'Available',
          'thirteen': 'Available',
          'fourteen': 'Available',
          'fifteen': 'Booked',
          'sixteen': 'Booked',
          'seventeen': 'Booked'
        }
      ],
      loading: false,
      isBooked: true, // TODO(jk): see if this is actually needed
      selectedProjectRooms: [],
      today: formattedString,
      day: 10,
      imageSrc: '',
      audio1: 50,
      audio2: 20,
      audio3: 30,
      min: 0,
      max: 100,
      carparkImg: 'carpark1.png'
    }
  }
}
</script>

<style scoped>
  .Booked {
    background: #ff726b
  }
  .Available {
    background: greenyellow
  }
  .Selected {
    background: orange
  }
  .Yours {
    background: lightskyblue;
  }
</style>
