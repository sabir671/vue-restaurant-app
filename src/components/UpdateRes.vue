<template>
<h1> welcome on Update Restaurant Page</h1>
<form action="" class="update">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
    <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
</form>
</template>

<script>
import axios from 'axios'
export default {
    name: "UpdateRes",
    data() {
        return {
            restaurant: {
                name: "",
                address: "",
                contact: ""
            }
        }
    },
    methods: {
        async updateRestaurant() {
            const result = await axios.put(`http://localhost:3000/restaurants/` + this.$route.params.id, {
                name: this.restaurant.name,
                address: this.restaurant.address,
                contact: this.restaurant.contact
            });
            console.log("Update successful:", result.data);
            if (result.status == 200) {
                this.$router.push({ name: 'HomePage' })
            }

        }
    },
    async mounted() {
        let user = localStorage.getItem('user-info');
        if (!user) {
            this.$router.push({ name: 'SignUp' })
        }
        const result = await axios.get("http://localhost:3000/restaurants/" + this.$route.params.id)
        // console.warn(this.$route.params.id)
        console.warn(result.data)
        this.restaurant = result.data
    }
}
</script>

<style>
.update input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}

.update button {
    width: 320px;
    height: 40px;
    background: skyblue;
    border: 1px solid skyblue;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>
