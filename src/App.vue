<template>
  <v-app>
    <MainPage/>
  </v-app>
</template>

<script>

import MainPage from "@/components/MainPage";

export default {
  name: 'App',

  components: {
    MainPage,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
html {
  overflow-y: auto;
}

.v-card__text, .v-card__title {
  word-break: normal; /* maybe !important  */
}

/* width */
::-webkit-scrollbar {
  width: 6px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #191919;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #FF2B2B;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}

</style>
