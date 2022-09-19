<template>
    <div class="containerLogin">
        <h1>You have to log in to see your todos</h1>
        <div class="loginInput">
            <input type="text" placeholder="email" v-model="loginEmail">
            <input type="text" placeholder="password" v-model="loginPassword">
        </div>
        <button @click="userLogin()">Login</button>
        <button @click="userLogout()">Logout</button>
    </div>
</template>


<script src="../UserLogin/UserLogin.js">
</script>
<style scoped>
    @import './UserLogin.css';
</style>