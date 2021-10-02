<template>
  <q-card class="my-card">
    <q-card-section horizontal>
      <div class="votes">{{ votes }}</div>
      <div class="text">
        <div class="text-h6">{{ author }}</div>
        <div class="text-subtitle2">{{ content }}</div>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
export default {
  props: {
    author: String,
    votes: String,
    content: String,
  },
  setup(props) {
    return { ...props };
  },
};
</script>
