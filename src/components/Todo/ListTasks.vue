<template>
  <v-list flat>
     <h2 
      :style="{color: board.color, backgroundColor: board.backgroundColor}"
      class="text-center title-font handle-board"
      >{{ board.title }}</h2>
    <draggable handle=".handle"  group="task" @change="log">
     
      <task      
        v-for="task in listOfTasks"
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
    draggable,
  },
  props: ["board"],
  data() {
    return {};
  },
  methods: {
     log: function (evt) {
      window.console.log(evt);
    },
  },
  computed: {
    listOfTasks() {     
      return this.$store.getters.tasksFiltered.filter(
        (task) => task.list === this.board.list
      );
    },
  },
};
</script>

<style lang="scss">
.title-font{
  font-family: "Fredericka the Great";
}
.v-list{
  min-height: 250px;
  height: 100%;
  width: 100%;
  padding: 3px;
}
</style>
