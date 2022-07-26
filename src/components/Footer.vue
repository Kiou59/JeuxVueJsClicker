<script setup>
import { useCounterStore } from '@/stores/counter.js'
const merguez=useCounterStore();

</script>

<template>
<footer>
<p class='row'>Contact</p>
<div id='rsLink'>
    <div>
        <a href='https://github.com/Kiou59' target="_blank" ><i class="fa-brands fa-github"></i></a>
    </div>
    <div>
        <a href='https://www.linkedin.com/in/quentin-farine-774286136/' target="_blank" ><i class="fa-brands fa-linkedin"></i></a>
    </div>
    <div>
        <a href="mailto:farine.q@gmail.com" target="_blank" ><i class="fa-solid fa-envelope"></i></a>
    </div>
</div>
</footer>

</template>

<style>
.row{
    color:white;
}
#rsLink{
    display:flex;
    flex-direction:row;
}
#rsLink div{
    margin-left:2px;
}
@media (orientation: portrait){
    #rsLink div{
    margin:auto;
}
}
</style>