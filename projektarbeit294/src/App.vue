<template>
  <div>
    <AddTask></AddTask>
    <TodoItems></TodoItems>
    <UserLogin></UserLogin>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask/AddTask.vue';
import TodoItems from './components/TodoItems/TodoItems.vue';
import UserLogin from '@/components/UserLogin/UserLogin.vue'


export default {
  name: 'App',
  components: {
    AddTask,
    TodoItems,
    UserLogin
}
}
</script>

<style>
  body{
    text-align: center;
  }
</style>
