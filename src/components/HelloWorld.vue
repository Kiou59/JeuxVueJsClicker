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
<div class="row">
    <h2 >
    cliquez sur <div class='hithere'>{{merguez.clickableItem.toUpperCase()}}</div>
  </h2>
  </div>
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

  animation: color-change 3s infinite; 

  font-family: 'Kanit', sans-serif;
}
.hithere {
  animation: hithere 1s ease infinite;
}
@keyframes hithere {
  30% { transform: scale(1.2); }
  40%, 60% { transform: rotate(-20deg) scale(1.2); }
  50% { transform: rotate(20deg) scale(1.2); }
  70% { transform: rotate(0deg) scale(1.2); }
  100% { transform: scale(1); }
}

@media  (orientation: landscape) { 
@keyframes color-change {
  from {
    color: #FF0000;
  }
  10% {
    color: #00FF00;
  }
  50% {
    color: #0000FF;
  }
  75% {
    color: #FF00FF;
  }
  100% {
    color: #FFFF00;
  }
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
header h1{
  font-size:2rem;

}
header div{
  font-size:1.5rem;

}

}



@media  (orientation: portrait) { 
header{
  margin-bottom:20%;
}
header h1{
  font-size:1.3rem;
}
.hithere{
  font-size:1.3rem;
}
@keyframes color-change {
  from {
    color: #FF0000;
  }
  10% {
    color: #00FF00;
  }
  50% {
    color: #0000FF;
  }
  75% {
    color: #FF00FF;
  }
  100% {
    color: #FFFF00;
  }
}
.firstCase{
  animation: width-change 2.5s ease-in  reverse both running ;
  min-height:5px;
  background-color:red;
  justify-self:self-end;
  margin:1px auto;

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
