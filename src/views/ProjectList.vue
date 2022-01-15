<template>
  <div class="list">
      <ProjectCard v-for="project in projectList" :key="project" class="project-card" :projectResume="project"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from '@/components/generic/ProjectCard.vue';
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';

export default defineComponent({
  name: 'ProjectList',

  components: {
    ProjectCard
  },

  props: ['projectData'],

  data(){
    return {
      projectList: [],
    }
  },

  methods: {
    updateProjectList(){
      this.projectList = [];
      DatabaseInterface.getProjectsResume(this.projectList, this.$route.params.category);
    }
  },

  mounted(){
    //console.log(this.$route.params.category);
    this.updateProjectList();
  },

  watch:{
    $route(to, from) {
      this.updateProjectList();
    }
  }

});

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.list{
  display: grid;
  //grid-gap: 10px;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);

  .project-card{
    flex: 1;
  }
}

@media screen and (max-width: variables.$md){
  .list{
    grid-template-columns: repeat(2, 1fr);
  }
}

@media screen and (max-width: variables.$sm){
  .list{
    grid-template-columns: repeat(1, 1fr);
  }
}
/*
@media screen and (max-width: variables.$xs){
  .list{
    grid-template-columns: repeat(1, 1fr);
  }
}
*/

</style>