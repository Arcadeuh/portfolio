<template>
  <div class="top-navbar">
    <div id="my-name">
      <div class="Pin">
        <Pin filename="pp.png"/>
      </div>
      <h1>Arcadeuh</h1>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Pin from '@/components/generic/Pin.vue';

export default defineComponent({
  name: 'TopNavbar',
  components: {
    Pin
  }
});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '@/assets/styles/colors.scss' as colors;

.top-navbar{
  background-color: colors.$primary;
  height: 75px;
  width: 100%;
  display: flex;
}
#my-name{
  font-family: "Bungee";
  display: flex;
  align-items: center;
  margin-left: 5px;
  & > * {
    margin: 5px;
  }
}
h1{
  height: 100%;
  color: colors.$brightColor;
}
.Pin{
  width: 50px;
  height: 50px;
}
</style>
