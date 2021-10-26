<template>
  <v-container>
    <v-row justify="center" no-gutters>
      <h3 class="text-h6">Technologies I Work with</h3>
    </v-row>

    <v-row class="mt-4" no-gutters justify="center">
      <v-alert v-for="(tech,i) in Technologies" :key="i" outlined height="180" width="180" class="pa-4 ma-2">
        <v-row justify="center" no-gutters>
          <v-img height="128" contain width="128" :src="tech.icon"></v-img>
        </v-row>
        <v-card-title class="pa-0 ma-0">
          <v-row justify="center" no-gutters>
            {{ tech.name }}
          </v-row>
        </v-card-title>
      </v-alert>
    </v-row>

    <v-row justify="center" no-gutters>
      <h3 class="text-h6 mt-8">OSes I Use</h3>
    </v-row>

    <v-row class="mt-4" no-gutters justify="center">
      <v-alert v-for="(os,i) in OS" :key="i" outlined height="180" width="180" class="pa-4 ma-2">
        <v-row justify="center" no-gutters>
          <v-img height="128" contain width="128" :src="os.icon"></v-img>
        </v-row>
        <v-card-title class="pa-0 ma-0">
          <v-row justify="center" no-gutters>
            {{ os.name }}
          </v-row>
        </v-card-title>
      </v-alert>
    </v-row>

    <v-row justify="center" no-gutters>
      <h3 class="text-h6 mt-8">Programming Languages I Use</h3>
    </v-row>

    <v-row class="mt-4" no-gutters justify="center">
      <v-alert v-for="(lng,i) in Lang" :key="i" outlined height="180" width="180" class="pa-4 ma-2">
        <v-row justify="center" no-gutters>
          <v-img height="128" contain width="128" :src="lng.icon"></v-img>
        </v-row>
        <v-card-title class="pa-0 ma-0">
          <v-row justify="center" no-gutters>
            {{ lng.name }}
          </v-row>
        </v-card-title>
      </v-alert>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "technologies",
  data(){
    return {
      Technologies:[
        { name:'Laravel', icon:'https://cdn.svgporn.com/logos/laravel.svg'},
        { name:'Flutter', icon:'https://cdn.svgporn.com/logos/flutter.svg'},
        { name:'Lumen', icon:'https://cdn.svgporn.com/logos/lumen.svg'},
        { name:'VueJs', icon:'https://cdn.svgporn.com/logos/vue.svg'},
        { name:'NuxtJs', icon:'https://cdn.svgporn.com/logos/nuxt-icon.svg'},
        { name:'ReactJs', icon:'https://cdn.svgporn.com/logos/react.svg'},
        { name:'Google Cloud', icon:'https://cdn.svgporn.com/logos/google-cloud.svg'},
        { name:'Azure', icon:'https://cdn.svgporn.com/logos/azure-icon.svg'},
        { name:'AWS', icon:'https://cdn.svgporn.com/logos/aws.svg'},
        { name:'Firebase', icon:'https://cdn.svgporn.com/logos/firebase.svg'},

        { name:'Ansible', icon:'https://cdn.svgporn.com/logos/ansible.svg'},
        { name:'Docker', icon:'https://cdn.svgporn.com/logos/docker.svg'},

        { name:'Kotlin', icon:'https://cdn.svgporn.com/logos/kotlin.svg'},
        { name:'PostGreSQL', icon:'https://cdn.svgporn.com/logos/postgresql.svg'},

        { name:'ElasticSearch', icon:'https://cdn.svgporn.com/logos/elasticsearch.svg'},
        { name:'NodeJs', icon:'https://cdn.svgporn.com/logos/nodejs-icon.svg'},
        { name:'.Net', icon:'https://cdn.svgporn.com/logos/dotnet.svg'},
        { name:'PostMan', icon:'https://cdn.svgporn.com/logos/postman-icon.svg'},
        { name:'Firebase', icon:'https://cdn.svgporn.com/logos/firebase.svg'},
        { name:'Firebase', icon:'https://cdn.svgporn.com/logos/firebase.svg'},
      ],
      OS:[
        { name:'Linux', icon:'https://cdn.svgporn.com/logos/linux-tux.svg'},
        { name:'Windows', icon:'https://cdn.svgporn.com/logos/microsoft-windows.svg'},
      ],
      Lang:[
        { name:'PHP', icon:'https://cdn.svgporn.com/logos/php.svg'},
        { name:'JavaScript', icon:'https://cdn.svgporn.com/logos/javascript.svg'},
        { name:'Dart', icon:'https://cdn.svgporn.com/logos/dart.svg'},
        { name:'Python', icon:'https://cdn.svgporn.com/logos/python.svg'},
        { name:'C#', icon:'https://cdn.svgporn.com/logos/c-sharp.svg'},
        { name:'C/C++', icon:'https://cdn.svgporn.com/logos/c-plusplus.svg'},
        { name:'Java', icon:'https://cdn.svgporn.com/logos/java.svg'},
      ],
    }
  }
}
</script>

<style scoped>

</style>
