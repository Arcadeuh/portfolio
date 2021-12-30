<template>
  <TopNavbar/>
  <router-view/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TopNavbar from '@/components/TopNavbar.vue'

export default defineComponent({
  components: {
    TopNavbar
  }
})
</script>



<style lang="scss">
@use '@/assets/styles/generic.scss' as generic;
@use '@/assets/styles/variables.scss' as variables;

@font-face {
    font-family: 'ABeeZee';
    src: url(assets/fonts/ABeeZee-Regular.ttf) format('truetype');
}

@font-face {
    font-family: 'Bungee';
    src: url(assets/fonts/Bungee-Regular.ttf) format('truetype');
}

#app {
  font-family: 'ABeeZee';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  //text-align: center;
  //color: #2c3e50;
  background-color: variables.$backgroundColor;
  margin-top: 60px;
}

* {
      margin: 0;
  }
</style>
