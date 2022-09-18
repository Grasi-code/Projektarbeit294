export default {
    name: 'TodoItems',
    data() {
        return {
            infos: [],
            updating: null,
            userUpdateInput: ""
        }
    },
    methods: {
        getInfos: function() {
            fetch('http://127.0.0.1:3000/tasks', { headers: { 'Content-Type': 'application/json' } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                });
        },
        tasksDelete: function(id) {
            fetch('http://127.0.0.1:3000/task/' + id, { method: 'delete' })
                .then(() => {
                    window.location.reload();
                })
        },
        tasksUpdate: function(id) {
            fetch('http://127.0.0.1:3000/tasks', {
                    method: 'put',
                    headers: { 'Content-Type': 'application/json', },
                    body: JSON.stringify({ id: id, completed: false, title: this.userUpdateInput })
                })
                .then(() => {
                    this.updating = null;
                    window.location.reload()
                });
        }
    },
    created: function() {
        this.getInfos();
    }
}