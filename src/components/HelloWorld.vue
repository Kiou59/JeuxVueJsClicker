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
            <progress  max="3 " :value="merguez.timeLeft " ></progress>
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
            <progress  max="100 " :value="merguez.guezProgress " ></progress>
    </div>
</header>
</template>
<style>
header{
  background-color:black;
  color:white;
}
h1,h2,div {
  animation: color-change 1s infinite;
}

@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: red; }
}
progress {}
	/* ici les styles généraux */

progress::-webkit-progress-bar { 
	/* ici les styles généraux pour Webkit */
}
progress::-webkit-progress-value {  
	/* styles de barre d'avancement pour Webkit */
}  
progress::-moz-progress-bar { 
	/* styles de barre d'avancement pour Firefox */
    animation: color-change 1s infinite;
}


</style>
