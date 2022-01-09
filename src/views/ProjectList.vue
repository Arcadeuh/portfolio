<template>
  <div v-for="project in projectList" :key="project">
    <ProjectCard class="project-card"/>
  </div>
  <div>{{$route.params.category}}</div>
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
      projectList: []
    }
  },

  methods: {
    async updateProjectList(){
      this.projectList = [];
      await DatabaseInterface.GetProjectResume(this.projectList, this.$route.params.category);
    }
  },

  mounted(){
    console.log(this.$route.params.category);
    this.updateProjectList();
  },

  watch:{
    $route(to, from) {
      this.updateProjectList();
      console.log("THERE");
    }
  }

});

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.project-card{
}

</style>