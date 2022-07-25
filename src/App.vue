<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import GuezmerGrid from '@/components/GuezmerGrid.vue'
import PopUp from '@/components/PopUp.vue'
import { useCounterStore } from '@/stores/counter.js'
const merguez=useCounterStore();
</script>

<template>
<HelloWorld :class="merguez.classMain" />
<GuezmerGrid :class="merguez.classMain"/>
<PopUp :class="merguez.classPopUp "/>



  <RouterView />
</template>

<style>
body{
background-color:black;

}
</style>
