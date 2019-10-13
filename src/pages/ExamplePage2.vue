<template>
  <q-page class="flex flex-center">
    <q-toolbar color="dark">
      <q-toolbar-title>
        Example 2
      </q-toolbar-title>
      <q-btn flat round dense icon="mail" />
    </q-toolbar>
    <q-list>
      <q-collapsible icon="explore" label="First">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible icon="perm_identity" label="Second">
        <div>
          Content
        </div>
      </q-collapsible>
      <q-collapsible icon="shopping_cart" label="Third">
        <div>
          Content
        </div>
      </q-collapsible>
    </q-list>
  </q-page>
</template>

<style>
</style>

<script>
export default {
  name: 'PageExample2'
}
</script>
