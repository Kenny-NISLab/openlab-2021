<template>
    <h2 v-show="useremail">ようこそ {{useremail}} さん</h2>
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
        });
    }
}
</script>