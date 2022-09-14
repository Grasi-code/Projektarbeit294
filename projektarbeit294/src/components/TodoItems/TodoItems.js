export default {
    name: 'TodoItems',
    data() {
        return {
            infos: []
        }
    },
    methods: {
        getInfos: function() {
            fetch('http://127.0.0.1:3000/tasks', { headers: { 'Content-Type': 'application/json' } })
                .then((res) => res.json())
                .then((data) => {
                    this.infos = data;
                    console.log(this.infos.title);
                });
        }
    },
}