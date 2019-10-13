<template>
  <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 400px; height: 300px">
    <q-card-title><b>Smart Energy Saving Suggestions</b>
      <q-btn slot="right" icon="settings" @click="onShowEnergyControls"/>
    </q-card-title>
    <q-card-separator/>
    <q-card-main>
      <q-chip closable color="teal-3" icon="wb_incandescent">
        {{this.energySuggestionArr[0]}}
      </q-chip>
      <q-chip closable color="teal-5" icon="wb_incandescent">
        {{this.energySuggestionArr[1]}}
      </q-chip>
      <q-chip closable color="teal-7" icon="wb_incandescent">
        {{this.energySuggestionArr[2]}}
      </q-chip>
      <q-chip closable color="teal-8" icon="wb_incandescent">
        {{this.energySuggestionArr[3]}}
      </q-chip>
    </q-card-main>
    <q-modal v-model="basicModal" :content-css="{maxWidth: '500px'}">
      <div style="padding: 50px">
        <EnergyControls ref="energyControls"/>
      </div>
    </q-modal>
  </q-card>
</template>
<script>
import EnergyControls from 'src/components/EnergyUsage/EnergyControls.vue'

export default {
  data () {
    return {
      basicModal: false,
      energySuggestionArr: [
        'Turn off lighting on 3rd floor',
        'Switch to low power after 3pm',
        'Power down AllState Labs after 3pm',
        'Power down lab 2 until 1pm on Wednesdays'
      ]
    }
  },
  methods: {
    onShowEnergyControls () {
      this.basicModal = true
    }
  },
  components: {
    EnergyControls
  }
}
</script>
