export default {
    name: 'TodoItems',
    data() {
        return {
            infos: [],
            updating: null,
            showInfo: false,
            element: "",
            localStorageInfo: []
        }
    },
    methods: {
        test: function() {
            this.localStorageInfo = localStorage.setItem("loggedIn", false)
            console.log(this.localStorageInfo)
        },
        getInfos: function() {
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
                .catch(function() {
                    /* alert(error) */
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
        taskInfo: function(title) {
            this.showInfo = !this.showInfo
            this.element = title
        }
    },
    created: function() {
        this.getInfos()
    }
}