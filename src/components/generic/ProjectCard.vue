<template>
  <div class="project-card">
    <img :src="projectResume.imageUrl" class="pointer" @click="$router.push({ name: 'Project', params: { projectId: projectResume.projectId } });"/>
    <div class="text">
      <h3 class="title textPrimaryColor">{{projectResume.name}}</h3>
      <p>
        {{projectResume.description}}
      </p>
    </div>
    <div class="links">
      <a class="link" @click="$router.push({ name: 'Project', params: { projectId: projectResume.projectId } });">Voir plus -></a>
      <div class="links-project">
        <Pin v-if="projectResume.itch!=undefined" 
          class="boxShadowDarkColor backgroundBrightColor pointer" 
          filename='itch-2.png' 
          @click="openNewWindow(projectResume.itch)"
        />
        <Pin v-if="projectResume.github!=undefined" 
          class="boxShadowDarkColor backgroundBrightColor pointer" 
          filename='GitHub.png' 
          @click="openNewWindow(projectResume.github)"
        />
        <Pin v-if="projectResume.otherUrl!=undefined" 
          class="boxShadowDarkColor backgroundBrightColor pointer" 
          filename='link.png' 
          @click="openNewWindow(projectResume.otherUrl)"
        />
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Pin from '@/components/generic/Pin.vue'
import { GenericMethods } from '@/elements/GenericMethods';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',

  components: {
    Pin
  },

  /*
  * projectResume is composed of : 
  * Name
  * idProject
  * Category
  * Description
  * Image
  * Github
  * Itch
  * OtherUrl
  */
  props: ['projectResume'],//ProjectResume

  data(){

  },

  methods: {
    openNewWindow(url: string){
      //Fait appel à une méthode générique
      GenericMethods.openNewWindow(url);
    },
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.project-card{
  min-width: 250px;
  min-height: 500px;
  margin: 20px;
  border: 5px solid variables.$darkColor;

  display: flex;
  flex-direction: column;

  img{
    width: 100%;
    //border-bottom: 5px solid variables.$darkColor;
  }

  .text{
    margin-left: 10%;
    margin-right: 10%;
    flex: 1;

    h3{
      font-family: "Bungee";
    }

    p{
      text-align: justify;
    }
  }

  .links{
    display: flex;
    justify-content: space-between;
    height: 60px;

    a{
      display: flex;
      margin-left: 10px;
      align-items: center;
    }

    .links-project{
      &>*{
        width: 50px;
        height: 50px;
        margin: 5px;
      }
    }
  }
}

.project-card:hover{
  box-shadow: -5px 5px 0px variables.$primary;
}

@media screen and (max-width: variables.$sm) {
  .project-card{
    min-width: 250px;
  }
}

/*
@media screen and (max-width: variables.$xs) {
  .project-card{
    width: 90%;
    margin: 5%;
  }
}
*/

</style>