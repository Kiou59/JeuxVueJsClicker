<script setup>
import { useCounterStore } from '@/stores/counter.js'
const merguez=useCounterStore();
 merguez.popUpStyle()

</script>
<!-- popUp de lancement de jeu :
-affichage des infos 
-start game button -->
<!-- Amelioration a venir
-ajout de texte entre chaque niveau 
-menu pause spacebar-->

<template>


<div id='popUp'>
<h1>{{merguez.hPopUp}}</h1>
<p >
{{merguez.popUpText}}
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
    background-color : red;
    color: white;
    border: 4px solid;
    text-align:center;

}
</style>