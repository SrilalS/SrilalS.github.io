<template>
  <v-container>
    <v-row no-gutters justify="center">
      <v-card hover ripple :href="item.link" target="_blank" width="256" class="ma-4" v-for="(item,i) in Articles" :key="i">
        <v-img contain :src="item.img"></v-img>
        <v-card-subtitle class="pb-0 pt-2">{{item.date}}</v-card-subtitle>
        <v-card-title class="pt-0" style="word-break: break-word">{{ item.title }}</v-card-title>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "articles",
  data() {
    return {
      Articles: [{
        "title": "How to Optimize VueJs + Vuetify SPA Builds with Laravel MIX",
        "link": "https://medium.com/@srilalsachintha/how-to-optimize-vuejs-vuetify-spa-builds-with-laravel-mix-e5a031a63909",
        "img": "https://cdn-images-1.medium.com/max/1024/1*BwH51H8wyWDVFTC3Wyaz6Q.png",
        "date": "2021-10-26 07:28:50"
      }, {
        "title": "Firebase CRUD Operations With Flutter Part 3 (Building Queries)",
        "link": "https://medium.com/@srilalsachintha/firebase-crud-operations-with-flutter-part-3-building-queries-f5c6f57bcf42",
        "img": "https://cdn-images-1.medium.com/max/875/0*IFSOYyczt8iNWx9e.png",
        "date": "2020-05-28 12:58:41"
      }, {
        "title": "Firebase CRUD Operations With Flutter Part 2 (Collection Reference)",
        "link": "https://medium.com/@srilalsachintha/firebase-crud-operations-with-flutter-part-2-collection-reference-de374fe39bf0",
        "img": "https://cdn-images-1.medium.com/max/875/1*J60jFW4AkpiOcEfzr_MMGg.png",
        "date": "2020-04-29 09:51:01"
      }, {
        "title": "Firebase CRUD Operations With Flutter Part 1 (Document Reference)",
        "link": "https://medium.com/@srilalsachintha/firebase-crud-operations-with-flutter-part-1-document-reference-7ba44856da4c",
        "img": "https://cdn-images-1.medium.com/max/1024/1*4zFWh-plgr8UyM_9L4KuNg.png",
        "date": "2020-04-04 10:04:18"
      }, {
        "title": "Using Flutter Streams with Firestore Database",
        "link": "https://medium.com/@srilalsachintha/using-flutter-streams-with-firestore-database-15f3b1322090",
        "img": "https://cdn-images-1.medium.com/max/1024/1*gmnNgm7MfZW8Fe6j5YWspA.jpeg",
        "date": "2020-03-30 16:07:15"
      }, {
        "title": "Getting Started with Firestore + Flutter (Android)",
        "link": "https://medium.com/@srilalsachintha/getting-started-with-firestore-flutter-android-31bee8c1412c",
        "img": "https://miro.medium.com/max/875/1*pDjpgfR8ZIvbEa-n6v2PDQ.jpeg",
        "date": "2020-03-30 14:52:57"
      }]
    }
  },
  mounted() {
    /*this.$axios.get('https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@srilalsachintha')
      .then(value => {
        console.log(value.data);
        value.data.items.forEach(item => {
          console.log(item);
          this.Articles.push({
            title: item.title,
            link: item.link,
            img: item.thumbnail,
            description: item.description,
            date: item.pubDate
          });
        });
      });*/
  }
}
</script>

<style scoped>

</style>
