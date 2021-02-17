<template>
  <v-card style="height: 92vh; overflow-y: auto">
    <v-card-title style="font-size: 32px; color: #FF2B2B">Projects</v-card-title>
    <v-card-text>
      <v-col>
        <v-card style="margin-bottom: 4px" outlined v-for="(project,i) in Projects" :key="i">
          <v-card-title>{{project.Name}}</v-card-title>
          <v-card-text>{{project.Description}}</v-card-text>
          <v-card-actions>
            <v-btn dark color="#FF2B2B" :href="project.GitHub">GitHub</v-btn>
            <v-btn v-if="project.LINKS.LINK !==''" dark color="#FF2B2B" :href="project.LINKS.LINK">{{ project.LINKS.Text }}</v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "Projects",
  data(){
    return{
      Projects:[
        {
          'Name':'U Music',
          'Description':'An OpenSource Music Player Build in Flutter. With Over 10,000 Download in Google Play',
          'GitHub':'LINKHERE',
          'LINKS':{
            'LINK':'x',
            'Text':'Google Play'
          }
        },
        {
          'Name':'BloodyFX',
          'Description':'An OpenSource Portfolio Template made using VueJs and Vuetify. This Site is made with it ❤',
          'GitHub':'LINKHERE',
          'LINKS':{
            'LINK':'',
            'Text':''
          }
        },
        {
          'Name':'Payhere Flutter Plugin',
          'Description':'An Community Payhere Plugin for Flutter. Easier Usage + Simple Syntax',
          'GitHub':'LINKHERE',
          'LINKS':{
            'LINK':'XX',
            'Text':'Pub.dev'
          }
        },
        {
          'Name':'QR-Toolkit',
          'Description':'Lightning Fast QR Reader and Creator Made Using Flutter',
          'GitHub':'LINKHERE',
          'LINKS':{
            'LINK':'XX',
            'Text':'Google Play'
          }
        },
        {
          'Name':'Advanced Ad Blocker',
          'Description':'Simplified Host File Based Ad Blocking',
          'GitHub':'LINKHERE',
          'LINKS':{
            'LINK':'',
            'Text':''
          }
        },
        {
          'Name':'Foodie',
          'Description':'A University REST API Project',
          'GitHub':'LINKHERE',
          'LINKS':{
            'LINK':'',
            'Text':''
          }
        }
      ]
    }
  }
}
</script>

<style scoped>

</style>
