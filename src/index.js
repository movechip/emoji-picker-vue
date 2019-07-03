import Vue from 'vue';
import app from './components/app/app.vue';

new Vue({
    el: '#app',
    components: {
        app
    },
    data: {
        target: null,
        isShowEmoji: false
    },
    created() {
        this.target = document.querySelector('#target');
    },
    methods: {
        showEmoji() {
            this.isShowEmoji = !this.isShowEmoji;
        }
    }
})