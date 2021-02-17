import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#FF2B2B',
                accent: '#FF2B2B',
                secondary: '#212121',
                success: '#2E7D32',
                info: '#1565C0',
                warning: '#EF6C00',
                error: '#B71C1C'
            },
            light: {
                primary: '#1976D2',
                accent: '#e91e63',
                secondary: '#30b1dc',
                success: '#4CAF50',
                info: '#2196F3',
                warning: '#FB8C00',
                error: '#FF5252'
            }
        }
    },
});
