<template>
    <div class="container">
        <button @click="methods.tasksGet()">Hello</button>
        <ul>
            <li v-for="item in infos" :key="item.id">
                {{item.title}}
                <input type="checkbox" class="done">
            </li>
        </ul>
    </div>
</template>



<script src="./TodoItems.js">
    import methods from '../AddTask/AddTask.js';
</script>
<style scoped>
    @import './TodoItems.css';
</style>