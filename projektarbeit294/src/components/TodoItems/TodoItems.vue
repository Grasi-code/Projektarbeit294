<template>
    <div class="container2">
        <button @click="getInfosAuth()">GetAuth</button>
        <ul>
            <li v-for="item in infos" :key="item.id">
                <button class="liContainer">
                    <p v-if="updating != item.id">{{item.title}}</p>
                    <input v-else maxlength="30" v-model="userUpdateInput">
                    <button @click="tasksDelete(item.id, item.title)" class="button"><img class="Img" src="../../assets/trash-can.png"></button>
                    <button v-if="updating != item.id" @click="this.updating = item.id" class="button"><img class="Img" src="../../assets/pen.png"></button>
                    <button v-else @click="tasksUpdate(item.id)" class="button"><img class="Img" src="../../assets/save.png"></button>
                </button>
            </li>
        </ul>
        <br>
        <div class="links">
            <a href="https://www.flaticon.com/free-icons/trash" title="trash icons">Trash icons created by Freepik - Flaticon</a>
            <br>
            <a href="https://www.flaticon.com/free-icons/pen" title="pen icons">Pen icons created by Freepik - Flaticon</a>
            <br>
            <a href="https://www.flaticon.com/free-icons/save" title="save icons">Save icons created by Freepik - Flaticon</a>
        </div>
    </div>
</template>

<script src="./TodoItems.js">
</script>

<style scoped>
    @import './TodoItems.css';
</style>