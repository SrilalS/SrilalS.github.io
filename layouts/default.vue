<template>
  <v-app class="DarkBackground" dark>
    <v-app-bar fixed app class="Acrylic" flat>
      <v-spacer></v-spacer>

      <v-btn active-class="ActiveNavButton" text to="/" class="NavButton">About</v-btn>
      <v-btn active-class="ActiveNavButton" text to="technologies" class="NavButton">Technologies</v-btn>
      <!--v-btn active-class="ActiveNavButton" text to="experience" class="NavButton">Experience</v-btn-->
      <v-btn active-class="ActiveNavButton" text to="projects" class="NavButton">Projects</v-btn>
      <v-btn active-class="ActiveNavButton" text to="certificates" class="NavButton">Certificates</v-btn>
      <v-btn active-class="ActiveNavButton" text to="articles" class="NavButton">Articles</v-btn>
      <v-btn href="https://github.com/SrilalS" target="_blank" class="mr-1 ml-1 HoverButton" outlined><v-icon class="mr-1">mdi-github</v-icon>GitHub</v-btn>
      <v-btn class="mr-1 ml-1 HoverButton" outlined><v-icon class="mr-1">mdi-file-document</v-icon>CV</v-btn>
    </v-app-bar>
    <v-main class="DarkBackground">
        <Nuxt/>
    </v-main>

    <v-navigation-drawer
      v-model="SideBar"
      app
      class="Acrylic elevation-0"
      permanent
      mini-variant
      floating
      style="border: none"
    >
      <v-btn class="mt-1" x-large icon>
        <v-icon class="HoverButton">mdi-alpha-s-circle</v-icon>
      </v-btn>

      <template v-slot:append>





        <v-row v-for="(social,i) in SocialLinks" :key="i" justify="center" no-gutters>
          <v-btn target="_blank" :href="social.link" large icon>
            <v-icon class="HoverButton">mdi-{{ social.icon }}</v-icon>
          </v-btn>
        </v-row>

        <v-row justify="center" no-gutters>
          <v-card width="1" height="64" color="#ccd6f6"></v-card>
        </v-row>
      </template>

    </v-navigation-drawer>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      SideBar:true,
      SocialLinks:[
        { icon: 'github', link:'https://github.com/SrilalS'},
        { icon: 'linkedin', link:'https://www.linkedin.com/in/srilalsachintha/'},
        { icon: 'email', link:'mailto:srilalsachintha@gmail.com'},
        { icon: 'stack-overflow', link:'https://stackoverflow.com/users/6143971/srilal-sachintha'},
        { icon: 'twitter', link:'https://twitter.com/SrilalSS'},
        { icon: 'facebook', link:'https://www.facebook.com/Srilal.Sachintha/'},
      ]
    }
  }
}
</script>
<style>
html{
  overflow: auto !important;
}
body{
  overflow: auto !important;
  background-color: #0a192f !important;
}
.DarkBackground{
  background-color: #0a192f;
}
.Acrylic{
  background-color: rgba(10, 25, 47,0.75) !important;
  backdrop-filter: blur(16px);
}
.HotRed{
  color: #FF003F;
}
.CoolGrey{
  color: #ccd6f6;
}
.HoverButton{}
.HoverButton:hover{
  color: #FF003F !important;
  transition: 0.5s;
}

.ActiveNavButton{
  color: #FF003F !important;
  background-color: rgba(255, 255, 255, 0.05) !important;
}

.NavButton{
  transition: 0.5s;
}

.NavButton::before {
  color: #FF003F;
}

.NavButton:hover {
  color: #FF003F;
  background-color: rgba(255, 255, 255, 0.05) !important;
}
</style>
