<template>
    <div class="container">
        <form id="formContainer" @submit.prevent>
            <h2>Create New Task</h2>
            <label for="titleInput">Name</label>
            <input v-model="createTaskName" name="title" id="titleInput">
            <button @click="tasksPost()" type="submit">Create</button>
            <button @click="tasksGet()">Get</button>
        </form>
    </div>
</template>
<script src="./AddTask.js">
    export default tasksGet()
</script>
<style scoped>
    @import './AddTask.css';
</style>