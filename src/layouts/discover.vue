<template>
  <q-layout view="hHh Lpr fFf">
    <!-- Be sure to play with the Layout demo on docs -->

    <!-- (Optional) The Header -->

    <!-- (Optional) The Footer -->
    <urbis-footer />
    <!-- (Optional) A Drawer; you can add one more with side="right" or change this one's side -->
    <q-drawer v-model="leftDrawerOpen" side="left" bordered class="bg-grey-2">
      <!-- QScrollArea is optional -->
      <!-- <q-scroll-area class="fit q-pa-sm">
         Content here s
      </q-scroll-area> -->
      <q-list bordered>
        <q-item clickable v-ripple>
          <q-item-section avatar>
            <q-icon color="primary" name="bluetooth" />
          </q-item-section>
          <q-item-section>Icon as avatar</q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <!-- This is where pages get injected -->
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";
import urbisFooter from "../components/footer.vue";

export default {
  // name: 'LayoutName',
  components: {
    urbisFooter,
  },
  setup() {
    const leftDrawerOpen = ref(false);
    const text = ref("");

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },
      text,
    };
  },
};
</script>
