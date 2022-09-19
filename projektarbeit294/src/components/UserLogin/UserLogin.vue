<template>
    <div v-if="loggedIn === 'false'" class="containerLogin">
        <h1>You have to log in to see your todos</h1>
        <div class="loginInput">
            <form @submit.prevent>
                <input style="margin-bottom: 10px;" type="email" placeholder="E-mail" v-model="loginEmail">
                <br>
                <input style="margin-bottom: 10px;" type="password" placeholder="Password" v-model="loginPassword">
                <br>
                <button style="margin-bottom: 10px;" type="submit" @click="userLogin()">Login</button>
            </form>
        </div>
    </div>
    <button v-else @click="userLogout()">Logout</button>
</template>


<script src="../UserLogin/UserLogin.js">
</script>
<style scoped>
    @import './UserLogin.css';
</style>