<template>
  <div class="project-card">
    <img src="@/assets/pictures/lcdd.png" class="pointer"/>
    <div class="text">
      <h3 class="title textPrimaryColor">La cour des dieux</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit fuga aliquid, tempora iusto commodi illum quam minus doloremque, tempore officia nobis dolorem obcaecati harum officiis non veritatis, sunt incidunt molestiae.
      </p>
    </div>
    <div class="links">
      <Pin class="boxShadowDarkColor backgroundBrightColor pointer" filename='itch-2.png' @click='openNewWindow("https://youtube.com")'></Pin>
      <Pin class="boxShadowDarkColor backgroundBrightColor pointer" filename='GitHub.png'></Pin>
    </div>
  </div>

</template>

<script lang="ts">
import Pin from '@/components/generic/Pin.vue'
import { GenericMethods } from '@/elements/GenericMethods';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProjectCard',

  components: {
    Pin
  },

  props: ['projectData'],

  data(){

  },

  methods: {
    openNewWindow(url: string){
      //Fait appel à une méthode générique
      GenericMethods.openNewWindow(url);
    },
  }

});
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.project-card{
  width: 400px;
  margin: 20px;
  border: 5px solid variables.$darkColor;

  img{
    width: 100%;
    //border-bottom: 5px solid variables.$darkColor;
  }

  .text{
    margin-left: 10%;
    margin-right: 10%;

    h3{
      font-family: "Bungee";
    }

    p{
      text-align: justify;
    }
  }

  .links{
    display: flex;
    justify-content: flex-end;

    &>*{
      width: 50px;
      height: 50px;
      margin: 5px;
    }
  }
}

.project-card:hover{
  box-shadow: -5px 5px 0px variables.$primary;
}

@media screen and (max-width: variables.$sm) {
  .project-card{
    width: 300px;
  }
}

@media screen and (max-width: variables.$xs) {
  .project-card{
    width: 90%;
    margin: 5%;
  }
}

</style>