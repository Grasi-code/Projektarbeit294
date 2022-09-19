export default {
    name: 'TodoItems',
    data() {
        return {
            infos: [],
            updating: null,
        }
    },
    methods: {
        getInfos: function() {
            fetch('http://127.0.0.1:3000/auth/cookie/tasks', { credentials: 'include', headers: { 'Content-Type': 'application/json' } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                })
                .catch(function(){
                    alert("Test")
                }
                )
        },
        tasksDelete: function(id, title) {
            fetch('http://127.0.0.1:3000/auth/cookie/task/' + id, { credentials: 'include', method: 'delete' })
                .then(() => {
                    alert('Task with title: "' + title + '" successfully deleted!')
                    window.location.reload();
                })
        },
        tasksUpdate: function(id) {
            fetch('http://127.0.0.1:3000/tasks', {
                    method: 'put',
                    credentials: 'include',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({ id: id, completed: false, title: this.userUpdateInput })
                })
                .then(() => {
                    window.location.reload()
                })
        },
    },
    created: function() {
        this.getInfos()
    }
}