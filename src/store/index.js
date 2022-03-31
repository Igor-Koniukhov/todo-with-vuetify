import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    appTitle: process.env.VUE_APP_TITLE,
    search: null,
    board: {
      list: 1,
      title: "",
      backgroundColor: "",
    },
    boards: [
      {
        list: 1,
        title: "Created",
        backgroundColor: "#fffff",
        color: "green",
      },
      {
        list: 2,
        title: "In progress",
        backgroundColor: "#F1F50A",
        color: "#333333",
      },
      {
        list: 3,
        title: "Done",
        backgroundColor: "blue",
        color: "yellow",
      },
    ],
    tasks: [
      {
        id: 1,
        list: 1,
        title: "Do something!",
        done: false,
        dueDate: null,
      },
      {
        id: 2,
        list: 1,
        title: "Get bananas",
        done: false,
        dueDate: null,
      },
      {
        id: 3,
        list: 1,
        title: "Eat bananas",
        done: false,
        dueDate: null,
      },
    ],
    addBoard: false,
    sorting: false,
    boardSorting: false,
    snackbar: {
      show: false,
      text: "",
    },
  },
  mutations: {
    addTask(state, newTaskTitle) {
      let newTask = {
        id: Date.now(),
        list: 1,
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
    deleteBoard(state, list) {
      state.boards = state.boards.filter((board) => board.list !== list);
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
    updateTaskDueDate(state, payload) {
      let task = state.tasks.filter((task) => task.id === payload.id)[0];
      task.dueDate = payload.dueDate;
    },
    updateBoard(state, payload) {
      
      let board = state.boards.filter((board) => board.list === payload.list)[0];
      console.log(board.backgroundColor, payload.backgroundColor, "mutations")
      board.list = payload.list
      board.title=payload.title
      board.backgroundColor=payload.backgroundColor
      board.color=payload.color
    },
    setSearch(state, value) {
      state.search = value;
    },
    toggleSorting(state) {
      state.sorting = !state.sorting;
    },
    toggleBoardSorting(state) {
      state.boardSorting = !state.boardSorting;
    },
    toggleAddBoard(state) {
      state.addBoard = !state.addBoard;
    },
    addBoard(state, payload) {
      state.boards.push(payload);
      console.log(state.boards);
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
    deleteBoard({ commit }, id) {
      commit("deleteBoard", id);
      commit("showSnackbar", "Board Deleted!");
    },
    updateTasktitle({ commit }, payload) {
      commit("updateTasktitle", payload);
      commit("showSnackbar", "Task updated!");
    },
    updateTaskDueDate({ commit }, payload) {
      commit("updateTaskDueDate", payload);
      commit("showSnackbar", "Date updated!");
    },
    updateBoard({commit}, payload){
      commit("updateBoard", payload);
      commit("showSnackbar", "Board updated!");
    }
  },
  getters: {
    tasksFiltered(state) {
      if (!state.search) {
        return state.tasks;
      }
      return state.tasks.filter((task) =>
        task.title.toLowerCase().includes(state.search.toLowerCase())
      );
    },
  },
  modules: {},
});
