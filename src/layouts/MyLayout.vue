<template>
  <q-layout view="lHh Lpr lFf">
    <q-layout-header>
      <q-toolbar
        color="dark"
        :inverted="$q.theme === 'ios'">
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          aria-label="Menu">
          <q-icon name="menu"/>
        </q-btn>

        <q-toolbar-title>
          <div class="text-weight-light">S M A R T I C U S</div> {{$route.meta.title}}
          <div slot="subtitle">Queen's Computer Science Building Management System</div>
        </q-toolbar-title>

        <q-select
          inverted
          dark
          color="dark"
          v-model="userType"
          :options="userTypes"
          @change="printUserType"/>

        <q-btn to="/Login">Log out</q-btn>

      </q-toolbar>
    </q-layout-header>

    <q-layout-drawer
      v-model="leftDrawerOpen"
      :content-class="$q.theme === 'mat' ? 'bg-grey-2' : null">
      <img src="~/assets/qub.jpg" width="100%;">
      <q-list
        no-border
        link
        inset-delimiter>
        <q-list-header class="text-center">S M A R T I C U S&nbsp;&nbsp;&nbsp;&nbsp;N A V I G A T I O N</q-list-header>
        <q-item to="/">
          <q-item-side icon="home" />
          <q-item-main label="Home Dashboard" sublabel="Interface to the system" />
        </q-item>
        <q-item to="/HVACandLighting">
          <q-item-side icon="wb_incandescent" />
          <q-item-main label="HVAC and Lighting" sublabel="Statistics and preferences" />
        </q-item>
        <q-item to="/SpaceAllocation">
          <q-item-side icon="business" />
          <q-item-main label="Space Allocation" sublabel="Room booking and lab usage" />
        </q-item>
        <q-item to="/SafetyandSecurity">
          <q-item-side icon="lock" />
          <q-item-main label="Safety and Security" sublabel="Warnings, emergency messages, building updates" />
        </q-item>
        <q-item to="/EnergyUsage">
          <q-item-side icon="offline_bolt" />
          <q-item-main label="Energy Usage" sublabel="Building and occupant energy" />
        </q-item>
        <q-item to="/Amenities">
          <q-item-side icon="local_cafe" />
          <q-item-main label="Amenities" sublabel="Café queue, online orders, vending machine information " />
        </q-item>
        <q-item to="/AccountManagement">
          <q-item-side icon="build" />
          <q-item-main label="Account Management" sublabel="Information and password management " />
        </q-item>
      </q-list>
    </q-layout-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
  name: 'MyLayout',
  data () {
    return {
      userTypes: [
        {
          label: 'ADMIN',
          value: 'admin'
        },
        {
          label: 'STUDENT',
          value: 'student'
        },
        {
          label: 'STAFF',
          value: 'staff'
        }
      ],
      leftDrawerOpen: this.$q.platform.is.desktop
    }
  },
  methods: {
    onLogout () {
    },
    printUserType () {
      console.log(this.userType)
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
  }
}
</script>

<style>
.space { margin-top: 350px; }
</style>
