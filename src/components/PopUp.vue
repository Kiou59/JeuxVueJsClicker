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
<h1>{{merguez.hPopUp.toUpperCase()}}</h1>
<p>
{{merguez.popUpText}}
</p>
<button :class='merguez.buttonClass' @click=" merguez.start"> ok </button>
<button :class='merguez.resetClass' @click='merguez.reset'>Recomencer</button>
</div>

</template>
<style >
#popUp{
    position:fixed;
    top:40%;
    right:10%;
    left:10%;
    background-color : lightgrey;
    box-shadow: inset 0 0 1em grey;
    color: white;
    border: 4px solid white;
    border-radius : 10px;
    text-align:center;
    padding:1em;

}
#popUp p 
{
    color:black;
    font-family: 'Montserrat', sans-serif;
    padding:10px;
    white-space: pre-line;
    font-weight: 800;
}
@media (orientation: portrait) {
   #popUp{     top:20%;
    right:10%;
    left:10%;
    }
 }
</style>