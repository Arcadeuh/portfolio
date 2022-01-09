<template>
  <ProjectCard class="project-card"></ProjectCard>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ProjectCard from '@/components/generic/ProjectCard.vue'

export default defineComponent({
  name: 'GameDesign',

  components: {
    ProjectCard
  },

  props: ['projectData'],

  data(){

  },

  methods: {
      
  }

});

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.project-card{
}

</style>