<template>
    <img v-if="filename!=null" class="circle" :src="require(`@/assets/pictures/${filename}`)">
    <div v-else-if="filename==null && altText!=null" class="circle">
        {{altText}}
    </div>
    <div v-else class="circle">&#160;</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Pin',
    props: {
        filename: {
            type: String,
            required: false,
        },
        altText: {
            type: String,
            required: false
        },
    },
})
</script>

<style scoped lang="scss">
@use '@/assets/styles/variables.scss' as variables;

.circle{
    box-shadow: -2.5px 2.5px 0px variables.$darkColor;  
}
.circle:hover{
    box-shadow: -4px 4px 0px variables.$darkColor;  
}
img{
    width: 100%;
    height: 100%;
}
div{
    display: flex;
    align-items: center;
    justify-content: center;

    width: 100%;
    height: 100%;

    font-family: "Bungee";
    font-size: 120%;
}
</style>