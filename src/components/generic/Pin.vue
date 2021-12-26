<template>
    <img class="generic circle" id="profile-picture" :src="require(`@/assets/pictures/${filename}`)">
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Pin',
    props: ['filename'],
})
</script>

<style scoped lang="scss">

img{
    background-color: white;
}

</style>