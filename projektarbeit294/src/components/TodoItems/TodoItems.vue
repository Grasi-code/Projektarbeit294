<template>
    <div class="container">
        <button @click="getInfos()">Hello</button>
        <ul>
            <li v-repeat="infos">
                {{title}}
            </li>
        </ul>
    </div>
</template>



<script src="./TodoItems.js">
</script>
<style scoped>
    @import './TodoItems.css';
</style>