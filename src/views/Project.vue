<template>
  <div class="project">
    <div class="header">
      <div class="image">
        <img v-if="projectResume" class="main-image" :src="projectResume.imageUrl"/>
        <div v-if="projectResume" class="center-vertically title textShadowPrimaryColor">{{projectResume.name}}</div>
        <div v-if="projectResume" class="bottom right links">
          <Pin v-if="projectResume.itch!=undefined" 
            class="boxShadowDarkColor backgroundBrightColor pointer" 
            filename='itch-2.png' 
            @click="openNewWindow(projectResume.itch)"
          />
          <Pin v-if="projectResume.github!=undefined" 
            class="boxShadowDarkColor backgroundBrightColor pointer" 
            filename='GitHub.png' 
            @click="openNewWindow(projectResume.github)"
          />
          <Pin v-if="projectResume.otherUrl!=undefined" 
            class="boxShadowDarkColor backgroundBrightColor pointer" 
            filename='link.png' 
            @click="openNewWindow(projectResume.otherUrl)"
          />
        </div>
      </div>
      <div class="navbar">
        <Navbar :navItems="navItems" :color="1" :shadowColor="1"/>
      </div>
    </div>
    <div class="content">
      <div v-for="postDetail in postDetails" :key="postDetail">
        <div v-if="postDetail.part == partToDisplay" class="post-detail">
            <p>{{postDetail.content}}</p><br v-if="postDetail.imageUrl"/>
            <img class="boxShadowPrimaryColor-lg" v-if="postDetail.imageUrl" :src="postDetail.imageUrl"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Pin from '@/components/generic/Pin.vue'
import Navbar from '@/components/generic/Navbar.vue';
import { defineComponent } from "vue";
import { DatabaseInterface } from '@/elements/interface/DatabaseInterface';
import { GenericMethods } from "@/elements/GenericMethods";
import { NavItem } from "@/elements/objects/NavItem";
import { PostDetail } from "@/elements/interface/PostDetail";

export default defineComponent({
  name: 'Project',

  components: {
      Pin,
      Navbar
  },

  data(){
    return {
      projectResume: null, //From database : contains verything in resumed about the project
      postDetails: [] as PostDetail[], //From database : containes every bit of details about the project (an item is a texte and a potential image)
      navItems: [] as NavItem[], //Element of navigation inside the navbar. Permits to show one particular part of the project
      partToDisplay: null //Correspond to a postDetails.part wanted to show
    }
  },

  methods: {
    updatePostDetails(){
      this.postDetails = [];
      DatabaseInterface.getPostDetails(this.postDetails, this.$route.params.projectId).then(()=>{
        //Adding navigation items for each part of the project
        this.postDetails.forEach(detail => {
          let exists = false;

          this.navItems.forEach(item => {
            if(detail.part == item.name){
              exists = true;
            }
          });

          if(!exists){
            let navItem = new NavItem(detail.part);
            navItem.callback = ()=>{
              this.partToDisplay = navItem.name;
              console.log(this.partToDisplay);
            };
            this.navItems.push(
              navItem
            );
          }

          if(!this.partToDisplay){
            this.partToDisplay = this.navItems[this.navItems.length-1].name;
            this.navItems[this.navItems.length-1].selected = true;
          }

        });
      });
      
    },

    updateProjectResume(){
      this.projectResume = null;
      let self = this;
      DatabaseInterface.getProjectResume(self, this.$route.params.projectId);
    },
    
    openNewWindow(url: string){
      //Fait appel à une méthode générique
      GenericMethods.openNewWindow(url);
    },
  },

  mounted(){
    this.updatePostDetails();
    this.updateProjectResume();
  },

  /*
  watch:{
    $route(to, from) {
      this.updateProjectList();
    }
  }
  */

});

</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.project{

  .header{
    width: 70%;
    margin: auto;

    .navbar{
      margin: auto;
      height: 50px;
      border-bottom: 5px solid variables.$darkColor;
    }

    .image{
      position: relative;
      border: 5px solid variables.$darkColor;

      .links{
        &>*{
          width: 50px;
          height: 50px;
          margin: 5px;
        }
      }

      .title{
        font-family: 'Bungee';
        font-size: 40px;
        width: 100%;
      }

      .main-image{
        width: 100%;
        filter: blur(5px);
        display: flex;
        justify-content: center;
      }
    }
  }

  .content{
    margin-left: 30%;
    margin-right: 30%;

    .post-detail{
      margin-top: 20px;
      margin-bottom: 20px;
      text-align: justify;

      img{
        width: 100%;
        border: 5px solid variables.$darkColor;
      }
    }
  }

}

@media screen and (max-width: variables.$md) {
  .project{

    .content{
      margin-left: 25%;
      margin-right: 25%;
    }
    .header{
      .image{
        .title{
          font-size: 35px;
        }
      }
    }
  }
}

@media screen and (max-width: variables.$sm) {
  .project{
    .header{
      .navbar{
        height: unset;

      }
      .image{
        .title{
          font-size: 25px;
        }
      }
    }

    .content{
      margin-left: 15%;
      margin-right: 15%;
    }
  }
}
@media screen and (max-width: variables.$xs) {
  .project{
    .header{
      .image{
        .title{
          font-size: 15px;
        }
      }
    }
  }
}

</style>