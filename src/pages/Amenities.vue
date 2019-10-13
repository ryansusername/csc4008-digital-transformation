<template>
  <q-page>
    <q-toolbar color="dark">
      <q-icon name="local_cafe"  style="font-size: 35px"/>
      <q-toolbar-title>
        Amenities
      </q-toolbar-title>
    </q-toolbar>
    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px;">
      <q-card-title>
        <b> Smart Café </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator />
      <q-card-main>
        <p style="text-align: center; font-size:110%"> <u>QUB Wallet Balance:</u></p>
        <br>
        <div class="label">
          $20.00
        </div>
      </q-card-main>
      <q-card-separator />
      <br> <br>
      <p style="text-align: center; font-size:110%"> <u>Smart Café Queue:</u></p>
      <q-progress :percentage="40" stripe animate color="indigo-5" :buffer="buffer" height="20px"/>
      <br> <br>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Quick Food Order:</u></p>
      <br>
      <table style="width:100%">
        <tr>
          <th>Meal</th>
          <th>Cost</th>
        </tr>
        <tr>
          <td>Chicken and Chips</td>
          <td>£3.50</td>
        </tr>
        <tr>
          <td>55-Day dry-aged Ribeye</td>
          <td>£150</td>
        </tr>
        <tr>
          <td>Lasagne</td>
          <td>£4.20</td>
        </tr>
      </table>
      <br>
      <br>
      <div class="row">
        <div class="col-sm-7">
          <q-list link>
            <br>
            <q-item-main>
              <q-select
                color = "blue"
                float-label="Select meal:"
                v-model="mealtemp"
                :options="MealOptions"
              />
            </q-item-main>
            <br>
          </q-list>
        </div>
        <div class="col-sm-5">
          <q-item-main>
            <q-btn label="Order" size="43px" class="full-width" color="blue" @click="orderAppear"/>
          </q-item-main>
        </div>
      </div>
      <br> <br>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Active Orders:</u></p>
      <q-card-main>
        {{ this.order }}
      </q-card-main>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px">
      <q-card-title>
        <b> Leisure </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <q-card-separator /> <br> <br>
      <p style="text-align: center; font-size:110%"> <u>Coffee Cups Remaining: </u></p> <br>
      <div class="row">
        <div class="col-sm-4">
          <Coffee :height="400"></Coffee>
        </div>
        <div class="col-sm-4">
          <Coffee1 :height="400"></Coffee1>
        </div>
        <div class="col-sm-4">
          <Coffee2 :height="400"></Coffee2>
        </div>
      </div> <br> <br>
      <q-card-separator />
      <br>
      <p style="text-align: center; font-size:110%"> <u>Vending Machine Stock : </u></p> <br>
      <div class="row">
        <div class="col-sm-4">
          <Vending :height="400"></Vending>
        </div>
        <div class="col-sm-4">
          <Vending1 :height="400"></Vending1>
        </div>
        <div class="col-sm-4">
          <Vending2 :height="400"></Vending2>
        </div>
      </div> <br> <br>
      <q-card-separator />
      <br> <br> <br>
      <p style="text-align: center; font-size:110%"> <u>Eating Area Space:</u></p>
      <q-progress :percentage="40" stripe animate color="secondary" :buffer="buffer" height="20px"/>
      <br> <br>
    </q-card>

    <q-card inline class="bigger q-pa-sm q-ma-lg" style="width: 500px" >
      <q-card-title>
        <b> Facility and Amenity Usage Trends </b>
        <span slot="right" class="row items-center">
        </span>
      </q-card-title>
      <CoffeeBusy :height="190"></CoffeeBusy> <br>
      <CafeBusy :height="190"></CafeBusy> <br>
      <EatingBusy :height="190"></EatingBusy>
    </q-card>
  </q-page>
</template>

<script>
import Vending from 'src/components/Vending'
import Vending1 from 'src/components/Vending1'
import Vending2 from 'src/components/Vending2'
import Coffee from 'src/components/Coffee'
import Coffee1 from 'src/components/Coffee1'
import Coffee2 from 'src/components/Coffee2'
import CoffeeBusy from 'src/components/CoffeeBusy'
import CafeBusy from 'src/components/CafeBusy'
import EatingBusy from 'src/components/EatingBusy'

export default {
  name: 'Amenities',
  components: {
    Vending,
    Vending1,
    Vending2,
    Coffee,
    Coffee1,
    Coffee2,
    CoffeeBusy,
    CafeBusy,
    EatingBusy
  },
  data () {
    return {
      buffer: 0,
      mealtemp: 'Chicken and Chips',
      MealOptions: [{label: 'Chicken and Chips', value: 'Chicken and Chips'}, {label: '55-Day dry-aged Ribeye', value: '55-Day dry-aged Ribeye'}, {label: 'Lasagne', value: 'Lasagne'}],
      order: 'No Active Orders..'
    }
  },
  methods: {
    orderAppear () {
      this.order = 'Order: ' + this.mealtemp
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

<style>
  .label {
    background-color: rgba(133, 213, 255, 0.54);
    padding: 15px;
    border-radius: 3px;
    display: inline-block;
    margin-left: 189px;
  }
</style>
