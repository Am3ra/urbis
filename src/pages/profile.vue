<template>
  <q-page>
    <div class="header"></div>
    <q-card class="my-profile">
      <q-card-section horizontal>
        <q-avatar class="q-mx-lg q-mt-md" rounded size="48px">
          <img src="https://cdn.quasar.dev/img/avatar.png" />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
        <div class="text q-mt-sm">
          <div class="text-h6">Our Changing Planet</div>
          <div class="text-subtitle2">by John Doe</div>
        </div>
      </q-card-section>
      <q-card-section>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style lang="scss">
.header {
  height: 140px;
  background-color: $primary;
  z-index: -1;
}

.my-profile {
  margin: 0 auto;
  margin-top: -50px;
  max-width: 80vw;
}
</style>
