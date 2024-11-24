const app = Vue.createApp({
	data() {
		return {
			newTask: "",
			tasks: [],
			nextTaskId: 1,
		};
	},
	// 