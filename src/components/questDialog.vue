<template>
  <!-- notice dialogRef here -->
  <q-dialog ref="dialogRef" @hide="onDialogHide">
    <q-card class="card q-dialog-plugin">
      <!--
        ...content
        ... use q-card-section for it?
      -->
      <q-card-section>
        <div class="text-weight-bolder text-blue text-h5">Quest</div>
        <div class="text-h5 text-weight-bold q-mb-md q-mt-sm">
          Iniciar Quest
        </div>

        <div class="text-body1">
          Te recomendamos las siguientes actividades.
        </div>
        <q-list>
          <!--
        Rendering a <label> tag (notice tag="label")
        so QRadios will respond to clicks on QItems to
        change Toggle state.
      -->

          <q-item tag="label" v-ripple>
            <q-item-section avatar> </q-item-section>
            <q-item-section>
              <q-item-label>Teal</q-item-label>
            </q-item-section>
          </q-item>

          <q-item tag="label" v-ripple>
            <q-item-section avatar> </q-item-section>
            <q-item-section>
              <q-item-label>Orange</q-item-label>
              <q-item-label caption>With description </q-item-label>
            </q-item-section>
          </q-item>
        </q-list>
      </q-card-section>
      <!-- buttons example -->
      <q-card-actions align="center">
        <a href="https://e67c-2806-104e-9-94e3-59b6-2def-5fbe-377a.ngrok.io/">
          <q-btn
            class="q-mb-md text-weight-bolder"
            color="blue"
            label="Iniciar"
            no-caps
            @click="onCancelClick"
          >
          </q-btn
        ></a>
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
import { useDialogPluginComponent } from "quasar";
import { ref } from "vue";

export default {
  props: {
    imageLink: String,
    title: String,
    steps: [Object],
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
