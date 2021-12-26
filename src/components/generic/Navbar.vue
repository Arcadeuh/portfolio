<template>
    <div class="list">
        <div class="list-item" v-for="navItem in navItems" :key="navItem" v-on:click="navItem.callback">
            {{navItem.name}}
        </div>
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
.list{
    font-family: "Bungee";
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    .list-item{
        cursor: pointer;
    }
}
</style>