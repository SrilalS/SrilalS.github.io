<template>
  <v-container>
    <v-row class="mt-8" justify="space-between" no-gutters align="center">

      <v-col order-sm="1" order="2" cols="auto">
        <h1 class="text-h4 CoolGrey">Hi, I'm</h1>
        <h1 class="text-h2 font-weight-bold">
          <div class="TextGlitch" data-text="Srilal Sachintha">Srilal Sachintha</div>
        </h1>
        <h1 class="text-h4 CoolGrey">A Developer</h1>
        <p class="CoolGrey ">I’m a software engineer specializing in building exceptional <br> digital experiences. Currently, I’m focused on building <br>accessible, human-centered products (..for now)</p>
        <v-btn x-large color="white" light outlined>
          Checkout My Work!
        </v-btn>
      </v-col>

      <v-col order-sm="2" order="1" cols="auto">
        <v-row justify="center">
          <v-card elevation="8" class="pa-2 ma-2 rounded-circle CoolGreyBack" color="#ccd6f6">
            <v-avatar size="256">
              <div class="CyberContainer">
                <v-img class="mt-1" src="/profile.jpeg" alt="CyberpunkProfile"></v-img>
                <span class="overlay"></span>
              </div>
            </v-avatar>
          </v-card>
        </v-row>
      </v-col>
    </v-row>
    <v-row no-gutters class="mt-8">
      <v-icon>mdi-pin</v-icon><h3 class="text-h6">Featured</h3>
    </v-row>

    <div>
      <v-row class="mt-4" justify-sm="start" justify="center" align="center" no-gutters>
        <v-alert outlined class="ma-1 pa-0" v-for="(item,i) in Featured" :key="i" color="#ccd6f6" height="180" width="190">
          <v-card-title class="pa-0 ma-2 mb-0">{{ item.title }}</v-card-title>
          <v-card-text style="height: 88px" class="pa-2">{{ item.desc }}</v-card-text>
          <v-card-actions>
            <v-row no-gutters justify="space-between">
              <v-btn width="85" target="_blank" :href="item.view" outlined>
                <v-icon small>mdi-open-in-new</v-icon>View
              </v-btn>
              <v-btn width="85" target="_blank" :href="item.code" v-if="item.code !== ''" outlined>
                <v-icon small>mdi-code-braces</v-icon>Code
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
  name: 'index',
  data(){
    return {
      Featured:[
        {title:'U Music', desc:'An Experimental Music Player Build using Flutter. (+50K Downloads)', code:'https://github.com/SrilalS/U-Music', view:'https://play.google.com/store/apps/details?id=com.srilals.umusicv2'},
        {title:'EventIgniter', desc:'The One-Stop Solution for Event Management', code:'', view:'https://eventigniter.co'},
        {title:'PayHere Flutter', desc:'Flutter Payhere Plugin. Payhere SDK for Flutter.', code:'https://github.com/SrilalS/Payhere-Flutter-Plugin', view:'https://pub.dev/packages/payhere'},
        {title:'QR Toolkit', desc:'QR Reader and Creator Made Using Flutter', code:'https://github.com/SrilalS/QR-Toolkit', view:'https://play.google.com/store/apps/details?id=com.srilal.qrtoolkit'},
      ]
    }
  }
}
</script>

<style scoped lang="scss">
//Text
.TextGlitch{
  color:white;
  position:relative;
}
@keyframes noise-anim{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
/*.TextGlitch:after{
  content:attr(data-text);
  position:absolute;
  left:2px;
  text-shadow:-1px 0 red;
  top:0;
  color:white;
  background:#0a192f;
  overflow:hidden;
  clip:rect(0,900px,0,0);
  animation:noise-anim 2s infinite linear alternate-reverse;
}*/
@keyframes noise-anim-2{
  $steps:20;
  @for $i from 0 through $steps{
    #{percentage($i*(1/$steps))}{
      clip:rect(random(100)+px,9999px,random(100)+px,0);
    }
  }
}
.TextGlitch:before{
  content:attr(data-text);
  position:absolute;
  left:-2px;
  text-shadow:1px 0 blue;
  top:0;
  color:white;
  background:#0a192f;
  overflow:hidden;
  clip:rect(0,900px,0,0);
  animation:noise-anim-2 3s infinite linear alternate-reverse;
}

//Image
.CyberContainer{
  max-width: 100%;
  position: relative;
  overflow: hidden;
}
.overlay{
  display: block;
  animation-duration: 2.5s;
  animation-timing-function: linear;
  animation-iteration-count: infinite;
  animation-name: glitch;
  animation-direction: alternate;
  background-image: url('/profile.jpeg');
  transform: rotate(-2deg);
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: 100%;
  background-position: top;
  background-repeat: no-repeat;
}
.cut {
  clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
}
.moved-rotated {
  transform: translate(5px) rotate(-2deg)
}
@keyframes glitch {
  0% {
    opacity: 1;
    transform: translateZ(0) rotate(-2deg);
    clip-path: polygon(0 2%, 100% 2%, 100% 5%, 0 5%)
  }
  2% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px) rotate(-2deg)
  }
  6% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(5px) rotate(-2deg)
  }
  8% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(-5px) rotate(-2deg)
  }
  9% {
    clip-path: polygon(0 78%, 100% 78%, 100% 100%, 0 100%);
    transform: translate(0) rotate(-2deg)
  }
  10% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translate3d(5px, 0, 0) rotate(-2deg)
  }
  13% {
    clip-path: polygon(0 54%, 100% 54%, 100% 44%, 0 44%);
    transform: translateZ(0) rotate(-2deg)
  }
  13.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0) rotate(-2deg)
  }
  15% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0) rotate(-2deg)
  }
  20% {
    clip-path: polygon(0 60%, 100% 60%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0) rotate(-2deg)
  }
  20.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    transform: translate3d(5px, 0, 0) rotate(-2deg)
  }
  25% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(5px, 0, 0) rotate(-2deg)
  }
  30% {
    clip-path: polygon(0 85%, 100% 85%, 100% 40%, 0 40%);
    transform: translate3d(-5px, 0, 0) rotate(-2deg)
  }
  30.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0) rotate(-2deg)
  }
  35% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px) rotate(-2deg)
  }
  40% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(5px) rotate(-2deg)
  }
  45% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(-5px) rotate(-2deg)
  }
  50% {
    clip-path: polygon(0 63%, 100% 63%, 100% 80%, 0 80%);
    transform: translate(0) rotate(-2deg)
  }
  55% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translate3d(5px, 0, 0) rotate(-2deg)
  }
  60% {
    clip-path: polygon(0 10%, 100% 10%, 100% 0, 0 0);
    transform: translateZ(0) rotate(-2deg);
    opacity: 1
  }
  60.1% {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1
  }
  to {
    clip-path: polygon(0 0, 0 0, 0 0, 0 0);
    opacity: 1
  }
}
</style>
