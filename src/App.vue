<template>
  <TopNavbar/>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div>
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
@use '@/assets/styles/colors.scss' as colors;

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
  background-color: colors.$backgroundColor;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}

* {
      margin: 0;
  }
</style>
