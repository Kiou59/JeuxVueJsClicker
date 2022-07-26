<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import GuezmerGrid from '@/components/GuezmerGrid.vue'
import PopUp from '@/components/PopUp.vue'
import Footer from '@/components/Footer.vue'
import { useCounterStore } from '@/stores/counter.js'
const merguez=useCounterStore();
</script>

<template>
<HelloWorld :class="merguez.classMain" />
<GuezmerGrid :class="merguez.classMain"/>
<Footer :class = 'merguez.classFooter'/>
<PopUp :class="merguez.classPopUp "/>



  <RouterView />
</template>

<style>
body{
background-color:black;

}
</style>
