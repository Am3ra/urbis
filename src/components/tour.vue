<template>
  <q-img
    class="img q-pl-lg"
    :src="imageLink"
    :ratio="1"
    spinner-color="primary"
    spinner-size="82px"
  >
    <div class="absolute-full caption text-h6 flex flex-center">
      {{ title }}
    </div>
  </q-img>
</template>

<script>
import tourDialogVue from "./tourDialog.vue";

export default {
  // name: 'ComponentName',
  props: {
    title: String,
    author: String,
    avatarLink: String,
    imageLink: String,
    content: String,
    price: number,
  },
  setup(props) {
    function showD() {
      $q.dialog({
        component: tourDialogVue,

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
  width: 50vw;
  border-radius: 30px;
  /* height: 200px; */
  height: 200px;
}

.caption {
  font-weight: 800;
}
</style>
