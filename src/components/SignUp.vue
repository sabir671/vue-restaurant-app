<template>
<div class="header">
    <img class="logo" src="../assets/signup.jpeg" />
    <h1>Sign up</h1>
</div>
<div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up</button>
    <p>
        <router-link to="/login-page">Login</router-link>
    </p>
</div>
</template>

<script>
import axios from "axios"
export default {
    name: "SignUp",
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods: {
        async signUp() {
            let result = await axios.post("http://localhost:3000/users", {
                name: this.name,
                email: this.email,
                password: this.password
            });
            if (result.status == 201) {
                localStorage.setItem("user-info",JSON.stringify(result.data))
                this.$router.push({name:'HomePage'})
            }
        }
    },
    mounted(){
        let user=localStorage.getItem('user-info');
        if(user){
            this.$router.push('HomePage')
        }
    }
}
</script>

<style>
.header {
    text-align: center;
    margin-bottom: 20px;
}

.logo {
    width: 100px;
    height: 100px;
    display: block;
    margin: 0 auto;
}

.register input,
.register button {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}

.register button {
    width: 320px;
    height: 40px;
    background: skyblue;
    border: 1px solid skyblue;
    cursor: pointer;
    margin-left: auto;
    margin-right: auto;
}
</style>
