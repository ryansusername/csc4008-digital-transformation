<template>
    <q-card flat class="no-padding no-margin">
      <div class="q-display-1 text-center">Energy Controls</div>
      <q-list>
        <q-item class="no-padding no-margin">
          <q-item-main>Floor:</q-item-main>
          <q-item-side>02</q-item-side>
        </q-item>
        <q-item>
          <q-option-group
            type="toggle"
            color="secondary"
            v-model="group2"
            :options="[
              { label: 'Energy Saving', value: 'powerSave' },
              { label: 'Air Conditioning', value: 'airCon' },
              { label: 'Power Down', value: 'powerOff', color: 'red', checkedIcon: 'power_settings_new', uncheckedIcon: 'power_settings_new' }
            ]"
          />
        </q-item>
        <q-item class="no-padding no-margin">
          <q-item-main>Floor:</q-item-main>
          <q-item-side>01</q-item-side>
        </q-item>
        <q-item>
          <q-option-group
            type="toggle"
            color="secondary"
            v-model="group1"
            :options="[
              { label: 'Energy Saving', value: 'powerSave' },
              { label: 'Air Conditioning', value: 'airCon' },
              { label: 'Power Down', value: 'powerOff', color: 'red', checkedIcon: 'power_settings_new', uncheckedIcon: 'power_settings_new' }
            ]"
          />
        </q-item>
        <q-item class="no-padding no-margin">
          <q-item-main>Floor:</q-item-main>
          <q-item-side>0G</q-item-side>
        </q-item>
        <q-item>
          <q-option-group
            type="toggle"
            color="secondary"
            v-model="groupG"
            :options="[
              { label: 'Energy Saving', value: 'powerSave' },
              { label: 'Air Conditioning', value: 'airCon' },
              { label: 'Power Down', value: 'powerOff', color: 'red', checkedIcon: 'power_settings_new', uncheckedIcon: 'power_settings_new' }
            ]"
          />
        </q-item>
      </q-list>
      <q-card-separator/>
      <q-card-actions>
      </q-card-actions>
    </q-card>
</template>

<script>
export default {
  data () {
    return {
      energyType2: true,
      energyType1: false,
      energyTypeG: true,
      group2: ['powerSave', 'airCon'],
      group1: ['powerSave'],
      groupG: ['powerOff'],
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
.text-black {
  color: black;
}
</style>
