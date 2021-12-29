<template>
  <div class="top-navbar">
    <div id="my-name">
      <div class="Pin">
        <Pin class="boxShadowDarkColor pointer" filename="pp.png" @click="goTo('/')"/>
      </div>
      <div class="textShadowDarkColor name">Arcadeuh</div>
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
  //height: 75px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  //text-align: center;
}

#my-name{
  font-family: "Bungee";
  margin-left: 5px;
  user-select:none;
  /*
  display: flex;
  align-items: center;
  */

  & > * {
    margin: 5px;
    float: left;
    display: block;
  }

  .name{
    color: colors.$brightColor;
    font-size: 20px;
  }
}
#contacts{
  margin-left: 5px;
  user-select:none;

  & > * {
    margin: 5px;
    float: right;
    display: block;
  }
}
.Pin{
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
}


@media screen and (max-width: 710px) {
  .top-navbar {
    flex-direction: column;
  }

  #contacts{
    display: flex;
    justify-content: space-around;
    flex-wrap: nowrap;
    & > * {
      float: none;
      display: inherit;
    }
  }

  #my-name{
    display: flex;
    flex-wrap: nowrap;
    & > * {
      float: none;
      display: inherit;
    }
  }

}
</style>
