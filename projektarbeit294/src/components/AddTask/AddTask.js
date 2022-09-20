export default {
    name: 'AddTask',
    data() {
        return {
            createTaskName: null,
            inputData: { title: this.createTaskName },
            infos: [],
            loggedIn: null
        }
    },
    methods: {
        onlySpaces: function(str) {
            return str.trim().length === 0;
        },
        tasksPost: function() {
            if(this.onlySpaces(this.createTaskName) == false && this.createTaskName.length != 0){
                fetch('http://127.0.0.1:3000/auth/cookie/tasks', { credentials: 'include', method: 'post', body: JSON.stringify({ title: this.createTaskName }), headers: { 'Content-Type': 'application/json', } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                    this.createTaskName = "";
                    alert("Task sucsessfully created")
                    window.location.reload()
                });
            }else{
                alert("Invalide Task Name")

            }
        },
    },        
    created: function() {
        this.loggedIn = localStorage.getItem("loggedIn")
    }
}