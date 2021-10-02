<template>
  <q-img
    class="img q-mr-lg"
    :src="imageLink"
    :ratio="9 / 16"
    spinner-color="primary"
    spinner-size="82px"
  >
    <div class="absolute-full caption text-h6 flex flex-center">
      {{ title }}
    </div>
  </q-img>
</template>

<script>
export default {
  // name: 'ComponentName',
  props: {
    imageLink: String,
    title: String,
  },
  setup(props) {
    return { ...props };
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
