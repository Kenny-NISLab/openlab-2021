<template>
    <v-row class="mt-3 my-6" justify="center">
        <h3 v-show="!uid">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/signin">ログイン・新規登録</router-link>
        </h3>

        <h3 v-show="uid">
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/openlab/reserve">オープンラボ訪問予約</router-link> |
            <!-- <router-link to="/reserve">事前訪問予約</router-link> | -->
            <router-link to="/mypage">マイページ</router-link> |
            <!-- <router-link to="/contact">お問い合わせ</router-link> | -->
            <router-link to="/signout">ログアウト</router-link>
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
        });
    }
}
</script>