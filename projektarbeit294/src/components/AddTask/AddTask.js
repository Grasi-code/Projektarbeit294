export default {
    name: 'AddTask',
    data() {
        return {
            createTaskName: "",
            inputData: { title: this.createTaskName },
            infos: []
        }
    },
    methods: {
        tasksPost: function() {
            fetch('http://127.0.0.1:3000/tasks', { method: 'post', body: JSON.stringify({ title: this.createTaskName }), headers: { 'Content-Type': 'application/json', } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                    this.createTaskName = "";
                    window.location.reload()
                });
        },
        tasksPostAuth: function() {
            fetch('http://127.0.0.1:3000/auth/cookie/tasks', { method: 'post', body: JSON.stringify({ title: this.createTaskName }), headers: { 'Content-Type': 'application/json', } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                    this.createTaskName = "";
                    /*window.location.reload()*/
                });
        }

    }
}