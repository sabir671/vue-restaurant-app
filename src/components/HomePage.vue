<template>
<HeaderPage />
<h1>Hello {{name}}, Welcome on the Home page</h1>
<table border="1px solid black">
    <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Contact</td>
        <td>Address</td>
        <td>Action</td>
    </tr>
    <tr v-for="item in restaurant" :key="item.id">
        <td>{{item.id}}</td>
        <td>{{item.name}}</td>
        <td>{{item.contact}}</td>
        <td>{{item.address}}</td>
        <td>
            <router-link :to="'/Update-res/' + item.id">Update</router-link>
            <button v-on:click="deleteRestaurant(item.id)">Delete</button>
        </td>
    </tr>
</table>
</template>

<script>
import axios from 'axios';
import HeaderPage from './HeaderPage.vue'
export default {
    name: 'HomePage',
    components: {
        HeaderPage
    },
    methods: {
      async  deleteRestaurant(id) {
                   let result = await axios.delete("http://localhost:3000/restaurants/"+id);
                   if(result.status ==200){
                    this.loadData()
                   }

        },
       async loadData(){
 let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if (!user) {
            this.$router.push('sign-up')
        }
        let result = await axios.get("http://localhost:3000/restaurants");
        console.warn(result);
        this.restaurant = result.data;
        }
    },
    data() {
        return {
            name: '',
            restaurant: [],
        }
    },
    async mounted() {
       this.loadData();
    }
}
</script>

<style>
td {
    width: 160px;
    height: 50px;
    text-align: center;
    background-color: rgb(169, 94, 141);
}
</style>
