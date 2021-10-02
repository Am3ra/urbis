<template>
  <q-header class="text-black" elevated>
    <q-toolbar>
      <div class="column q-mb-md q-mt-xl">
        <p>Cerca de ti.</p>
        <div class="row text-body1">
          <q-icon color="blue" size="20px" name="o_location_on" />
          <p>La Habana, Cuba</p>
          <q-icon color="blue" size="20px" name="o_near_me" />
        </div>
        <q-input
          rounded
          outlined
          v-model="text"
          type="text"
          bg-color="white"
          label="¿A dónde iremos hoy?"
        >
          <template v-slot:append>
            <q-icon name="o_search" @click="text = ''" class="cursor-pointer" />
          </template>
        </q-input>
      </div>
      <q-space />
      <q-icon color="blue" size="50px" name="o_notifications" />
    </q-toolbar>
  </q-header>
  <q-page>
    <p class="q-pl-md text-h4 q-mb-lg q-mt-lg">Sitios Sugeridos</p>
    <q-scroll-area class="" style="width: 100%; height: 300px">
      <div class="row q-px-md q-gutter-lg no-wrap">
        <sitio v-for="(sitio, idx) in sitiosList" :key="idx" v-bind="sitio" />
      </div>
    </q-scroll-area>
    <p class="q-pl-md text-h4 q-my-lg">Tours</p>
    <q-scroll-area class="" style="width: 90vw; height: 200px">
      <div class="q-px-md row q-gutter-lg no-wrap">
        <tour v-for="(tour, idx) in tourList" :key="idx" v-bind="tour" />
      </div>
    </q-scroll-area>
    <p class="q-pl-md text-h4 q-my-lg">Quest</p>
    <q-scroll-area class="q-mb-lg" style="width: 100%; height: 200px">
      <div class="q-px-md row q-gutter-xl no-wrap">
        <quest v-for="(quest, idx) in questList" :key="idx" v-bind="quest" />
      </div>
    </q-scroll-area>
  </q-page>
</template>

<script>
import { ref } from "vue";
import Sitio from "../components/sitio.vue";
import Tour from "../components/tour.vue";
import Quest from "../components/quest.vue";

const sitiosList = [
  {
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5dMW9vfrByc9nYKu7fxRCwHaFj%26pid%3DApi&f=1",
    title: "Museo de la Revolución",
    content:
      "Antiguo Palacio Presidencial, fue construido entre 1909 y 1920 para ser la sede del gobierno provincial de La Habana, pero el presidente Mario García Menocal lo escogió para ser la sede del Ejecutivo. En 1974 se convirtió en el Museo de la Revolución y en 2010 fue declarado Monumento Nacional.",
  },
  {
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5dMW9vfrByc9nYKu7fxRCwHaFj%26pid%3DApi&f=1",
    title: "Museo de la Revolución",
    content:
      "Antiguo Palacio Presidencial, fue construido entre 1909 y 1920 para ser la sede del gobierno provincial de La Habana, pero el presidente Mario García Menocal lo escogió para ser la sede del Ejecutivo. En 1974 se convirtió en el Museo de la Revolución y en 2010 fue declarado Monumento Nacional.",
  },
  {
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5dMW9vfrByc9nYKu7fxRCwHaFj%26pid%3DApi&f=1",
    title: "Museo de la Revolución",
    content:
      "Antiguo Palacio Presidencial, fue construido entre 1909 y 1920 para ser la sede del gobierno provincial de La Habana, pero el presidente Mario García Menocal lo escogió para ser la sede del Ejecutivo. En 1974 se convirtió en el Museo de la Revolución y en 2010 fue declarado Monumento Nacional.",
  },
  {
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5dMW9vfrByc9nYKu7fxRCwHaFj%26pid%3DApi&f=1",
    title: "Museo de la Revolución",
    content:
      "Antiguo Palacio Presidencial, fue construido entre 1909 y 1920 para ser la sede del gobierno provincial de La Habana, pero el presidente Mario García Menocal lo escogió para ser la sede del Ejecutivo. En 1974 se convirtió en el Museo de la Revolución y en 2010 fue declarado Monumento Nacional.",
  },
];

const tourList = [
  {
    title: "Autos Clásicos en La Habana",
    author: "Autos Clásicos en La Habana",
    avatarLink: "https://i.imgur.com/OW6zzOk.png",
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.G60M2H9xAij84Efc-Mte-QHaFI%26pid%3DApi&f=1",
    content:
      "La Habana en un auto clásico. Recomiendo que lleves agua y algún tentempié para que disfrutes de esta experiencia a todo gas.",
    price: 80,
  },
];

const questList = [
  {
    title: "Explora la parte tradicional de La Habana",
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5R3uyetDo-bLNVwhdjb4pQHaE8%26pid%3DApi&f=1",
  },
  {
    title: "Explora la parte tradicional de La Habana",
    imageLink:
      "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5R3uyetDo-bLNVwhdjb4pQHaE8%26pid%3DApi&f=1",
  },
];

export default {
  // name: 'PageName',
  components: {
    Sitio,
    Tour,
    Quest,
  },

  setup(props) {
    const text = ref();
    return {
      sitiosList,
      text,
      tourList,
      questList,
    };
  },
};
</script>
