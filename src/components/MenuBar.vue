<template>
    <v-row class="my-2" justify="center">
        <h3 v-show="!uid">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/signin">ログイン</router-link> |
            <router-link to="/contactme">お問い合わせ</router-link>
        </h3>

        <h3 v-show="uid">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/signout">ログアウト</router-link> |
            <router-link to="/mypage">マイページ</router-link> |
            <router-link to="/contactme">お問い合わせ</router-link>
        </h3>
    </v-row>
</template>

<script>
import firebase from '../firebase.js';

export default {
    name: 'menuBar',
    data(){
        return{
            uid: null,
        }
    },
    created(){
        firebase.auth().onAuthStateChanged((user) => {
            if(user){
                this.uid = user.uid;
            }else{
                this.uid = null;
            }
        })
    }
}
</script>