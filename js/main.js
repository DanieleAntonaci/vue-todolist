const { createApp } = Vue;

createApp({
    data() {
        return {
            // array of object
            tasks: [
                {
                    text: 'Fare i compiti',
                    done: false
                },
                {
                    text: 'Fare la spesa',
                    done: true
                },
                {
                    text: 'Fare il bucato',
                    done: false
                }
            ],
            newTask: '',
            error: false,

        }
    },
    methods: {
        createNewTask() {
            this.tasks.unshift({ text: this.newTask, done: false });
            this.newTask = '';
        },
        delateTask(index) {
            this.tasks.splice(index, 1)
        }
    }
}).mount('#app');
