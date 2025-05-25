<template>
<div class="header">
    <img class="logo" src="../assets/signup.jpeg" />
    <h1>Login</h1>
</div>
<div class="register">
    <input type="email" v-model="email" placeholder="Enter Email" />
    <input type="password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Login</button>
    <p class="router">
        <router-link to="/sign-up">Sign up</router-link>
    </p>
</div>
</template>

<script>
import axios from 'axios'
export default {
    name: 'LoginPage',
    data() {
        return {
            email: "",
            password: ""
        }
    },
    methods: {
        async login() {
            let result = await axios.get(`
            http://localhost:3000/users?mail=${this.email}&password=${this.password}`)

            if (result.status == 200 && result.data.length > 0) {
                localStorage.setItem("user-info", JSON.stringify(result.data[0]))
                this.$router.push({ name: 'HomePage' })
            }
            console.log(result);
        }
    },
    mounted() {
        let user = localStorage.getItem('user-info');
        if (user) {
            this.$router.push('HomePage')
        }
    }
}
</script>
<style >
   
</style>