<template>
    <div class="container2">
        <ul>
            <li v-for="item in infos" :key="item.id">
                {{item.id}}
                {{item.title}}
                <input name="done" type="checkbox" class="done">
            </li>
        </ul>
    </div>
</template>

<script src="./TodoItems.js">

</script>
    
<style scoped>
    @import './TodoItems.css';
</style>