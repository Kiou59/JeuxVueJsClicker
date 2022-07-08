<script setup>
 import { useCounterStore } from '/home/kiou/projects/MerguezTest/MerguezTest/src/stores/counter.js'
 const merguez=useCounterStore();
 merguez.popUpStyle()

</script>

<template>


<div id='popUp'>
<h1>{{merguez.hPopUp}}</h1>
<p :v-model='merguez.popUpText'>

</p>
<button @click=" merguez.start"> ok </button>
</div>

</template>
<style >
#popUp{
    position:fixed;
    top:40%;
    right:10%;
    left:10%;
    background-color : white;
    border: 4px solid;
    text-align:center;

}
</style>