<template>
  <v-container>
    <div v-for="(cat,i) in Certificates" :key="i">

      <v-row no-gutters>
        <h3 class="text-h6">{{ cat.title }}</h3>
      </v-row>

      <v-row class="mt-4" justify-sm="start" justify="center" align="center" no-gutters>
        <v-alert outlined class="ma-1 pa-0" v-for="(item,i) in cat.certs" :key="i" color="#ccd6f6" height="125" width="350">
          <div style="height: 64px">
          <v-card-title  style="word-break: initial !important;" class="pa-0 ma-2 mb-0">{{ item.title }}</v-card-title>
          </div>

          <v-card-actions>
            <v-row no-gutters justify="space-between">
              <v-btn width="85" target="_blank" :href="item.view" outlined>
                <v-icon small>mdi-open-in-new</v-icon>View
              </v-btn>
            </v-row>
          </v-card-actions>
        </v-alert>
      </v-row>
    </div>
  </v-container>
</template>

<script>
export default {
  name: "certificates",
  data(){
    return {
      Certificates:{
        Featured: {
          title:'Featured',
          certs:[
            {
              title:'AZ:900 Azure Fundamentals',
              view:'https://www.credly.com/badges/63e7cd16-e3bf-48bf-a4d5-cbf80ccc7899/public_url'
            },
            {
              title:'DP:900 Azure Data Fundamentals',
              view:'https://www.credly.com/badges/6314ae57-9831-48fb-b392-14b813b0377b/public_url'
            },
            {
              title:'Google IT Automation Certificate',
              view:'https://www.credly.com/badges/5a90218f-518c-4be0-9bda-54438309bab8/public_url'
            },

          ],
        },
        FromGoogle:{
          title:'From Google',
          certs:[
            {
              title:'Architecting with Google Compute Engine',
              view:'https://coursera.org/share/fac0aa6f15a3630fe707017767b060ec'
            },
            {
              title:'Elastic Google Cloud Infrastructure: Scaling and Automation',
              view:'https://coursera.org/share/9fd0ec7a63da24558c34573915e58444'
            },
            {
              title:'Google IT Automation with Python',
              view:'https://coursera.org/share/e8dffbd12dfcb738601a827b43e2af1a'
            },
            {
              title:'Google Cloud Big Data and Machine Learning Fundamentals',
              view:'https://coursera.org/share/ed7d1152623549bd3583da56aed1ba12'
            },
            {
              title:'Google Cloud Fundamentals: Core Infrastructure',
              view:'https://coursera.org/share/dcd00bffb118139f8e680e6cfad0830d'
            },
            {
              title:'Essential Google Cloud Infrastructure: Core Services',
              view:'https://coursera.org/share/c1866a4493ff9932613e892e5eb37304'
            },
            {
              title:'Essential Google Cloud Infrastructure: Foundation',
              view:'https://coursera.org/share/a8f9328e81a22af0113b78fd3b3d75db'
            },
            {
              title:'Reliable Google Cloud Infrastructure: Design and Process',
              view:'https://coursera.org/share/955dd780f4a188e6975f2025da2dbf72'
            },
          ]
        },
        FromMicrosoft:{
          title:'From Microsoft',
          certs:[
            {
              title:'AZ:900 Azure Fundamentals',
              view:'https://www.credly.com/badges/63e7cd16-e3bf-48bf-a4d5-cbf80ccc7899/public_url'
            },
            {
              title:'DP:900 Azure Data Fundamentals',
              view:'https://www.credly.com/badges/6314ae57-9831-48fb-b392-14b813b0377b/public_url'
            },
          ]
        },
        FromNvidia:{
          title:'From nVidia',
          certs:[
            {
              title:'GETTING STARTED WITH AI ON JETSON NANO',
              view:'https://courses.nvidia.com/certificates/22e13ad4ea8e4865aebd54831f297d74'
            },
          ]
        },
        FromUOH:{
          title:'From University of Huston',
          certs:[
            {
              title:'A Brief History of Human Spaceflight',
              view:'https://coursera.org/share/b22e12b46cf51adc5be7265898a820f1'
            },
          ]
        },
        FromQuickLabs:{
          title:'From QuickLabs',
          certs:[]
        },
        FromLinkedIn:{
          title:'From LinkedIn',
          certs:[]
        },
      }
    }
  }
}
</script>

<style scoped>

</style>
