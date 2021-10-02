<template>
  <q-page>
    <div class="header"></div>
    <q-card class="profile-card my-profile q-mb-lg">
      <q-card-section horizontal>
        <q-avatar class="q-mx-lg q-mt-md" size="70px">
          <img src="https://cdn.quasar.dev/img/avatar.png" square />
          <q-badge floating color="teal">new</q-badge>
        </q-avatar>
        <div class="text q-mt-sm">
          <div class="text-h6">Tiffany 12345</div>
          <div class="text-subtitle2">Houston, Texas</div>
          <div class="text-subtitle3 text-blue row">
            <q-icon name="o_near_me" /> 55k millas
          </div>
          <q-btn
            class="covidButton text-subtitle3 q-my-md"
            color="negative"
            unelevated
            rounded
            no-caps
            label="Reportar caso de covid"
          />
        </div>
      </q-card-section>
    </q-card>

    <q-card class="profile-card q-my-lg">
      <q-card-section>
        <div class="text-h6 text-blue">Historia de Viajero</div>
      </q-card-section>
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />
    </q-card>
    <q-card class="profile-card q-my-lg">
      <q-card-section>
        <div class="text-h6 text-blue">Publicaciones</div>
      </q-card-section>
      <q-card-section class="row justify-evenly q-gutter-sm">
        <q-img
          v-for="(image, idx) in postList"
          :src="image"
          :key="idx"
          :ratio="1"
          spinner-color="primary"
          spinner-size="82px"
          class="col-3"
        />
      </q-card-section>
    </q-card>
  </q-page>
</template>

<script>
const postList = [
  "https://i.imgur.com/FwlVFXd.png",
  "https://i.imgur.com/v7E164c.png",
  "https://i.imgur.com/pWpbM4Y.jpg",
];

export default {
  // name: 'PageName',
  setup(props) {
    return {
      postList,
    };
  },
};
</script>

<style lang="scss">
.header {
  height: 140px;
  background-color: $primary;
  z-index: -1;
}

.profile-card {
  margin-right: auto;
  margin-left: auto;
  width: 80vw;
  max-width: 400px;
}

.my-profile {
  margin-top: -50px;
}

.covidButton {
  width: 100%;
  font-size: 12pt;
}

.q-avatar__content,
.q-avatar img:not(.q-icon):not(.q-img__image) {
  border-radius: 50%;
}
</style>
