<template>
    <div class="signup">
        <h1>アカウント作成</h1>
		<MenuBar/>

        <div>
            <h3>メールアドレス</h3>
            <input type="text" placeholder="E-mail" v-model="email" />
        </div>
        <div>
            <h3>パスワード</h3>
            <input type="password" placeholder="Password" v-model="password" />
        </div>
        <button @click="createUserAccount">アカウントを作成する</button>
    </div>
</template>

<script>
import firebase from "../firebase.js";
import MenuBar from '../components/MenuBar.vue';
export default {
    name: "signup",
    components: {
        MenuBar,
    },
    data() {
        return {
        email: "",
        password: ""
        };
    },

    methods: {
        createUserAccount() {
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
            .then(() => {
                alert("アカウントを作成しました。");
                this.$router.push("/signin");
            })
            .catch((error) => {
                alert("Error: 既に登録されているメールアドレスかパスワードが簡単すぎます。");
                console.error(error.message);
            });

            /* firebase.auth().signInWithEmailAndPassword(this.email, this.password)
            .then(() => {
            })
            .catch((error) => {
                console.error(error.message);
            }); */

            /* firebase.auth().currentUser.sendEmailVerification()
            .then(function() {
                console.log('success');
            })
            .catch(function(error){
                console.log(error);
            }); */

        }
    },
};
</script>