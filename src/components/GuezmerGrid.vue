<script setup>
import { useCounterStore } from '@/stores/counter.js'
const merguez=useCounterStore();
</script>

<template>

<div  id="main" class="grid grid-rows-5 grid-cols-5  h-auto">
    <div class=''>
        <img :style='merguez.bgcGuez' :src='merguez.srcs[0]' :class='merguez.classes[0]' @click='merguez.clickGuez(0)' >
    </div>
    <div class=''>
        <img :style='merguez.bgcGuez' :src='merguez.srcs[1]' :class='merguez.classes[1]' @click='merguez.clickGuez(1)'>
    </div>
    <div class=''>
        <img :style='merguez.bgcGuez' :src='merguez.srcs[2]' :class='merguez.classes[2]' @click='merguez.clickGuez(2)'>
        </div>
    <div class=''>
        <img :style='merguez.bgcGuez' :src='merguez.srcs[3]' :class='merguez.classes[3]' @click='merguez.clickGuez(3)'>
        </div>
    <div class=''>
        <img :style='merguez.bgcGuez' :src='merguez.srcs[4]' :class='merguez.classes[4]' @click='merguez.clickGuez(4)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[5]' :class='merguez.classes[5]' @click='merguez.clickGuez(5)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[6]' :class='merguez.classes[6]' @click='merguez.clickGuez(6)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[7]' :class='merguez.classes[7]' @click='merguez.clickGuez(7)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[8]' :class='merguez.classes[8]' @click='merguez.clickGuez(8)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[9]' :class='merguez.classes[9]' @click='merguez.clickGuez(9)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[10]' :class='merguez.classes[10]' @click='merguez.clickGuez(10)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[11]' :class='merguez.classes[11]' @click='merguez.clickGuez(11)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[12]' :class='merguez.classes[12]' @click='merguez.clickGuez(12)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[13]' :class='merguez.classes[13]' @click='merguez.clickGuez(13)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[14]' :class='merguez.classes[14]' @click='merguez.clickGuez(14)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[15]' :class='merguez.classes[15]' @click='merguez.clickGuez(15)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[16]' :class='merguez.classes[16]' @click='merguez.clickGuez(16)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[17]' :class='merguez.classes[17]' @click='merguez.clickGuez(17)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[18]' :class='merguez.classes[18]' @click='merguez.clickGuez(18)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[19]' :class='merguez.classes[19]' @click='merguez.clickGuez(19)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[20]' :class='merguez.classes[20]' @click='merguez.clickGuez(20)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[21]' :class='merguez.classes[21]' @click='merguez.clickGuez(21)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[22]' :class='merguez.classes[22]' @click='merguez.clickGuez(22)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[23]' :class='merguez.classes[23]' @click='merguez.clickGuez(23)'>
    </div>
    <div class=''>
                <img :style='merguez.bgcGuez' :src='merguez.srcs[24]' :class='merguez.classes[24]' @click='merguez.clickGuez(24)'>
    </div>
</div>


</template> 
<style>
img{
    height:100%;
    width:100%;

}
.spinClass{
    
  animation-name: spin;
  animation-duration: 500ms;
  animation-iteration-count: infinite;
  animation-timing-function: linear; 
  transform: rotate(3deg); 
   transform: rotate(0.3rad);
   transform: rotate(3grad);  
   transform: rotate(.03turn);  
}

@keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}
@-webkit-keyframes spin {
    from {
        transform:rotate(0deg);
    }
    to {
        transform:rotate(360deg);
    }
}


@media (orientation:landscape) {
#main div{

    border: 2px solid white;
    border-radius: 5px;
    max-height:100%;
    max-width:100%;


    
}
#main{
    
    margin: auto;
    width:30%;
    height:auto;

}}
@media (orientation: portrait) { 
    #main{
    margin-top:200px;
    margin: auto;
    width:80%;
    height :auto;

}
#main div{

    border: 2px solid white;
    border-radius:5px;
    max-height:100%;
    max-width:100%;


    
}
}

</style>
