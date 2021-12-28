<template>
  <div class="top-navbar">
    <div id="my-name">
      <div class="Pin">
        <Pin class="boxShadowDarkColor" filename="pp.png" :callback="print"/>
      </div>
      <h1 class="textShadowDarkColor">Arcadeuh</h1>
    </div>

    <div class="Navbar">
      <Navbar :navItems="navItems"/>
    </div>

    <div id="contacts">
      <div class="Pin">
        <Pin class="boxShadowDarkColor" filename="itch-2.png" :callback="print"/>
      </div>
      <div class="Pin">
        <Pin class="boxShadowDarkColor" filename="GitHub.png" :callback="print"/>
      </div>
      <div class="Pin">
        <Pin class="boxShadowDarkColor" filename="pp.png" :callback="print"/>
      </div>
      <div class="Pin">
        <Pin class="boxShadowDarkColor" filename="linkedin.png" :callback="print"/>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Pin from '@/components/generic/Pin.vue';
import Navbar from '@/components/generic/Navbar.vue';
import { defineComponent } from 'vue';
import { NavItem } from '@/elements/objects/NavItem';

export default defineComponent({
  name: 'TopNavbar',

  components: {
    Pin,
    Navbar,
  },

  data(){
    return {
      navItems: [
        new NavItem("GameDesign", this.print),
        new NavItem("Programmation", this.printTwo)
      ],
    }
  },

  methods: {
    print(){
      console.log("THERE");
    },
    printTwo(){
      console.log("2");
    }
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
  justify-content: space-between;
}
#my-name{
  font-family: "Bungee";
  display: flex;
  align-items: center;
  margin-left: 5px;
  user-select:none;
  & > * {
    margin: 5px;
  }

  h1{
    height: 100%;
    color: colors.$brightColor;
  }
}
#contacts{
  display: flex;
  align-items: center;
  margin-left: 5px;
  user-select:none;

  & > * {
    margin: 5px;
  }
}
.Pin{
  width: 50px;
  height: 50px;
}
.Navbar{
  width: 20%;
}
</style>
