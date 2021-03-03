<template>
  <v-card style="height: 92vh; overflow-y: auto">
    <v-card-title style="font-size: 32px;">Resume</v-card-title>

    <v-card-text>
      <v-card flat>
        <v-card-title>Education</v-card-title>
        <v-card-text>
          <ul>
          <li>BSc(Hons) Computer Science (3rd Year) - NSBM Green University</li>
            <li>Advanced Level - Mathematics Stream</li>
          </ul>
        </v-card-text>
      </v-card>

      <v-row justify="space-between">
        <v-col>
          <v-card flat>
            <v-card-title>Familiar Frameworks</v-card-title>
            <v-card-text>
              <ul>
                <li>Flutter</li>
                <li>Laravel</li>
                <li>VueJs</li>
                <li>ExpressJs</li>
              </ul>
            </v-card-text>
          </v-card>
        </v-col>

        <v-col>
        <v-card flat>
          <v-card-title>Programming Languages</v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <ul>
                <li>Dart</li>
                <li>JavaScript</li>
                <li>Java</li>
                <li>PHP</li>
              </ul>
              <ul>
                <li>C</li>
                <li>C++</li>
                <li>Python</li>
                <li>C#</li>
              </ul>
            </v-row>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>
      <v-row justify="space-between">
        <v-col>
        <v-card flat>
          <v-card-title>Familiar Technologies</v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <ul>
                <li>Linux Server</li>
                <li>Windows Server</li>
                <li>Git/Github</li>
                <li>DevOps Concepts</li>
              </ul>
              <ul>
                <li>Google Cloud</li>
                <li>Microsoft Azure</li>
                <li>Firebase</li>
              </ul>
            </v-row>
          </v-card-text>
        </v-card>
        </v-col>

        <v-col>
        <v-card flat>
          <v-card-title>Other Technologies and Tools</v-card-title>
          <v-card-text>
            <v-row no-gutters>
              <ul>
                <li>Computer Graphics</li>
                <li>3D Rendering</li>
                <li>HTML</li>
                <li>CSS</li>
              </ul>
              <ul>
                <li>MongoDB</li>
                <li>mySQL</li>
                <li>SQL Server</li>
                <li>FireStore</li>
              </ul>
            </v-row>
          </v-card-text>
        </v-card>
        </v-col>
      </v-row>

      <v-card flat>
        <v-card-title>Societies and Other</v-card-title>
        <v-card-text>
          <ul>
            <li>Microsoft Learn Beta Student Ambassador</li>
            <li>Web Master at IEEE NSBM Student Branch</li>
            <li>IEEE Sri Lanka Section</li>
            <li>FOSS Community NSBM</li>
          </ul>

        </v-card-text>
      </v-card>

      <v-card flat>
        <v-card-title>Achievements</v-card-title>
        <v-card-text>
          <ul>
            <li>LetMeHack 2.0 (Rank Top 5)</li>
            <li>IEEE Xtream 13/14 Participant</li>
            <li>ACES Coders v8.0 Participant</li>
            <li>Google Hashcode/CodeJam/KickStart Participant</li>
          </ul>
        </v-card-text>
      </v-card>
    </v-card-text>






  </v-card>
</template>

<script>

export default {
  name: "Resume",
  components: {}
}
</script>

<style scoped>

</style>
