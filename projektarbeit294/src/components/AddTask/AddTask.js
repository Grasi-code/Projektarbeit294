export default {
    name: 'AddTask',
    data() {
        return {
            createTaskName: "",
            inputData: { title: this.createTaskName },
            infos: [],
            loggedIn: null
        }
    },
    methods: {
        tasksPost: function() {
            fetch('http://127.0.0.1:3000/auth/cookie/tasks', { credentials: 'include', method: 'post', body: JSON.stringify({ title: this.createTaskName }), headers: { 'Content-Type': 'application/json', } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                    this.createTaskName = "";
                    window.location.reload()
                });
        },
    },
    created: function() {
        this.loggedIn = localStorage.getItem("loggedIn")
    }
}