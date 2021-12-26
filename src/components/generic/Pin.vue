<template>
    <img v-on:click="callback" class="circle" id="profile-picture" :src="require(`@/assets/pictures/${filename}`)">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Pin',
    props: {
        filename: String,
        callback: Function
    },
})
</script>

<style scoped lang="scss">

img{
    background-color: white;
    cursor: pointer;
}

</style>