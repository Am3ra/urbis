<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="card q-dialog-plugin">
      <!--
        ...content
        ... use q-card-section for it?
      -->
      <q-card-section>
        <div class="text-weight-bolder text-blue text-h5">Tour</div>
        <div class="text-h5 text-weight-bold q-mb-md q-mt-sm">{{ title }}</div>
        <div class="row q-mb-lg">
          <q-avatar
            size="50px"
            font-size="52px"
            color="teal"
            text-color="white"
          >
            <q-img
              :src="avatarLink"
              :ratio="16 / 9"
              spinner-color="primary"
              spinner-size="82px"
            />
          </q-avatar>
          <div class="column">
            <div class="text-subtitle3">{{ author }}</div>
            <div class="text-caption text-weight-thin">Guia Local</div>
          </div>
        </div>
        <div class="text-body1">{{ content }}</div>
        <q-list>
          <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="packageSel" val="a" color="teal" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Teal</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar>
              <q-radio v-model="packageSel" val="b" color="orange" />
            </q-item-section>
            <q-item-section>
              <q-item-label>Orange</q-item-label>
              <q-item-label caption>With description </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <!-- buttons example -->
      <q-card-actions align="center">
        <q-btn
          class="q-mb-md text-weight-bolder"
          color="blue"
          label="Reservar"
          @click="onCancelClick"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import { ref } from "vue";

export default {
  props: {
    title: String,
    author: String,
    avatarLink: String,
    imageLink: String,
    content: String,
    price: Number,
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
    const packageSel = ref("");
    return {
      packageSel,
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
      ...props,
    };
  },
};
</script>

<style scoped>
.card {
  border-radius: 25px;
}
</style>
