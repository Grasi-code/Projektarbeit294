<template>
  <div>
    <div class="page">
      <AddTask></AddTask>
      <TodoItems></TodoItems>
    </div>
    <UserLogin></UserLogin>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask/AddTask.vue';
import TodoItems from '@/components/TodoItems/TodoItems.vue';
import UserLogin from '@/components/UserLogin/UserLogin.vue';

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
