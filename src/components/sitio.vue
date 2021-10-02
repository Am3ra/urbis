<template>
  <q-img
    class="img q-ml-lg"
    :src="imageLink"
    :ratio="9 / 16"
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
import sitioDialog from "./sitioDialog.vue";
import { useQuasar } from "quasar";

export default {
  // name: 'ComponentName',
  props: {
    imageLink: String,
    title: String,
  },
  setup(props) {
    const $q = useQuasar();

    function showD() {
      $q.dialog({
        component: sitioDialog,

        // props forwarded to your custom component
        componentProps: {
          text: "something",
          // ...more..props...
        },
      })
        .onOk(() => {
          console.log("OK");
        })
        .onCancel(() => {
          console.log("Cancel");
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
  min-height: 100px;
  max-height: 30vh;
}

.caption {
  font-weight: 800;
}
</style>
