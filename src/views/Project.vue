<template>
    <div v-for="projectDetail in projectDetails" :key="projectDetail">{{projectDetail.content}}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';

export default defineComponent({
  name: 'Project',

  components: {
      
  },

  props: ['projectResume'],

  data(){
    return {
      projectDetails: []
    }
  },

  methods: {
    async updateProjectDetails(){
      this.projectDetails = [];
      await DatabaseInterface.getProjectDetails(this.projectDetails, this.$route.params.projectId);
    }
  },

  mounted(){
    console.log(this.$route.params.projectId);
    this.updateProjectDetails();
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

.list{
  display: flex;
  flex-wrap: wrap;

  .project-card{
    flex: 1;
  }
}

</style>