<template>
  <v-container style="align-items: start" fill-height fluid>

    <v-col>
      <v-row justify="center">
        <v-avatar color="#FF2B2B"  size="256" style="z-index: 3200; margin-bottom: -16px;">
          <v-avatar size="250">
            <v-img src="assets/Profile.jpeg"></v-img>
          </v-avatar>
        </v-avatar>
      </v-row>
      <v-card>
        <v-col style="color: #FF2B2B;text-align: center;font-family: 'KoHo', sans-serif; ">
          <h1 style="font-size: 72px">Srilal Sachintha</h1>
          <h2>Developer | Open-Source Enthusiast | Thinker</h2>
          <v-row no-gutters justify="center">
            <v-btn
                max-width="128"
                min-width="128"
                style="margin: 2px"
                color="#FF2B2B"
                dark
                large
                to="/resume"
            >
              Resume
            </v-btn>

            <v-btn
                max-width="128"
                min-width="128"
                style="margin: 2px"
                color="#FF2B2B"
                dark
                large
                to="/projects"
            >
              Projects
            </v-btn>

            <v-btn
                max-width="128"
                min-width="128"
                style="margin: 2px"
                color="#FF2B2B"
                dark
                large
                target="_blank"
                href="https://medium.com/@srilalsachintha"
            >
              Articles
            </v-btn>

            <v-btn
                max-width="128"
                min-width="128"
                style="margin: 2px"
                color="#FF2B2B"
                dark
                large
                target="_blank"
                href="https://github.com/SrilalS"
            >
              Github
            </v-btn>
          </v-row>
        </v-col>
      </v-card>


      <v-card style="margin-top: 16px" class="hidden-md-and-down" max-height="247" min-height="248">
        <v-card-title><template><v-icon>mdi-pin</v-icon></template> Pinned Items</v-card-title>

        <v-card-text>
          <v-row no-gutters justify="space-around">
            <v-card min-width="300" color="#FF2B2B" style="margin: 2px">
              <v-card-title>U Music</v-card-title>
              <v-card-text>
                An OpenSource Music Player Build in Flutter.<br>
                With Over 10,000 Download in Google Play
              </v-card-text>
              <v-card-actions>
                <v-btn target="_blank" href="https://play.google.com/store/apps/details?id=com.srilals.umusicv2">Google Play</v-btn>
                <v-btn target="_blank" href="https://github.com/SrilalS/U-Music">GitHub</v-btn>
              </v-card-actions>
            </v-card>
            <v-card min-width="300" color="#FF2B2B" style="margin: 2px">
              <v-card-title>BloodyFX</v-card-title>
              <v-card-text>
                My Own OpenSource Portfolio Template<br>Using VueJs and Vuetify ( This Site! )
              </v-card-text>
              <v-card-actions>
                <v-btn target="_blank" href="https://github.com/SrilalS/SrilalS.github.io">GitHub</v-btn>
              </v-card-actions>
            </v-card>
          </v-row>
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
  name: "MainPage"
}
</script>

<style scoped>

</style>
