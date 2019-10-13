<template>
<q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 400px; height: 300px">
  <q-card-title><b>Highest Consumers</b><q-btn slot="right" icon="search" @click="onShowEnergyPerRoom"/></q-card-title>
  <q-card-separator/>
  <q-card-main>
  <q-list>
    <q-item>
      <q-item-side icon="whatshot">
        Heating
      </q-item-side>
      <q-item-main>
        <q-progress :percentage="progress1" color="teal-8" style="height: 20px"/>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side icon="desktop_windows">
        Lab 1&nbsp;&nbsp;&nbsp;&nbsp;
      </q-item-side>
      <q-item-main>
        <q-progress :percentage="progress2" color="teal-6" style="height: 20px"/>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side icon="local_cafe">
        Café&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      </q-item-side>
      <q-item-main>
        <q-progress :percentage="progress3" color="teal-4" style="height: 20px"/>
      </q-item-main>
    </q-item>
    <q-item>
      <q-item-side icon="desktop_windows">
        Lab 2&nbsp;&nbsp;&nbsp;
      </q-item-side>
      <q-item-main>
        <q-progress :percentage="progress4" color="teal-2" style="height: 20px"/>
      </q-item-main>
    </q-item>
  </q-list>
</q-card-main>
<q-modal v-model="basicModal" :content-css="{maxWidth: '1100px'}">
  <div style="padding: 50px">
    <EnergyPerRoom ref="energyPerRoom"/>
  </div>
</q-modal>
</q-card>
</template>
<script>
import EnergyPerRoom from 'src/components/EnergyUsage/EnergyPerRoom.vue'
export default {
  data () {
    return {
      basicModal: false,
      progress1: 50,
      progress2: 40,
      progress3: 30,
      progress4: 15
    }
  },
  methods: {
    onShowEnergyPerRoom () {
      this.basicModal = true
    }
  },
  components: {
    EnergyPerRoom
  }
}
</script>
