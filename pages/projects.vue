<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <v-card class="ma-4" hover style="cursor: default;" width="256" :key="i" v-for="(project,i) in Projects">
        <v-img height="128"  :src="project.Image"></v-img>
        <v-card-title class="pt-2 pb-2" style="height:80px;word-break: break-word">{{ project.Name }}</v-card-title>
        <v-card-text style="height: 96px" class="text-justify">
          {{ project.Desc }}
        </v-card-text>
        <v-card-actions>
          <v-row no-gutters justify="space-between">
            <v-btn width="85" target="_blank" :href="project.View" outlined>
              <v-icon small>mdi-open-in-new</v-icon>View
            </v-btn>
            <v-btn width="85" target="_blank" :href="project.Code" v-if="project.Code !== ''" outlined>
              <v-icon small>mdi-code-braces</v-icon>Code
            </v-btn>
          </v-row>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "projects",
  data(){
    return{
      Projects:[
        {
          Name:'DeepDive Portfolio Website Template',
          Image:'/projects/deepdive.jpg',
          Code:'https://github.com/SrilalS/SrilalS.github.io',
          View:'https://srilalsachintha.me',
          Desc:'(This very site!) A Clean and Highly Optimized portfolio template which is Free and OpenSource. Built using NuxtJs and Vuetify',
        },
        {
          Name:'U Music',
          Image:'/projects/umusic.jpg',
          Code:'https://github.com/SrilalS/SrilalS.github.io',
          View:'https://play.google.com/store/apps/details?id=com.srilals.umusicv2',
          Desc:'A Fully Featured Music Player Build using Flutter. Currently with over 50K Downloads!',
        },
        {
          Name:'EventIgniter',
          Image:'/projects/eventigniter.png',
          Code:'',
          View:'https://eventigniter.co',
          Desc:'PaaS Platform, A One-Stop Solution for Event Management',
        },
        {
          Name:'PayHere Flutter',
          Image:'/projects/payhere.png',
          Code:'https://github.com/SrilalS/Payhere-Flutter-Plugin',
          View:'https://pub.dev/packages/payhere',
          Desc:'A Community Flutter PayHere Plugin with Payhere SDK for Flutter-Android',
        }
      ],
    }
  }
}
</script>

<style scoped>

</style>
