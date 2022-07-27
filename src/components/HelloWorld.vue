<script setup>
import { useCounterStore } from '@/stores/counter.js'
const merguez=useCounterStore();

</script>

<template>
<header >
  <div class='row text-center'>
      <h1>
    MERGUEZ MADNESS
  </h1>
  </div>
  <div class='grid grid-cols-3 text-center h-24 pt-5'>
      <div id='infoLeft'>
        <div>
          {{merguez.comboMetter}}
        Score:{{merguez.score.toLocaleString()}}
        {{merguez.add}}
        </div>
        <div>Timer
            <div id="timer" class="firstCase"></div>

    </div>
        </div>
    <div id='center'>

    <h2>
    cliquez sur {{merguez.clickableItem}}
  </h2>
  </div>
    <div id='infoRight'>
      <div>Niveau:{{merguez.level}}</div>

    </div>
    </div>
</header>
</template>
<style>
header{
  background-color:black;
  color:white;
}
div {

  animation: color-change 1s infinite;
  font-family: 'Kanit', sans-serif;
}

@media  (orientation: landscape) { 
@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: red; }
}
.firstCase{
  animation: width-change 2.5s ease-in  reverse both running ;
  min-height:5px;
  background-color:red;
  justify-self:self-end;
  margin:auto

}
@keyframes width-change {
  0% { width: 0px; 
    background-color:red;}
      25% { width: 25px; 
    background-color:red;}
  50% { width: 50px; 
    background-color:orange;}
      75% { width: 75px; 
    background-color:green;}
  100% { width: 100px; 
    background-color:green;}
}

}



@media  (orientation: portrait) { 
header{
  margin-bottom:20%;
}
@keyframes color-change {
  0% { color: red; }
  50% { color: blue; }
  100% { color: red; }
}
.firstCase{
  animation: width-change 2.5s ease-in  reverse both running ;
  min-height:5px;
  background-color:red;
  justify-self:self-end;
  margin:auto

}
@keyframes width-change {
  0% { width: 0px; 
    background-color:red;}
      25% { width: 25px; 
    background-color:red;}
  50% { width: 50px; 
    background-color:orange;}
      75% { width: 75px; 
    background-color:green;}
  100% { width: 100px; 
    background-color:green;}
}}

</style>
