<template>
  <v-container>
    <v-row>
      <div class="col-3">
        <h3>Draggable 1</h3>
        <draggable
          class="list-group"
          :list="list1"
          group="p"
          @change="log"
        >
          <div
            class="list-group-item"
            v-for="(element, index) in list1"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>

      <div class="col-3">
        <h3>Draggable 2</h3>
        <draggable class="list-group" :list="list2" group="p" @change="log">
          <div
            class="list-group-item"
            v-for="(element, index) in list2"
            :key="element.name"
          >
            {{ element.name }} {{ index }}
          </div>
        </draggable>
      </div>
    </v-row>
  </v-container>
</template>
<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable,
  },
  data() {
    return {
      list1: [
        { name: "John", id: 1 },
        { name: "Joao", id: 2 },
        { name: "Jean", id: 3 },
        { name: "Gerard", id: 4 },
      ],
      list2: [
        { name: "Juan", id: 5 },
        { name: "Edgard", id: 6 },
        { name: "Johnson", id: 7 },
      ],
    };
  },
  methods: {
   
    log: function (evt) {
      window.console.log(evt);
    },
  },
};
</script>
