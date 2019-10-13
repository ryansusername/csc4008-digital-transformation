<template>
  <q-page>
    <q-toolbar color="dark">
      <q-icon name="build"  style="font-size: 35px"/>
      <q-toolbar-title>
        Account Management
      </q-toolbar-title>
    </q-toolbar>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px; height: 517px">
      <q-card-title>
        <b> Password Management </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <br>
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
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px;">
      <q-card-title>
        <b> Wallet </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <p style="text-align: center; font-size:110%"> <u>QUB Wallet Balance:</u></p>
        <br>
        <div class="label">
          £20.00
        </div>
      </q-card-main>
      <q-card-separator />
      <q-card-main>
        <p style="text-align: center; font-size:110%"> <u>Add Funds:</u></p>
        <br>
      </q-card-main>
      <q-item-main>
        <div class="row">
          <div class="col-sm-1">
          </div>
          <div class="col-sm-4">
            <q-list link>
              <br>
              <q-item-main>
                <q-select
                  color = "blue"
                  float-label="Select payment type:"
                  v-model="typeTemp"
                  :options="payTypes"
                />
              </q-item-main>
              <br>
            </q-list>
          </div>
          <div class="col-sm-2">
          </div>
          <div class="col-sm-4">
            <q-list link>
              <br>
              <q-item-main>
                <q-select
                  color = "blue"
                  float-label="Select funding amount:"
                  v-model="payTemp"
                  :options="payAmounts"
                />
              </q-item-main>
              <br>
            </q-list>
          </div>
          <div class="col-sm-1">
          </div>
        </div>
        <br> <br>
        <div class="row justify-center">
          <q-btn label="Add Funds" color="blue" size="lg"/>
        </div>
        <br>
      </q-item-main>
    </q-card>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px; height: 517px">
      <q-card-title>
        <b> Queen's Support Details </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <br> <br>
      <p style="text-align: center; font-size:110%"> <u>Support Details:</u></p>
      <br>
      <p style="text-align: center; font-size:110%"> 10 College Park Ave,</p>
      <p style="text-align: center; font-size:110%"> Belfast</p>
      <p style="text-align: center; font-size:110%"> BT7 1LP</p> <br>
      <p style="text-align: center; font-size:110%"> help-eeecs@qub.ac.uk</p> <br><br>
      <div class="row justify-center">
        <q-btn label="Live Chat" color="blue" size="lg"/>
      </div>
      <br>
    </q-card>
  </q-page>
</template>

<script>
export default {
  name: 'Account Management',
  data () {
    return {
      payTemp: '£5',
      payAmounts: [{label: '£5', value: '£5'}, {label: '£10', value: '£10'}, {label: '£20', value: '£20'}],
      typeTemp: 'PayPal',
      payTypes: [{label: 'PayPal', value: 'PayPal'}, {label: 'Cash', value: 'Cash'}, {label: 'Mastercard', value: 'Mastercard'}]
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

<style scoped>
  .label {
    background-color: rgba(133, 213, 255, 0.54);
    padding: 15px;
    border-radius: 3px;
    display: inline-block;
    margin-left: 189px;
  }
</style>
