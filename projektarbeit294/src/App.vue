<template>
  <AddTask></AddTask>
  <TodoItems></TodoItems>
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

</style>
