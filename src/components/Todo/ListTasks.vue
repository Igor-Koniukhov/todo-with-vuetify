<template>
  <v-list flat>
    <div>
      <h2
        :style="{ color: board.color, backgroundColor: board.backgroundColor }"
        class="title-font board-header"
      >
        <div>{{ board.title }}</div>
        <v-list-item-action v-if="$store.state.boardSorting">
          <v-btn icon class="handle-board">
            <v-icon :style="{ color: board.color }">mdi-drag-horizontal</v-icon>
          </v-btn>
        </v-list-item-action>
        <v-list-item-action>
          <board-menu :board="board" />
        </v-list-item-action>
      </h2>
    </div>
    <draggable
      handle=".handle"
      group="task"
      @change="log"
      @start="startDrop"
      @end="endDrop"
      v-model="tasks"
    >
      <task
        v-for="(task, index) in tasks"
        :list="task.list"
        :index="index"
        :task="task"
        :key="task.id"
        :board="board"
      />
    </draggable>
  </v-list>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    Task: require("@/components/Todo/Task").default,
    BoardMenu: require("@/components/Todo/BoardMenu").default,
    draggable,
  },
  props: ["board"],
  data() {
    return {
      task: {},
    };
  },
  methods: {
    log: function (evt) {
      console.log(evt.moved);
    },
    startDrop(e) {},
    endDrop() {},
  },
  computed: {
    tasks: {
      get() {
        return this.$store.getters.tasksFiltered.filter(
          (task) => task.list === this.board.list
        );
      },
      set(value) {
        this.$store.commit("setTasks", value);
      },
    },
  },
};
</script>

<style lang="scss">
.title-font {
  font-family: "Fredericka the Great";
}
.v-list {
  min-height: 250px;
  height: 100%;
  width: 100%;
  padding: 3px;
}
.board-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;
  box-shadow: 1px 2px 3px 1px rgba(0, 0, 0, 0.2);
  margin-bottom: 5px;
}
</style>
