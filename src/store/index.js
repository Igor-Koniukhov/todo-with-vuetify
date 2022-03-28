import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasks: [
      {
        id: 1,
        title: "Wake up",
        done: false,
        dueDate: "2022-03-27",
      },
      {
        id: 2,
        title: "Get bananas",
        done: false,
        dueDate: "2022-03-27",
      },
      {
        id: 3,
        title: "Eat bananas",
        done: false,
        dueDate: null,
      }
    ],
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        title: newTaskTitle,
        done: false,
        dueDone: null,
      };
      state.tasks.push(newTask);
    },
    doneTask(state, id) {
      let task = state.tasks.filter((task) => task.id === id)[0];
      task.done = !task.done;
    },
    deleteTask(state, id) {
      state.tasks = state.tasks.filter((task) => task.id !== id);
    },
    showSnackbar(state, text) {
      let timeout = 0;
      if (state.snackbar.show) {
        state.snackbar.show = false;
        timeout = 300;
      }
      setTimeout(() => {
        state.snackbar.show = true;
        state.snackbar.text = text;
      }, timeout);
    },
    hideSnackBar(state) {
      state.snackbar.show = false;
    },
    updateTasktitle(state, payload) {     
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.title = payload.title;
    },
  },
  actions: {
    addTask({ commit }, newTaskTitle) {
      commit("addTask", newTaskTitle);
      commit("showSnackbar", "Task Added!");
    },
    deleteTask({ commit }, id) {
      commit("deleteTask", id);
      commit("showSnackbar", "Task Deleted!");
    },
    updateTasktitle({ commit }, payload) {
      commit("updateTasktitle", payload);
      commit("showSnackbar", "Task updated!");
    },
  },
  modules: {},
});
