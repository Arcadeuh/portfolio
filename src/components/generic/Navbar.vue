<template>
    <div class="list">
        <!--div id="first-element">&#160;</div-->
        <div style="width: 100%; height: 100%; display: flex; align-items: center;" v-for="(navItem, index) in navItems" :key="navItem">
            <!-- Ceci permet de mettre un separator au début de la navbar -->
            <div v-if="index==0" class="separator">&#160;</div>
            <!-- Créé un separator quand l'écran est petit, et que la navbar est en colonne (via showOnShrink) -->
            <div v-else class="separator showOnShrink">&#160;</div>
            <div class="list-item"  
                v-on:click="navItem.callback();setSelected(navItems, navItem);" 
                @mouseenter="setMouseOver(navItem, true)" 
                @mouseleave="setMouseOver(navItem, false)"
                :class="{ 'textShadowBrightColor': (navItem.selected && !mouseOverIt) || navItem.mouseOver, 'backgroundSecondaryColor': navItem.selected }"
            ><!-- item de navigation  -->
                {{navItem.name}}
            </div>
            <div class="separator">&#160;</div>
        </div>
        
    </div>
</template>



<script lang="ts">
import { defineComponent } from 'vue'
import { NavItem } from '@/elements/objects/NavItem'

export default defineComponent({
    name: 'Navbar',
    props: ['navItems'],

    data(){
        return {
            mouseOverIt: false,//savoir si la souris est sur la barre de navigation
        }
    },

    methods: {
        //Permet de mettre navItem.mouseOver à la valeur souhaitée, appelé quand la souris passe sur un item
        setMouseOver(navItem: NavItem, value: boolean){
            navItem.mouseOver = value;
            this.mouseOverIt = value; //savoir si la souris est sur la barre de navigation
        },
        //Permet de mettre navItem.selected à la valeur souhaitée, appelé quand on clique sur un item
        setSelected(navItems: NavItem[], navItem: NavItem){
            navItems.forEach(element => {
                element.selected = false; //Set à false tout les éléments, car on change d'item sélectionné
            });
            navItem.selected = true;
        }
    }

})
</script>



<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.list{
    //Prend 100% de l'espace dans la div où la navbar est. 
    //Fait 
    font-family: "Bungee";
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: variables.$brightColor;
    //flex-wrap: wrap;
    user-select:none;

    .list-item{
        cursor: pointer;

        flex: 1;
        //white-space:nowrap;
        text-align: center;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 90%;
        padding: 0px 10px 0px 10px;
        height: 100%;
    }

    .separator{
        background-color: variables.$brightColor;
        width: 5px;
        height: 50%;
    }

    .showOnShrink{
        display: none;
    }
}

@media screen and (max-width: variables.$xs) {
    //S'organise en colonne lorsque l'écran est très petit
    .list{
        flex-direction: column;
        justify-content: flex-start;

        .showOnShrink{
            //Affiche de nouvelles choses quand l'écran est petit 
            display: inherit;
        }
    }
}
</style>