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
    steps: [
      {
        title: "Explora La Habana en Bote",
        distanceOrigin: "A 22.km",
        totalDistance: "200 millas",
        imageLink:
          "https://cdn1.celebritax.com/sites/default/files/styles/watermark_100/public/1619380024-desfile-botes-malecon-habana-caravanas-politicas-cuba-siguen-copiando-estilo-miami.jpg",
        status: "complete",
      },
      {
        title: "Explora La Habana en Auto",
        distanceOrigin: "A 2km",
        totalDistance: "300 millas",
        imageLink:
          "data:image/jpeg;base64,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",
        status: "complete",
      },
      {
        title: "Juega Dominó Cubano",
        distanceOrigin: "A 5km",
        totalDistance: "500 millas",
        imageLink:
          "https://assets.simpleviewinc.com/simpleview/image/upload/c_fit,w_1440,h_900/crm/miamifl/Domino-park-entrance-1440x9000-73ee04805056a36_73ee059b-5056-a36a-0b18a11e055053df.jpg",
        status: "complete",
      },
    ],
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
