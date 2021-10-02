<template>
  <q-header class="text-black" elevated>
    <q-toolbar>
      <div class="column q-mx-auto justify-center items-center content-center">
        <p class="text-h4 text-blue q-mt-xl">La Habana, Cuba</p>
        <q-btn-toggle
          unelevated
          ripple
          v-model="model"
          toggle-color="blue"
          color="white"
          text-color="black"
          toggle-text-color="white"
          class="text-black q-mx-auto q-mb-lg self-center"
          :options="[
            { label: 'Tendencias', value: 1 },
            { label: 'Nuevos', value: 2 },
          ]"
        />
      </div>
    </q-toolbar>
  </q-header>
  <q-page padding scroll>
    <!-- <q-scroll.-area style="width: 100%; height: 100%"> </q-scroll-area> -->
    <q-pull-to-refresh @refresh="refresh">
      <post
        class="q-mb-lg"
        v-for="(post, index) in postList"
        :key="index"
        v-bind:post="post"
        scroll
      />
    </q-pull-to-refresh>
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
      <q-btn fab icon="add" color="blue" />
    </q-page-sticky>
  </q-page>
</template>

<script>
import { ref } from "vue";
import post from "../components/post.vue";

const postList = [
  {
    title: "¡Lugares que debes visitar!",
    author: "@nebur300",
    votes: "6k",
    comment_count: "1k",
    time: "20min",
    type: "text",
    content:
      "Les recomiendo que visiten el Restaurante Delicias. Visitar el museo de la Gran Batalla me sorprendió por completo! Pero el lugar más sorprendente... ",
    comments: [
      {
        author: "@Alan.Macedo",
        votes: "1k",
        content:
          "Tuve la oportunidad de ir a varios de los sitios que comentabas. Y definitivamente fueron una maravilla.",
      },
      {
        author: "@OsmanVTG",
        votes: "900",
        content:
          "Creo que le faltaría la playa X para que definitivamente esté completa",
      },
      {
        author: "@@Luis.G",
        votes: "0",
        content:
          "Pocos hablan de esto al respecto pero poder pasear a tu perro en la playa",
      },
    ],
  },
  {
    title: "¡Lugares que debes visitar!",
    author: "@nebur300",
    votes: "6k",
    comment_count: "1k",
    time: "20min",
    type: "text",
    comments: [
      {
        author: "@Alan.Macedo",
        votes: "1k",
        content:
          "Tuve la oportunidad de ir a varios de los sitios que comentabas. Y definitivamente fueron una maravilla.",
      },
      {
        author: "@OsmanVTG",
        votes: "900",
        content:
          "Creo que le faltaría la playa X para que definitivamente esté completa",
      },
      {
        author: "@@Luis.G",
        votes: "0",
        content:
          "Pocos hablan de esto al respecto pero poder pasear a tu perro en la playa",
      },
    ],
  },
  {
    title: "¡Lugares que debes visitar!",
    author: "@nebur300",
    votes: "6k",
    comment_count: "1k",
    time: "20min",
    type: "text",
    comments: [
      {
        author: "@Alan.Macedo",
        votes: "1k",
        content:
          "Tuve la oportunidad de ir a varios de los sitios que comentabas. Y definitivamente fueron una maravilla.",
      },
      {
        author: "@OsmanVTG",
        votes: "900",
        content:
          "Creo que le faltaría la playa X para que definitivamente esté completa",
      },
      {
        author: "@@Luis.G",
        votes: "0",
        content:
          "Pocos hablan de esto al respecto pero poder pasear a tu perro en la playa",
      },
    ],
  },
  {
    title: "¡Lugares que debes visitar!",
    author: "@nebur300",
    votes: "6k",
    comment_count: "1k",
    time: "20min",
    type: "text",
    comments: [
      {
        author: "@Alan.Macedo",
        votes: "1k",
        content:
          "Tuve la oportunidad de ir a varios de los sitios que comentabas. Y definitivamente fueron una maravilla.",
      },
      {
        author: "@OsmanVTG",
        votes: "900",
        content:
          "Creo que le faltaría la playa X para que definitivamente esté completa",
      },
      {
        author: "@@Luis.G",
        votes: "0",
        content:
          "Pocos hablan de esto al respecto pero poder pasear a tu perro en la playa",
      },
    ],
  },
];
export default {
  components: { post },
  setup(props) {
    const model = ref(1);

    return {
      model,
      postList,
      refresh: (done) => {
        setTimeout(() => {
          done();
        }, 1000);
      },
    };
  },
};
</script>
