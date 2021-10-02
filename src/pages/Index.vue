<template>
  <q-page
    class="flex flex-center"
    :class="{ background: $q.platform.is.mobile }"
  >
    <div class="middle-container row">
      <div
        class="
          left
          column
          col-md-6 col-sm-12 col-xs-12 col-6
          q-pr-xl
          items-end
          justify-center
        "
      >
        <h1 class="title-1 q-pb-none q-my-none">
          Go <br />
          where
        </h1>
        <br />
        <h3
          class="title-2 q-my-none"
          :class="{
            'text-white': $q.platform.is.mobile,
            'q-mt-xl': $q.platform.is.mobile,
          }"
        >
          you feel <br />most alive
        </h3>
        <p class="text desktop-only self-start">
          Mountain tours combine hiking, sightseeing and super jeep excursions,
          taking visitors to some of the land's most breathtaking regions.
        </p>
        <div>
          <q-btn
            color="white"
            text-color="black"
            :class="{ 'q-mr-lg': $q.platform.is.mobile }"
          >
            Sign up
          </q-btn>
          <q-btn color="white" text-color="black" to="pages/discover">
            Login
          </q-btn>
        </div>
      </div>
      <div class="desktop-only gt-sm right col-6">
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
import { defineComponent, computed, ref } from "vue";
import { useQuasar } from "quasar";

export default defineComponent({
  name: "PageIndex",
  setup(props) {
    const $q = useQuasar();
    return { $q };
  },
});
</script>

<style scoped>
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

  /* max-width: 50%; */

  /* align-self: flex-end; */
}
.title-2 {
  text-align: end;
}

.text {
  width: 80%;
  text-align: justify;
}

.background {
  background-image: url("https://images03.nicepage.com/a1389d7bc73adea1e1c1fb7e/c0f9b0dc27f05327b8e867d8/pexelsphoto3879070.jpeg");
  background-size: cover;
  background-position: right top;
}

.text-mobile {
  width: 80%;
}
</style>
