<template>
<div class="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/add-res">Add Restaurant</router-link>
    <a v-on:click="logout" href="#">Logout</a>
</div>
</template>

<script>
export default {
    name: 'HeaderPage',
    methods: {
        logout() {
            localStorage.clear();
            this.$router.push({ name: 'login' })
        }
    }
}
</script>

<style>
.nav {
    background: rgb(130, 111, 57);
    overflow: hidden;
}

.nav a {
    float: left;
    color: white;
    text-decoration: none;
    padding: 20px 16px;
    text-align: center;
    font-size: 17px;
    margin-right: 5px;
}

.nav a:hover {
    background: rgb(24, 18, 4);
    color: rgb(126, 226, 126);
}
</style>
