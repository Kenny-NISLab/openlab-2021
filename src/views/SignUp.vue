<template>
<div class="signup">
	<v-container>
        <h1>アカウント作成</h1>
        <div>
            <router-link to="/">Home</router-link>
        </div>

        <div>
            <h3>メールアドレス</h3>
            <input type="text" placeholder="E-mail" v-model="email" />
        </div>
        <div>
            <h3>パスワード</h3>
            <input type="password" placeholder="Password" v-model="password" />
        </div>
        <button @click="createUserAccount">アカウントを作成する</button>
    </v-container>
</div>
</template>

<script>
import firebase from "../firebase.js";
export default {
    name: "singup",
    data() {
        return {
        email: "",
        password: ""
        };
    },

    methods: {
        createUserAccount() {
        firebase
            .auth()
            .createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
            alert("アカウントを作成しました。");
            this.$router.push("/signin");
            })
            .catch(error => {
            alert("Error: 既に登録されているメールアドレスかパスワードが簡単すぎます。", error.message);
            console.error("Account Regeister Error", error.message);
            });
        }
    },
};
</script>