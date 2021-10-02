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
  width: 50vw;
  border-radius: 30px;
  /* height: 200px; */
  height: 200px;
}

.caption {
  font-weight: 800;
}
</style>
