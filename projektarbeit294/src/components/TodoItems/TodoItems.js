export default {
    name: 'TodoItems',
    data() {
        return {
            infos: [],
            updating: null,
            loggedIn: "",
            userUpdateInput: ""
        }
    },
    methods: {
        onlySpaces: function(str) {
            return str.trim().length === 0;
        },
        getInfos: function() {
            this.loggedIn = localStorage.getItem("loggedIn")
            fetch('http://127.0.0.1:3000/auth/cookie/tasks', { credentials: 'include', headers: { 'Content-Type': 'application/json' } })
                .then((res) => {
                    if (res.status !== 200) {
                        throw new Error(res.status)
                    }
                    return res.json()
                })
                .then((data) => {
                    this.infos = data;
                })
        },
        tasksDelete: function(id, title) {
            fetch('http://127.0.0.1:3000/auth/cookie/task/' + id, { credentials: 'include', method: 'delete' })
                .then(() => {
                    alert('Task with title: "' + title + '" successfully deleted!')
                    window.location.reload();
                })
        },
        tasksUpdate: function(id) {
            if(this.onlySpaces(this.userUpdateInput) == false && this.userUpdateInput.length != 0){
                fetch('http://127.0.0.1:3000/tasks', {
                    method: 'put',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({ id: id, completed: false, title: this.userUpdateInput })
                })
                .then(() => {
                    alert("Task successfully Updated")
                    window.location.reload()
                })
            }else if(this.userUpdateInput.length == 0){
                this.updating = null
            }else{
                alert("Invalide Task Name")
            }
        },
        taskInfo: function(title) {
            this.showInfo = !this.showInfo
            this.element = title
        }
    },
    created: function() {
        this.getInfos()
        this.loggedIn = 'false'
    }
}