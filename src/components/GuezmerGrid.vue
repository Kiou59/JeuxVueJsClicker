<script setup>
 import { useCounterStore } from '/home/kiou/projects/MerguezClicker/MerguezClicker/src/stores/counter.js'
 const merguez=useCounterStore();

</script>

<template>

<div id="main" class="grid grid-rows-5 grid-cols-5 min-w-max min-h-max">
    <div class='w-auto h-auto '>
        <img :src='merguez.srcs[0]' :class='merguez.classes[0]' @click='merguez.clickGuez(0)' >
    </div>
    <div class='w-auto h-auto '>
        <img :src='merguez.srcs[1]' :class='merguez.classes[1]' @click='merguez.clickGuez(1)'>
    </div>
    <div class='w-auto h-auto'>
        <img :src='merguez.srcs[2]' :class='merguez.classes[2]' @click='merguez.clickGuez(2)'>
        </div>
    <div class='w-auto h-auto'>
        <img :src='merguez.srcs[3]' :class='merguez.classes[3]' @click='merguez.clickGuez(3)'>
        </div>
    <div class='w-auto h-auto'>
        <img :src='merguez.srcs[4]' :class='merguez.classes[4]' @click='merguez.clickGuez(4)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[5]' :class='merguez.classes[5]' @click='merguez.clickGuez(5)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[6]' :class='merguez.classes[6]' @click='merguez.clickGuez(6)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[7]' :class='merguez.classes[7]' @click='merguez.clickGuez(7)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[8]' :class='merguez.classes[8]' @click='merguez.clickGuez(8)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[9]' :class='merguez.classes[9]' @click='merguez.clickGuez(9)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[10]' :class='merguez.classes[10]' @click='merguez.clickGuez(10)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[11]' :class='merguez.classes[11]' @click='merguez.clickGuez(11)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[12]' :class='merguez.classes[12]' @click='merguez.clickGuez(12)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[13]' :class='merguez.classes[13]' @click='merguez.clickGuez(13)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[14]' :class='merguez.classes[14]' @click='merguez.clickGuez(14)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[15]' :class='merguez.classes[15]' @click='merguez.clickGuez(15)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[16]' :class='merguez.classes[16]' @click='merguez.clickGuez(16)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[17]' :class='merguez.classes[17]' @click='merguez.clickGuez(17)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[18]' :class='merguez.classes[18]' @click='merguez.clickGuez(18)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[19]' :class='merguez.classes[19]' @click='merguez.clickGuez(19)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[20]' :class='merguez.classes[20]' @click='merguez.clickGuez(20)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[21]' :class='merguez.classes[21]' @click='merguez.clickGuez(21)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[22]' :class='merguez.classes[22]' @click='merguez.clickGuez(22)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[23]' :class='merguez.classes[23]' @click='merguez.clickGuez(23)'>
    </div>
    <div class='w-auto h-auto'>
                <img :src='merguez.srcs[24]' :class='merguez.classes[24]' @click='merguez.clickGuez(24)'>
    </div>
</div>


</template>
<style>
img{

    width:100%;
    

}
.w-auto {
    border-top:solid grey;
        border-bottom:solid grey;
    background-size: auto 100%;
    background-image:url("/./src/img/flame.webp");
    background-repeat: round;
}
#main{

   
}
</style>