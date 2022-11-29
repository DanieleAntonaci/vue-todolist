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


        }
    }
}).mount('#app');
