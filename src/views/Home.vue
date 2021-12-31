<template>
  <div class="home">
    <div class="welcome">
      Bienvenue
    </div>
    <img src="@/assets/pictures/transition_white_red.svg">
    <div class="text-zone backgroundPrimaryColor textBrightColor">
      Je m'appelle Bastien Fouque, étudiant ingénieur. Après avoir passé 4 ans dans une étude d'ingénieur généraliste, j'ai décidé de faire ma 5ème année au Canada. Mon but ? Faire une maîtrise en informatique, spécialisation jeu vidéo. Ainsi, je peux m'améliorer dans ce que j'aime faire, tout en décrochant un double diplôme.
    </div>
    <img src="@/assets/pictures/transition_red_blue.svg">
    <div class="text-zone backgroundDarkColor textBrightColor">
      Je suis quelqu'un de passionné par le processus créatif, de la phase d'idéalisation à la finalisation. Cela passe par le théâtre, l'écriture, mais aussi par la création de logiciel et, bien sûr, le jeu vidéo. J'ai donc participé à pas mal de gamejam, créé des jeux sur mon temps libre mais aussi à l'école.
    </div>
    <img src="@/assets/pictures/transition_blue_orange.svg">
    <div class="text-zone backgroundSecondaryColor textDarkColor">
      J'aimerais plus tard pouvoir travailler en tant que génie logiciel ou bien développeur, notamment dans le jeu vidéo. Mon rêve serait de pouvoir vivre en tant que game designer, vivre de mes créations. Ce portefolio vous permettera, j'espère, d'avoir un aperçu de mes compétences. Bonne lecture !
    </div>
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
      font-size: 75px;
    font-family: 'Bungee';
    color: variables.$darkColor;
    text-shadow: -5px 5px 0px variables.$secondary;
  }

  img{
    width: 100%;
  }

  & > * {
    display: block;
  }

  .text-zone{
    padding: 50px 300px 50px 300px;
    text-align: justify;
  }
}

@media screen and (max-width: variables.$md) {
  .home{
    .text-zone{
      padding: 50px 150px 50px 150px;
      text-align: justify;
    }
  }
}

@media screen and (max-width: variables.$sm) {
  .home{
    .welcome{
      font-size: 50px;
    }

    .text-zone{
      padding: 20px 50px 20px 50px;
      text-align: justify;
    }
  }
}

@media screen and (max-width: variables.$xs) {
  .home{
    .welcome{
      font-size: 25px;
    }
  }
}
</style>
