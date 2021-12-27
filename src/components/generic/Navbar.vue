<template>
    <div class="list">
        <div id="first-element">&#160;</div>
        <div class="list-item" v-for="navItem in navItems" :key="navItem" v-on:click="navItem.callback">
            {{navItem.name}}
        </div>
        <div id="last-element">&#160;</div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { NavItem } from '@/elements/objects/NavItem'

export default defineComponent({
    name: 'Navbar',
    props: ['navItems']
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

    #first-element{
        border-color: colors.$brightColor;
        border-width: 0px 2.5px 0px 0px; 
        border-style: solid;
        font-size: 90%;
    }

    .list-item{
        cursor: pointer;
        flex: 1;
        border-color: colors.$brightColor;
        border-width: 0px 2.5px 0px 2.5px; 
        border-style: solid;
        white-space:nowrap;
        text-align: center;
        font-size: 90%;
        padding: 0px 5px 0px 5px;
    }

    #last-element{
        border-color: colors.$brightColor;
        border-width: 0px 0px 0px 2.5px; 
        border-style: solid;
        font-size: 90%;
    }
}
</style>