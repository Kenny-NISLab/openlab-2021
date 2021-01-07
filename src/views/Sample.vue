<template>
	<div class="sample">
		<h1>Sample</h1>
		<WelcomeUser/>

        <v-btn @click="sendMail">メール送信</v-btn>
	</div>
</template>

<script>
import firebase from '../firebase.js';
import WelcomeUser from '../components/WelcomeUser.vue';
export default {
    name: 'sample',
    data(){
        return {
            contactForm: {
                name: '細野航平',
                studentId: '1316200107',
                email: 'k.hosono1209@gmail.com',
                message: 'ここが本文です。',
            }
        }
    },
	components: {
        WelcomeUser,
    },
    methods: {
        sendMail: function() {
            const sendMail = firebase.functions().httpsCallable('sendContact')
            sendMail(this.contactForm);
        }
    }
}
</script>