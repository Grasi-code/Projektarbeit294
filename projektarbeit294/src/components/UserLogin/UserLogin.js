export default {
    name: 'UserLogin',
    data() {
        return {
            loginEmail: "",
            loginPassword: "",
            infos: [],
            loggedIn: localStorage.getItem("loggedIn")
        }
    },
    methods: {
        userLogin: function() {
            if(this.loginPassword === 'm294'){
                fetch('http://127.0.0.1:3000/auth/cookie/login', { credentials: "include", method: "post", body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword }), headers: { 'Content-Type': 'application/json', } })
                .then((res) => {
                    console.log("Logged in")
                    window.location.reload()
                    if (res.status !== 200) {
                        return
                    } else {
                        localStorage.setItem("loggedIn", true)
                        this.loggedIn = localStorage.getItem("loggedIn")
                    }
                })
            }else{
                alert("Wrong Password")
            }
        },
        userLogout: function() {
            fetch('http://127.0.0.1:3000/auth/cookie/logout', { credentials: "include", method: "post", body: JSON.stringify({ email: this.loginEmail, password: this.loginPassword }), headers: { 'Content-Type': 'application/json', } })
                .then(() => {
                    console.log("Logged out")
                    localStorage.setItem("loggedIn", false)
                    this.loggedIn = localStorage.getItem("loggedIn")
                    console.log(this.loggedIn)
                    window.location.reload()
                });

        }
    },
}