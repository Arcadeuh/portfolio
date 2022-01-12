<template>
  <div class="project">
    <img v-if="projectResume" class="main-image" :src="projectResume.imageUrl"/>
    <div v-for="projectDetail in projectDetails" :key="projectDetail">{{projectDetail.content}}</div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';

export default defineComponent({
  name: 'Project',

  components: {
      
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
  margin-left: 20%;
  margin-right: 20%;

  .main-image{
    filter: blur(4px);
    width: 100%;
  }

}

</style>