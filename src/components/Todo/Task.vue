<template>
  <div>
    <v-list-item
      @click="doneTask(task.id)"
      :class="task.done ? 'yellow lighten-4' : 'indigo lighten-4'"
    >
      <template v-slot:default>
        <v-list-item-action>
          <v-checkbox :input-value="task.done" color="primary"></v-checkbox>
        </v-list-item-action>
        <v-list-item-content>
          <v-list-item-title
            :class="{ 'text-decoration-line-through': task.done }"
            >{{ task.title }}</v-list-item-title
          >
        </v-list-item-content>
        <v-list-item-action>
          <v-btn @click.stop="deleteTask(task.id)" icon>
            <v-icon color="black lighten-1">mdi-trash-can-outline</v-icon>
          </v-btn>
        </v-list-item-action>
      </template>
    </v-list-item>
    <v-divider></v-divider>
  </div>
</template>

<script>
export default {
  props: ["task"],
  methods: {
    doneTask(id) {
      this.$store.commit("doneTask", id);
    },
    deleteTask(id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>

<style></style>
