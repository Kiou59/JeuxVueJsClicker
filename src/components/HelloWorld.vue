<script setup>
 import { useCounterStore } from '/home/kiou/projects/MerguezTest/MerguezTest/src/stores/counter.js'
 const merguez=useCounterStore();

</script>

<template>
<header class='grid grid-cols-3 text-center h-24 pt-5'>
      <div id='infoLeft'>
        <div>
          {{merguez.comboMetter}}
        Score:{{merguez.score}}
        {{merguez.add}}
        </div>
        <div>Timer
            <meter min='0' low='1' high='2' max="3 " :value="merguez.timeLeft " ></meter>
    </div>
        </div>
    <div id='center'>
  <h1 >
    MERGUEZ CLICKER
  </h1>
    <h2>
    cliquez sur la merguez
  </h2>
  </div>
    <div id='infoRight'>
      <div>Niveau:{{merguez.level}}</div>
            <meter min='0' low='33' high='66' max="100 " :value="merguez.guezProgress " ></meter>
    </div>
</header>
</template>
<style>
header{
  background-color:black;
  color:white;
}
</style>
