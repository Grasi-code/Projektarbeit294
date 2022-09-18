<template>
  <div>
    <AddTask></AddTask>
    <TodoItems></TodoItems>
    <DeleteTask></DeleteTask>
  </div>
</template>

<script>
import AddTask from '@/components/AddTask/AddTask.vue';
import TodoItems from './components/TodoItems/TodoItems.vue';


export default {
  name: 'App',
  components: {
    AddTask,
    TodoItems
}
}
</script>

<style>
  body{
    text-align: center;
  }
</style>
