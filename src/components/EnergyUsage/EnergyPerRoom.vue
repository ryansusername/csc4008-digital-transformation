<template>
    <q-card flat class="no-padding no-margin">
      <div class="text-center q-display-1">Current Energy Usage Per Room</div>
      <q-card-main class="q-pa-none q-ma-none">
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 190px; height: 190px" color="teal-4">
          <q-tooltip anchor="top left" self="bottom left">
            <tr>Usage: Low</tr>
            <tr>Average Usage: 60 kW</tr>
          </q-tooltip>
          <q-card-title>
            AllState Lab 01
            <div slot="right" class="row items-center">
              <q-icon name="desktop_windows" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                50
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 190px; height: 190px"  color="teal-5">
          <q-tooltip anchor="top left" self="bottom left">
            <tr>Usage: High</tr>
            <tr>Average Usage: 60 kW</tr>
          </q-tooltip>
          <q-card-title>
            AllState Lab 02
            <div slot="right" class="row items-center">
              <q-icon name="desktop_windows" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                70
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 190px; height: 190px" color="teal-2">
          <q-tooltip anchor="top left" self="bottom left">
            <tr>Usage: Low</tr>
            <tr>Average Usage: 30 kW</tr>
          </q-tooltip>
          <q-card-title>
            Peer Mentors
            <div slot="right" class="row items-center">
              <q-icon name="school" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                20
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 190px; height: 190px" color="teal-5">
          <q-tooltip anchor="top left" self="bottom left">
            <tr>Usage: Medium</tr>
            <tr>Average Usage: 50 kW</tr>
          </q-tooltip>
          <q-card-title>
            Office 01
            <div slot="right" class="row items-center">
              <q-icon name="folder_shared" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                60
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 460px; height: 190px" color="teal-7">
          <q-tooltip anchor="top left" self="bottom left">
            <tr>Usage: Low</tr>
            <tr>Average Usage: 150 kW</tr>
          </q-tooltip>
          <q-card-title>
           Lab 01
           <div slot="right" class="row items-center">
             <q-icon name="desktop_windows" color="white"/>
           </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                120
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 400px; height: 190px" color="teal-8">
         <q-tooltip anchor="top left" self="bottom left">
           <tr>Usage: Medium</tr>
           <tr>Average Usage: 130 kW</tr>
          </q-tooltip>
          <q-card-title>
            Lab 02
            <div slot="right" class="row items-center">
              <q-icon name="desktop_windows" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                150
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 400px; height: 190px" color="teal-8">
         <q-tooltip anchor="top left" self="bottom left">
           <tr>Usage: Low</tr>
           <tr>Average Usage: 130 kW</tr>
          </q-tooltip>
          <q-card-title>
            Smart Cafe
            <div slot="right" class="row items-center">
              <q-icon name="local_cafe" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                150
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 210px; height: 190px" color="light">
         <q-tooltip anchor="top left" self="bottom left">
           <tr>Usage: Not currently in use</tr>
           <tr>Average Usage: 30 kW</tr>
          </q-tooltip>
          <q-card-title>
            Project Room 01
            <div slot="right" class="row items-center">
              <q-icon name="edit" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                0
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
        <q-card inline class="q-pa-none q-ma-lg text-white" style="width: 200px; height: 190px" color="teal-2">
         <q-tooltip anchor="top left" self="bottom left">
           <tr>Usage: Medium</tr>
           <tr>Average Usage: 30 kW</tr>
          </q-tooltip>
          <q-card-title>
            Project Room 02
            <div slot="right" class="row items-center">
              <q-icon name="edit" color="white"/>
            </div>
          </q-card-title>
          <q-card-main>
            <q-item>
              <q-item-main class="q-display-2 text-center text-white">
                30
              </q-item-main>
              <q-item-side class="q-display-1 text-weight-light text-bottom text-white">
                kW
              </q-item-side>
            </q-item>
          </q-card-main>
        </q-card>
      </q-card-main>
      <q-card-separator/>
      <q-card-actions>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  data () {
    return {
      sup: {
      }
    }
  },
  methods: {
    open () {
      this.$refs.energyPerRoom.open()
    },
    close () {
      this.$refs.energyPerRoom.close()
    }
  }
}
</script>

<style scoped>
.text-white {
  color: #ffffff;
}
</style>
