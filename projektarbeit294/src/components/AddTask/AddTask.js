export default {
    name: 'AddTask',
    data() {
        return {
            createTaskName: "",
            inputData: {title : this.createTaskName},
            infos: []
        }
    },
    methods: {
        tasksPost: function(){
            fetch('http://127.0.0.1:3000/tasks', {method: 'post', body: JSON.stringify({title : this.createTaskName}), headers: {'Content-Type': 'application/json',}}).then((res) => res.json()).then((data) => {this.infos = data, console.log(this.infos.title), console.log(this.createTaskName)});
        },
        tasksGet: function(){
            fetch('http://127.0.0.1:3000/tasks', {headers: {'Content-Type': 'application/json'}}).then((res) => res.json()).then((data) => {this.infos = data, console.log(this.infos)});
        }
    },
}