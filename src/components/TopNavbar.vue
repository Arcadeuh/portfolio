<template>
  <div class="top-navbar">

    <div class="first"><!--Premier élément de la top navbar-->

      <div class="content"><!--Contenu principal-->
        <div class="Pin">
          <Pin class="boxShadowDarkColor pointer" filename="pp.png" @click="goTo('/')"/>
        </div>
        <div class="textShadowDarkColor name">Arcadeuh</div>
      </div>

      <div class="Pin expand"><!--Bouton permettant de déplier la top navbar quand sur petit écran-->
        <Pin v-if="!showElements" class="pointer" filename="three_bar.png" @click="toggleShowElements()"/>
        <Pin v-else class="pointer" filename="cross.png" @click="toggleShowElements()"/>
      </div>
      
    </div>

    <!--Navigation principale, cachée quand sur petit écran-->
    <div :class="{'hiddenOnShrink': !showElements, 'Navbar': true}">
      <Navbar :navItems="navItems" :color="0" :shadowColor="1"/>
    </div>

    <!--Contact, cachés quand sur petit écran-->
    <div :class="{'hiddenOnShrink': !showElements, 'last': true}">
      <div class="Pin">
        <Pin class="backgroundBrightColor pointer" filename="itch-2.png" @click="openNewWindow('https://arcadeuh.itch.io/')"/>
      </div>
      <div class="Pin">
        <Pin class="backgroundBrightColor pointer" filename="GitHub.png" @click="openNewWindow('https://github.com/Arcadeuh')"/>
      </div>
      <div class="Pin">
        <Pin class="backgroundSecondaryColor textDarkColor pointer" altText="CV" @click="download('/CV_-_Fouque_Bastien.pdf', 'CV_-_Fouque_Bastien.pdf')"/>
      </div>
      <div class="Pin">
        <Pin class="backgroundBrightColor pointer" filename="linkedin.png" @click="openNewWindow('https://www.linkedin.com/in/bastien-fouque-a38502197/')"/>
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
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';
import { ProjectResume } from '@/elements/interface/ProjectResume';

export default defineComponent({
  name: 'TopNavbar',

  components: {
    Pin,
    Navbar,
  },

  data(){
    return {
      //Liste des navigations possibles dans la Top navbar
      navItems: [] as NavItem[],

      projectsResume: [] as ProjectResume[],

      //Boolean qui permet de savoir si la top navbar est ouverte ou pas
      showElements: false
    }
  },

  mounted(){
    DatabaseInterface.getAllProjectsResume(this.projectsResume).then(()=>{
      //Creates every navigation un function of categories (projectResume.category)
      this.projectsResume.forEach((element: ProjectResume) => {
        let exists = false;

          this.navItems.forEach(item => {
            if(element.category == item.name){
              exists = true;
            }
          });

          if(!exists){
            let navItem = new NavItem(element.category);
            navItem.callback = ()=>{
              this.$router.push({ name: 'ProjectList', params: { category: navItem.name } });
              this.setShowElements(false);
            };
            this.navItems.push(
              navItem
            );
          }
      });
    });
  },

  methods: {

    //NAVIGATION
    openNewWindow(url: string){
      //Fait appel à une méthode générique
      GenericMethods.openNewWindow(url);
    },
    goTo(path: string){
      //Permet de naviguer, tout en remettant à 0 les éléments de la navbar
      this.navItems.forEach(element => {
        element.selected = false;
      });
      this.$router.push(path);
    },
    download(fileUrl: string, fileName: string) {
      //Fait appel à une méthode générique
      GenericMethods.download(fileUrl, fileName);
    },
    toggleShowElements(){
      this.showElements = !this.showElements;
    },
    setShowElements(value: boolean){
      this.showElements = value;
    }
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.top-navbar{
  background-color: variables.$primary;
  position: fixed; /* Set the navbar to fixed position */
  top: 0; /* Position the navbar at the top of the page */
  width: 100%;
  display: flex;
  justify-content: space-between;
  box-shadow: 0px 5px 15px variables.$darkColor;
  z-index: 100;
  //text-align: center;

  .first{
    font-family: "Bungee";
    margin-left: 5px;
    user-select:none;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .content{
      display: flex;
      align-items: center;
      & > * {
        margin: 5px;
        /*
        float: left;
        display: block;
        */
      }
    }

    .name{
      color: variables.$brightColor;
      font-size: 20px;
    }

    .expand{
      display: none;
    }
  }

  .last{
    margin-left: 5px;
    user-select:none;
    display: flex;
    justify-content: space-between;

    & > * {
      margin: 5px;
      /*
      float: right;
      display: block;
      */
    }
  }

}

.Pin{
  width: 50px;
  min-width: 50px;
  height: 50px;
  min-height: 50px;
}


@media screen and (max-width: variables.$sm) {
  .top-navbar {
    flex-direction: column;

    .last{
      display: flex;
      flex-wrap: nowrap;
      justify-content: space-around;
    }

    .hiddenOnShrink {
      display: none;
    }

    .first{
      .expand{
        display: inherit;
      }
    }
  }

}
</style>
