export default {
    name: 'TodoItems',
    data() {
        return {
            infos: [],
            test: ''
        }
    },
    methods: {
        getInfos: function(){
            fetch('http://127.0.0.1:3000/task/1', {headers: {'Content-Type': 'application/json'}}).then((res) => res.json()).then((data) => {this.infos = data, console.log(this.infos), this.test = this.infos.title});
        }
    },
}