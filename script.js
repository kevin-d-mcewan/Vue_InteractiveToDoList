const app = Vue.createApp({
  data() {
    return {
      newTask: "",
      tasks: [],
      nextTaskId: 0,
    };
  },
  // Methods Property to define Methods of this Vue App
  methods: {
    // Below is what we want the function ('addNewTask') to do
    addNewTask() {
      this.tasks.push({
        // This will take the 'tasks[]' array from above and push an item to the end of the array
        // This will add 1 to 'nextTaskId' from Vue.createApp
        id: this.nextTaskId++,
        // This will create the title for whatever the new task is
        title: this.newTask,
      });
      // Must set 'this.newTask =""' blank or else they will just concateinate on top
      // of each other instead of creating on not concatinated to previous one
      this.newTask = "";
    },
  },
});
app.component("todo-item", {
  template: `
        <li>
          {{title}}
          <button @click="$emit('remove')">
            Remove Task
          </button>
        </li>
      `,
  props: ["title"],
});
app.mount("#todo-list");