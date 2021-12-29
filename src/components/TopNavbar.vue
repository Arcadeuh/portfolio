<template>
  <div class="top-navbar">
    <div id="my-name">
      <div class="Pin">
        <Pin class="boxShadowDarkColor pointer" filename="pp.png" @click="goTo('/')"/>
      </div>
      <h1 class="textShadowDarkColor">Arcadeuh</h1>
    </div>

    <div class="Navbar">
      <Navbar :navItems="navItems"/>
    </div>

    <div id="contacts">
      <div class="Pin">
        <Pin class="boxShadowDarkColor backgroundBrightColor pointer" filename="itch-2.png" @click="openNewWindow('https://arcadeuh.itch.io/')"/>
      </div>
      <div class="Pin">
        <Pin class="boxShadowDarkColor backgroundBrightColor pointer" filename="GitHub.png" @click="openNewWindow('https://github.com/Arcadeuh')"/>
      </div>
      <div class="Pin">
        <Pin class="boxShadowDarkColor backgroundSecondaryColor textDarkColor pointer" altText="CV" @click="download('/CV_-_Fouque_Bastien.pdf', 'CV_-_Fouque_Bastien.pdf')"/>
      </div>
      <div class="Pin">
        <Pin class="boxShadowDarkColor backgroundBrightColor pointer" filename="linkedin.png" @click="openNewWindow('https://www.linkedin.com/in/bastien-fouque-a38502197/')"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Pin from '@/components/generic/Pin.vue';
import Navbar from '@/components/generic/Navbar.vue';
import { defineComponent } from 'vue';
import { NavItem } from '@/elements/objects/NavItem';
import {GenericMethods} from '@/elements/GenericMethods';

export default defineComponent({
  name: 'TopNavbar',

  components: {
    Pin,
    Navbar,
  },

  data(){
    return {
      navItems: [
        new NavItem("GameDesign", () => {
          this.$router.push("gamedesign");
        }),
        new NavItem("Programmation", () => {
          this.$router.push("programmation");
        }),
      ],
    }
  },

  methods: {
    //DEBUG
    print(){
      console.log("THERE");
    },
    printTwo(){
      console.log("2");
    },

    //NAVIGATION
    openNewWindow(url: string){
      GenericMethods.openNewWindow(url);
    },
    goTo(path: string){
      this.navItems.forEach(element => {
        element.selected = false;
      });
      this.$router.push(path);
    },
    download(fileUrl: string, fileName: string) {
      GenericMethods.download(fileUrl, fileName);
    }
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '@/assets/styles/colors.scss' as colors;

.top-navbar{
  background-color: colors.$primary;
  height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
#my-name{
  font-family: "Bungee";
  display: flex;
  align-items: center;
  margin-left: 5px;
  user-select:none;
  & > * {
    margin: 5px;
  }

  h1{
    height: 100%;
    color: colors.$brightColor;
  }
}
#contacts{
  display: flex;
  align-items: center;
  margin-left: 5px;
  user-select:none;

  & > * {
    margin: 5px;
  }
}
.Pin{
  width: 50px;
  height: 50px;
}
.Navbar{
  width: 20%;
}
</style>
