<template>
  <div class="project">
    <div class="header">
      <img v-if="projectResume" class="main-image" :src="projectResume.imageUrl"/>
      <div v-if="projectResume" class="center-vertically title textShadowPrimaryColor">{{projectResume.name}}</div>
      <div v-if="projectResume" class="bottom right links">
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
    <div class="content">
      <div v-for="projectDetail in projectDetails" :key="projectDetail">{{projectDetail.content}}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';
import Pin from '@/components/generic/Pin.vue'
import { GenericMethods } from "@/elements/GenericMethods";

export default defineComponent({
  name: 'Project',

  components: {
      Pin
  },

  data(){
    return {
      projectResume: null,
      projectDetails: []
    }
  },

  methods: {
    async updateProjectDetails(){
      this.projectDetails = [];
      await DatabaseInterface.getProjectDetails(this.projectDetails, this.$route.params.projectId);
    },

    async updateProjectResume(){
      this.projectResume = null;
      let self = this;
      await DatabaseInterface.testGetProjectResume(self, this.$route.params.projectId);
    },
    
    openNewWindow(url: string){
      //Fait appel à une méthode générique
      GenericMethods.openNewWindow(url);
    },
  },

  mounted(){
    this.updateProjectDetails();
    this.updateProjectResume();
  },

  /*
  watch:{
    $route(to, from) {
      this.updateProjectList();
    }
  }
  */

});

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.project{

  .header{
    position: relative;
    width: 80%;
    margin: auto;
    border: 5px solid variables.$darkColor;

    .links{
      &>*{
        width: 50px;
        height: 50px;
        margin: 5px;
      }
    }

    .title{
      font-family: 'Bungee';
      font-size: 50px;
      width: 100%;
    }

    .main-image{
      width: 100%;
      filter: blur(5px);
      display: flex;
      justify-content: center;
    }
    &>*{
      //position: absolute;
    }
  }

  .content{
    margin-left: 30%;
    margin-right: 30%;
  }

}

@media screen and (max-width: variables.$sm) {
  .project{
    .header{
      .title{
        font-size: 30px;
      }
    }
  }
}

</style>