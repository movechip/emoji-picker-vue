import Vue from 'vue';
import app from './components/app/app.vue';

new Vue({
    el: '#app',
    components: {
        app
    },
    data: {
        target: null,
        isShowEmoji: false,
        triggerCode: '\u{1F600}'
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