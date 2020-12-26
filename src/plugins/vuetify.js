import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

const vuetify = new Vuetify({
    theme: {
        themes: {
            light: {
                primary: '#222831',
                secondary: '#393e46',
                anchor: '#00adb5',
                info: '#eeeeee',
            },
        },
    },
})

export default vuetify