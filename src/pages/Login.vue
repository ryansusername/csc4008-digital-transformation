<template>
  <div>
    <img src="~/assets/qub.jpg" style="background-position: center; background-repeat: no-repeat; background-size: auto; width:2000px;">
    <div class="fixed-center text-center">
      <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px; background-color: rgba(245, 245, 245, 0.8);">
        <!--<div style="opacity: 1;filter: alpha(opacity=1);">-->
          <q-card-title>
            <h3>S M A R T I C U S</h3>
          </q-card-title>
          <q-card-main>
          <p>
            <q-icon name="vpn_key" size="150px" color="darkgrey" />
          </p>
          <br> <br>
          <q-select
            v-model="userType"
            :options="userTypes"
          />
          <q-input v-if="userType==='admin'" v-model="user.userName" float-label="Admin number" align="center" class="black"/>
            <q-input v-else-if="userType==='staff'" v-model="user.userName" float-label="Staff number" align="center" class="black"/>
          <q-input v-else v-model="user.userName" float-label="Student number" align="center"/>
          <br>
          <q-input v-model="user.password" type="password" float-label="Password" align="center"/>
          <br> <br>
          <q-btn
            color="secondary"
            style="width:200px;"
            @click="$router.push('/')"
          >Login</q-btn>
          </q-card-main>
        <!--</div>-->
      </q-card>
    </div>

  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      userTypes: [
        {
          label: 'Admin',
          value: 'admin'
        },
        {
          label: 'Student',
          value: 'student'
        },
        {
          label: 'Staff',
          value: 'staff'
        }
      ],
      user: {
        userName: '',
        password: ''
      }
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
