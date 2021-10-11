<template>
  <v-container :class="!$vuetify.theme.isDark ? 'ThemeBackColorLight':''" style="align-items: start;" fill-height fluid>
    <v-col>
      <v-row justify="center">
        <v-avatar color="primary"  size="256" style="z-index: 3200; margin-bottom: -16px;">
          <v-avatar size="250">
            <v-img src="assets/Profile.webp"></v-img>
          </v-avatar>
        </v-avatar>
      </v-row>
      <v-card>
        <v-col style="text-align: center;">
          <h1 class="mt-4 font-weight-bold">Srilal Sachintha</h1>
          <h3>Developer | Learner</h3>
          <v-row no-gutters justify="center">
            <v-btn
                :max-width="btnWidth"
                :min-width="btnWidth"
                class="ma-1"
                color="primary"
                dark
                large
                to="/"
            >
              Projects
            </v-btn>

            <v-btn
                :max-width="btnWidth"
                :min-width="btnWidth"
                class="ma-1"
                color="primary"
                dark
                large
                to="/resume"
            >
              Resume
            </v-btn>

            <v-btn
                :max-width="btnWidth"
                :min-width="btnWidth"
                class="ma-1"
                color="primary"
                dark
                large
                target="_blank"
                rel="noreferrer noopener"
                href="https://medium.com/@srilalsachintha"
            >
              Articles
            </v-btn>

            <v-btn
                :max-width="btnWidth"
                :min-width="btnWidth"
                class="ma-1"
                color="primary"
                dark
                large
                target="_blank"
                rel="noreferrer noopener"
                href="https://github.com/SrilalS"
            >
              Github
            </v-btn>
            <v-btn
                :max-width="btnWidth"
                :min-width="btnWidth"
                class="ma-1"
                color="primary"
                dark
                large
                target="_blank"
                rel="noreferrer noopener"
                href="https://www.linkedin.com/in/srilalsachintha/"
            >
              LinkedIn
            </v-btn>
          </v-row>
        </v-col>
      </v-card>


      <v-card style="margin-top: 16px" class="hidden-md-and-down" max-height="256" min-height="248">
        <v-row justify="space-around">
          <v-card-title>Pinned</v-card-title>
          <v-switch
              v-model="$vuetify.theme.dark"
              inset
              label="Dark Theme"
          ></v-switch>
        </v-row>


        <v-card-text>
          <v-col>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>U Music</v-list-item-title>
                <v-list-item-subtitle>An OpenSource Music Player Build in Flutter.<br>
                  With Over 10,000 Download in Google Play</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn outlined color="primary" rel="noreferrer noopener" target="_blank" href="https://play.google.com/store/apps/details?id=com.srilals.umusicv2">Google Play</v-btn>
                </v-list-item-action>
              <v-list-item-action>
                <v-btn outlined color="primary" rel="noreferrer noopener" target="_blank" href="https://github.com/SrilalS/U-Music">GitHub</v-btn>
              </v-list-item-action>
            </v-list-item>
            <v-list-item>
              <v-list-item-content>
                <v-list-item-title>BloodyFX</v-list-item-title>
                <v-list-item-subtitle>My Own OpenSource Portfolio Template<br>Using VueJs and Vuetify ( This Site! )</v-list-item-subtitle>
              </v-list-item-content>
              <v-list-item-action>
                <v-btn outlined color="primary" rel="noreferrer noopener" target="_blank" href="https://github.com/SrilalS/SrilalS.github.io">GitHub</v-btn>
              </v-list-item-action>
            </v-list-item>

          </v-col>
        </v-card-text>
      </v-card>
    </v-col>


    <v-col>
        <router-view></router-view>
    </v-col>
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
  data(){
    return{
      btnWidth: 100,
      NavButtons:[
        {title:'Projects', to:'/'}
      ]
    }
  }
}
</script>

<style scoped>

.ThemeBackColorLight{
  background-color: lightgray !important;
}

</style>
