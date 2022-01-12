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
    async updateProjectList(){
      this.projectList = [];
      await DatabaseInterface.getProjectsResume(this.projectList, this.$route.params.category);
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
  display: flex;
  flex-wrap: wrap;

  .project-card{
    flex: 1;
  }
}

</style>