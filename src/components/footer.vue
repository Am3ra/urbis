<template>
  <q-footer>
    <!-- <q-tabs switch-indicator>
        <q-route-tab icon="map" to="/your/route" replace label="One Tab" />
        <q-route-tab
          icon="assignment"
          to="/some/other/route"
          replace
          label="Other Tab"
        />
      </q-tabs> -->

    <q-toolbar class="bg-grey-3">
      <q-btn
        stack
        flat
        color="black"
        icon="o_explore"
        label="Discover"
        to="pages/discover"
      />
      <q-btn
        stack
        flat
        color="black"
        icon="o_location_on"
        label="Informacion"
        to="pages/info"
      />
      <q-btn
        stack
        flat
        color="black"
        icon="o_forum"
        label="Foros"
        to="pages/forum"
      />
      <q-btn
        stack
        flat
        color="black"
        icon="o_person"
        label="perfil"
        to="pages/profile"
      />
    </q-toolbar>
  </q-footer>
</template>

<script>
export default {
  name: "urbisFooter",
  setup() {
    return {};
  },
};
</script>
