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

.v-card__text, .v-card__title, .nameTitle {
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
  background: #919191;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #ffffff;
}

</style>
