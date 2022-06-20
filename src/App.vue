<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
import GuezmerGrid from '@/components/GuezmerGrid.vue'
import PopUp from '@/components/PopUp.vue'
 import { useCounterStore } from '/home/kiou/projects/MerguezClicker/MerguezClicker/src/stores/counter.js'
 const merguez=useCounterStore();
</script>

<template>
<HelloWorld :class="merguez.classMain" />
<GuezmerGrid :class="merguez.classMain"/>
<PopUp :class="merguez.classPopUp "/>



  <RouterView />
</template>

<style>

</style>
