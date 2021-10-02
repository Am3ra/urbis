<template>
  <q-header class="text-black" elevated>
    <q-toolbar>
      <div class="column q-mx-auto justify-center items-center content-center">
        <p class="text-h6 text-blue q-mt-xl">La Habana, Cuba</p>
      </div>
    </q-toolbar>
  </q-header>
  <q-page padding>
    <div class="text-h4 text-center q-mt-md">Teléfonos de Emergencia</div>
    <q-card class="q-mt-lg card">
      <q-card-section>
        <q-item-section> Teléfonos de Emergencia </q-item-section>
        <q-list bordered raised class="">
          <q-item clickable v-ripple>
            <q-item-section>Emergencias</q-item-section>
            <q-space />
            <q-item-section class="text-right"> +53 106</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> Policía </q-item-section>
            <q-space />
            <q-item-section class="text-right">+53 106</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> Incendios </q-item-section>
            <q-space />
            <q-item-section class="text-right">+53 106</q-item-section>
          </q-item>
          <q-item clickable v-ripple>
            <q-item-section> Directorio de asistencia </q-item-section>
            <q-space />
            <q-item-section class="text-right">+53 106</q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
    </q-card>
    <div class="text-h4 text-center q-mt-md">Teléfonos de Emergencia</div>
  </q-page>
</template>

<script>
export default {
  // name: 'PageName',
};
</script>

<style scoped>
.card {
  margin-right: auto;
  margin-left: auto;
  width: 80vw;
  max-width: 400px;
}
</style>
