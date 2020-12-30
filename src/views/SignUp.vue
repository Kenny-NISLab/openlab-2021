<template>
    <div class="signup">
        <h1>アカウント作成</h1>
		<MenuBar/>

        <v-form>
            <v-text-field v-model="email" label="メールアドレス" required></v-text-field>
            <v-text-field v-model="password" type="password" label="パスワード" required></v-text-field>
            <v-btn @click="createUserAccount">アカウントを作成する</v-btn>
        </v-form>
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
        }
    },
};
</script>