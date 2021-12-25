<template>
  <div class="top-navbar">
    <div id="my-name">
      <h1 class="debug-blackbox">Arcadeuh</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopNavbar',
  props: {
    msg: String,
  },
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '@/assets/colors.scss' as colors;

.top-navbar{
  background-color: colors.$primary;
  height: 75px;
  width: 100%;
  display: flex;
}
#my-name{
  font-family: "Bungee";
}
h1{
  margin: 0px;
  height: 100%;
}
</style>
