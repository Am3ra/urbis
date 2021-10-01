<template>
  <q-page class="flex flex-center">
    <div class="middle-container row">
      <div class="left col-6 content-end">
        <h1 class="title-1 q-pb-none q-mb-none">Go where</h1>
        <br />
        <h3 class="title-2 q-mt-none">you feel most alive</h3>
        <p>
          Mountain tours combine hiking, sightseeing and super jeep excursions,
          taking visitors to some of the land's most breathtaking regions
        </p>
        <q-btn> Join now! </q-btn>
      </div>
      <div class="right col-6">
        <img
          class="right-image"
          src="https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/c0f9b0dc27f05327b8e867d8/pexelsphoto3879070.jpeg"
          alt="Balloons"
          srcset=""
        />
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "PageIndex",
});
</script>

<style scoped>
.left {
  align-items: flex-start;
}
.right-image {
  max-height: 80vh;
  max-width: 100%;
}
.middle-container {
  width: 80vw;
  max-height: 80vh;
}

.title-1 {
  font-weight: 700;
  text-align: end;
  max-width: 50%;
  align-self: flex-start;
}
</style>
