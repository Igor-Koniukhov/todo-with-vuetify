<template>
  <v-list class="pt-0" flat>
    <task 
    v-for="task in $store.getters.tasksFiltered" 
    :task="task"
    :key="task.id"
      />
  </v-list>
</template>

<script>
export default {
  components: {
    Task: require("@/components/Todo/Task").default,
  },
};
</script>

<style></style>
