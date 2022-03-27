<template>
  <div class="home">
    <field-add-task />
    <list-tasks v-if="$store.state.tasks.length" />
    <no-tasks v-else />
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "ToDo",
  components: {
    FieldAddTask: require("@/components/Todo/FieldAddTask.vue").default,
    ListTasks: require("@/components/Todo/ListTasks.vue").default,
    NoTasks: require("@/components/Todo/NoTasks.vue").default,
  },
};
</script>
