<template>
    <h1 v-if="useremail !== null">ようこそ {{useremail}} さん</h1>
</template>

<script>
import firebase from "../firebase.js";

export default {
    name: 'welcomeuser',
    data(){
        return{
            useremail: null,
        }
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.useremail = user.email;
            }else{
                this.useremail = null;
            }
        })
    }
}
</script>