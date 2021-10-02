<template>
  <q-header class="text-black" elevated>
    <q-toolbar>
      <!--<q-btn
          color="black"
          flat
          round
          dense
          icon="menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="text-black"> Urbis </q-toolbar-title>
        -->

      <div class="column q-mb-md">
        <p>Cerca de ti.</p>
        <div class="row text-body1">
          <q-icon color="blue" size="20px" name="o_location_on" />
          <p>La Habana, Cuba</p>
          <q-icon color="blue" size="20px" name="o_near_me" />
        </div>
        <q-input
          rounded
          outlined
          v-model="text"
          type="text"
          bg-color="white"
          label="¿A dónde iremos hoy?"
        >
          <template v-slot:append>
            <q-icon name="o_search" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
      <q-space />
      <q-icon color="blue" size="50px" name="o_notifications" />
    </q-toolbar>

    <!-- <q-tabs>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->
  </q-header>
  <q-page padding>
    <p class="text-h4 q-mb-lg q-mt-lg">Sitios Sugeridos</p>
    <p class="text-h4 q-mb-lg">Tours</p>
    <p class="text-h4 q-mb-lg">Quest</p>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>
