<template>
    <div v-if="loggedIn !== 'true'" class="containerLogin">
        <h1>You have to log in to see your todos</h1>
        <div @submit="userLogin()" class="loginInput">
            <form @submit.prevent>
                <input style="margin-bottom: 10px;" type="email" placeholder="E-mail" v-model="loginEmail">
                <br>
                <input style="margin-bottom: 10px;" type="password" placeholder="Password" v-model="loginPassword">
                <br>
                <input style="margin-bottom: 10px;" type="submit" value="Login"/>
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