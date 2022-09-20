<template>
    <div v-if="loggedIn == 'true'" class="container">
        <form id="formContainer" @submit.prevent>
            <h2>Create New Task</h2>
            <label for="titleInput">Name</label>
            <input maxlength="22" v-model="createTaskName" name="title" id="titleInput">
            <button @click="tasksPost()" type="submit">Create</button>
        </form>
    </div>
</template>
<script src="./AddTask.js">
</script>
<style scoped>
    @import './AddTask.css';
</style>