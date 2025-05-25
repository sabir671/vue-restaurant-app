<template>
<h1> welcome on Add Restaurant Page</h1>
<form action="" class="add">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
    <input type="text" placeholder="Enter Contact" v-model="restaurant.contact" />
    <button type="button" v-on:click="addRestaurant">Add Restaurant</button>
</form>
</template>

<script>
import axios from 'axios'
export default {
    name: "AddRes",
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
        async addRestaurant() {
            let result = await axios.post("http://localhost:3000/restaurants",{
            name:this.restaurant.name,
            address:this.restaurant.address,
            contact:this.restaurant.contact

            });
            if (result.status == 201) {
                localStorage.setItem('restaurant-info', JSON.stringify(result.data))
                this.$router.push({ name: 'HomePage' })
            }
        }

    }
}
</script> 

<style>
.add input {
    width: 300px;
    height: 40px;
    padding-left: 20px;
    display: block;
    border: 1px solid skyblue;
    margin-bottom: 20px;
    margin-left: auto;
    margin-right: auto;
}

.add button {
    width: 320px;
    height: 40px;
    background: skyblue;
    border: 1px solid skyblue;
    margin-left: auto;
    margin-right: auto;
    display: block;
}
</style>
