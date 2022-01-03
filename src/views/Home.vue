<template>
  <div class="home">
    <div class="welcome">
      Bienvenue
    </div>
    <img src="@/assets/pictures/transition_white_red.svg">
    <div class="text-zone backgroundPrimaryColor textBrightColor">
      <div class="left-element boxShadowDarkColor">
        {{introductionArray[0]['Text']}}
      </div>
      <img class="boxShadowDarkColor" src="@/assets/pictures/canada.jpg">
    </div>
    <img src="@/assets/pictures/transition_red_blue.svg">
    <div class="text-zone backgroundDarkColor textBrightColor">
      <img class="left-element boxShadowSecondaryColor" src="@/assets/pictures/creation.jpg">
      <div class="boxShadowSecondaryColor">
        {{introductionArray[1]['Text']}}
      </div>
    </div>
    <img src="@/assets/pictures/transition_blue_orange.svg">
    <div class="text-zone backgroundSecondaryColor textDarkColor">
      <div class="left-element boxShadowPrimaryColor">
        {{introductionArray[2]['Text']}}
      </div>
      <img class="boxShadowPrimaryColor" src="@/assets/pictures/jv.png">
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
  data(){
    return {
      introductionArray: []
    }
  },
  created(){
    this.getIntroductionData();
  },
  methods: {
    async getIntroductionData(){
      await DatabaseInterface.GetIntroductions(this.introductionArray);
    }
  },
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.home{
  text-align: center;

  .welcome{
    font-size: 75px;
    font-family: 'Bungee';
    color: variables.$darkColor;
    text-shadow: -5px 5px 0px variables.$secondary;
  }

  img{
    width: 100%;
  }

  & > * {
    display: block;
  }

  .text-zone{
    padding: 50px 200px 50px 200px;
    text-align: justify;
    display: flex;
    align-items:center;
    justify-content:center;

    img{
      flex: 0.75;
    }

    div{
      flex: 1.25;
      padding: 5px;
    }

    .left-element{
      margin-right: 100px;
    }
  }
}

@media screen and (max-width: variables.$md) {
  .home{
    .text-zone{
      padding: 30px 75px 30px 75px;
      text-align: justify;
    }
  }
}

@media screen and (max-width: variables.$sm) {
  .home{
    .welcome{
      font-size: 50px;
    }

    .text-zone{
      padding: 15px 25px 15px 25px;
      text-align: justify;
      flex-direction: column;

      img{
        width: 75%;
        height: 75%;
      }

      .left-element{
        margin-right: 0px;
        margin-bottom: 15px;
      }
    }
  }
}

@media screen and (max-width: variables.$xs) {
  .home{
    .welcome{
      font-size: 25px;
    }
  }
}
</style>
