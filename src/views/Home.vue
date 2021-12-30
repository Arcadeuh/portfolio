<template>
  <div class="home">
    <div class="welcome">
      Bienvenue
    </div>
    <img src="@/assets/pictures/transition_white_red.svg"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src

export default defineComponent({
  name: 'Home',
  components: {
    HelloWorld,
  },
});
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.home{
  text-align: center;

  .welcome{
    font-size: 50px;
    font-family: 'Bungee';
    color: variables.$darkColor;
    text-shadow: -5px 5px 0px variables.$secondary;
  }

  img{
    width: 100%;
  }
}
</style>
