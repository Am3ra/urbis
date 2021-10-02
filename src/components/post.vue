<template>
  <q-card class="my-post q-mb-xl q-mx-auto" @click="seeComments">
    <q-card-section>
      <div class="text-h6">{{ post.title }}</div>
      <div class="text-subtitle2">{{ post.author }}</div>
    </q-card-section>
    <img @click="seeComments" src="https://cdn.quasar.dev/img/mountains.jpg" />

    <!-- <q-card-section>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit
    </q-card-section> -->
    <q-card-actions align="center">
      <div class="row items-center">
        <q-btn icon="arrow_upward" flat round ripple />
        <div>{{ post.votes }}</div>
        <q-btn icon="arrow_downward" flat round ripple />
      </div>
      <q-space />
      <q-btn
        color="black"
        icon="o_mode_comment"
        flat
        ripple
        :label="post.comment_count"
        class="text-black"
      />
      <q-space />
      <q-btn color="black" icon="o_ios_share" flat round ripple />
    </q-card-actions>
  </q-card>
</template>

<script>
import commentsDialog from "../components/commentsDialog.vue";
import { useQuasar } from "quasar";
import { ref } from "vue";

export default {
  name: "post",
  props: {
    post: Object,
  },
  setup(props) {
    const $q = useQuasar();

    function seeComments() {
      $q.dialog({
        component: commentsDialog,
        componentProps: {
          post: props.post,
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
    return {
      seeComments,
      ...props,
    };
  },
};
</script>

<style scoped>
.my-post {
  max-width: 80%;
}
</style>
