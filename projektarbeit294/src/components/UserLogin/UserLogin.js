export default {
    name: 'UserLogin',
    data() {
        return {
            loginEmail: "",
            loginPassword: "",
            infos: [],
        }
    },
    methods: {
        userLogin: function(){
            fetch('http://127.0.0.1:3000/auth/cookie/login', {credentials: "include", method: "post", body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword }), headers: { 'Content-Type': 'application/json', } })
                .then(() => {
                    console.log("Logged in")
                    window.location.reload()
                });
        },
        userLogout: function(){
            fetch('http://127.0.0.1:3000/auth/cookie/logout', {credentials: "include", method: "post", body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword }), headers: { 'Content-Type': 'application/json', } })
            .then(() => {
                console.log("Logged out")
                window.location.reload()
            });
            
        }
    },
}