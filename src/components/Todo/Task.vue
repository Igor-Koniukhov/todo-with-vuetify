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

        <v-list-item-action v-if="task.dueDate">
          <v-list-item-action-text>
            <v-icon small>mdi-calendar</v-icon>
            {{task.dueDate | niceDate }}
          </v-list-item-action-text>
        </v-list-item-action>

        <v-list-item-action>
          <task-menu :task="task" />
        </v-list-item-action>
      </template>
    </v-list-item>

    <v-divider></v-divider>
  </div>
</template>

<script>
import { format } from 'date-fns'
export default {
  props: ["task"],
  filters: {
    niceDate(value){
      return format(new Date(value), 'MMM d')
    }
  },
  data() {
    return {};
  },
  components: {
    "task-menu": require("@/components/Todo/TaskMenu.vue").default,
  },
  methods: {
    doneTask(id) {
      this.$store.commit("doneTask", id);
    },
  },
};
</script>
