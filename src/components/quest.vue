<template>
  <q-img
    class="img q-pl-lg"
    :src="imageLink"
    :ratio="1"
    spinner-color="primary"
    spinner-size="82px"
    @click="showD"
  >
    <div class="absolute-full caption text-h6 flex flex-center">
      {{ title }}
    </div>
  </q-img>
</template>

<script>
import { useQuasar } from "quasar";
import questDialog from "./questDialog.vue";

export default {
  name: "quest",
  props: {
    imageLink: String,
    title: String,
    steps: [Object],
  },
  setup(props) {
    const $q = useQuasar();

    function showD() {
      $q.dialog({
        component: questDialog,

        // props forwarded to your custom component
        componentProps: {
          ...props,
          // ...more..props...
        },
      })
        .onOk(() => {
          console.log("OK");
        })
        .onCancel(() => {
          console.log("Cancel");
          $q.notify("Iniciado!");
        })
        .onDismiss(() => {
          console.log("Called on OK or Cancel");
        });
    }

    return { showD, ...props };
  },
};
</script>

<style scoped>
.img {
  width: 40vw;
  border-radius: 30px;
  /* height: 200px; */
  height: 200px;
}

.caption {
  font-weight: 800;
}
</style>
