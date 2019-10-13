<template>
  <q-page class="flex flex-center">
    <q-toolbar color="dark">
      <q-toolbar-title>
        Example 1
      </q-toolbar-title>
      <q-btn flat round dense icon="mail" />
    </q-toolbar>
    <q-card inline style="width: 500px">
      <q-card-media>
        <img src="~assets/donuts.jpg">
      </q-card-media>
      <q-card-title>
        Cafe Basilico
        <div slot="right" class="row items-center">
          <q-icon name="place" /> 250 ft
        </div>
      </q-card-title>
      <q-card-main>
        <p>$・Italian, Cafe</p>
        <p class="text-faded">Small plates, salads & sandwiches in an intimate setting.</p>
      </q-card-main>
      <q-card-separator />
      <q-card-actions>
        <q-btn flat round dense icon="event" />
        <q-btn flat label="5:30PM" />
        <q-btn flat label="7:30PM" />
        <q-btn flat label="9:00PM" />
        <q-btn flat color="primary" label="Reserve" />
      </q-card-actions>
    </q-card>

  </q-page>
</template>

<script>
export default {
  name: 'PageExample1'
}
</script>
