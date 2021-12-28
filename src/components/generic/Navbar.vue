<template>
    <div class="list">
        <!--div id="first-element">&#160;</div-->
        <div style="width: 100%; height: 100%; display: flex; align-items: center;" v-for="(navItem, index) in navItems" :key="navItem">
            <div v-if="index == 0" class="separator">&#160;</div>
            <div class="list-item"  
                v-on:click="navItem.callback" 
                @mouseenter="setMouseOver(navItem, true)" 
                @mouseleave="setMouseOver(navItem, false)"
                :class="{ 'selected': navItem.mouseOver }"
            >
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

    methods: {
        setMouseOver(navItem: NavItem, value: boolean){
            navItem.mouseOver = value;
        },
    }

})
</script>



<style scoped lang="scss">
@use '@/assets/styles/colors.scss' as colors;

.list{
    font-family: "Bungee";
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    color: colors.$brightColor;
    flex-wrap: nowrap;
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
        padding: 0px 5px 0px 5px;
        height: 100%;
    }

    .separator{
        background-color: colors.$brightColor;
        width: 5px;
        height: 50%;
    }

    .selected{
        background-color: colors.$secondary;
    }
}
</style>