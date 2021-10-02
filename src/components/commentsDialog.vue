<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="q-dialog-plugin">
      <!--
        ...content
        ... use q-card-section for it?
      -->
      <q-card-section>
        <div class="row justify-between">
          <div class="text">
            <div class="text-h6">{{ post.title }}</div>
            <div class="text-subtitle2">{{ post.author }}, {{ post.time }}</div>
          </div>
          <q-btn flat color="black" icon="o_close" @click="onCancelClick" />
        </div>
      </q-card-section>
      <q-card-section>
        {{ post.content }}
      </q-card-section>
      <img src="https://cdn.quasar.dev/img/mountains.jpg" />

      <q-card-actions align="center">
        <div class="row items-center">
          <q-btn icon="arrow_upward" flat round ripple />
          <div>{{ post.votes }}</div>
          <q-btn icon="arrow_downward" flat round ripple />
        </div>
        <q-space />
        <q-space />
        <q-btn color="black" icon="o_ios_share" flat round ripple />
      </q-card-actions>

      <!-- buttons example
      <q-card-actions align="right">
        <q-btn color="primary" label="OK" @click="onOKClick" />
        <q-btn color="primary" label="Cancel" @click="onCancelClick" />
      </q-card-actions> -->
      <q-card-section class="bg-grey-3">
        <comment
          v-for="(comment, index) in post.comments"
          :key="index"
          v-bind="comment"
          class="q-mb-md"
        />
      </q-card-section>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import comment from "../components/comment.vue";

export default {
  components: {
    comment,
  },
  props: {
    post: Object,
  },

  emits: [
    // REQUIRED; need to specify some events that your
    // component will emit through useDialogPluginComponent()
    ...useDialogPluginComponent.emits,
  ],

  setup(props) {
    // REQUIRED; must be called inside of setup()
    const { dialogRef, onDialogHide, onDialogOK, onDialogCancel } =
      useDialogPluginComponent();
    // dialogRef      - Vue ref to be applied to QDialog
    // onDialogHide   - Function to be used as handler for @hide on QDialog
    // onDialogOK     - Function to call to settle dialog with "ok" outcome
    //                    example: onDialogOK() - no payload
    //                    example: onDialogOK({ /*.../* }) - with payload
    // onDialogCancel - Function to call to settle dialog with "cancel" outcome

    return {
      // This is REQUIRED;
      // Need to inject these (from useDialogPluginComponent() call)
      // into the vue scope for the vue html template
      dialogRef,
      onDialogHide,

      // other methods that we used in our vue html template;
      // these are part of our example (so not required)
      onOKClick() {
        // on OK, it is REQUIRED to
        // call onDialogOK (with optional payload)
        onDialogOK();
        // or with payload: onDialogOK({ ... })
        // ...and it will also hide the dialog automatically
      },

      // we can passthrough onDialogCancel directly
      onCancelClick: onDialogCancel,
    };
  },
};
</script>
