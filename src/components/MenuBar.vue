<template>
    <v-row>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/signin">ログイン</router-link> |
        <router-link to="/signup">アカウント作成</router-link> |
        <router-link to="/signout">ログアウト</router-link> |
        <router-link to="/mypage">マイページ</router-link> |
        <router-link to="/contactme">お問い合わせ</router-link>
    </v-row>
</template>

<script>
export default {
    name: 'menuBar',
}
</script>