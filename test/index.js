import Vue from 'vue';
//import app from '../src/components/emojiPicker/index.vue';
import emojiPicker from '../dist/emoji-picker-vue';
import '../dist/emoji-picker-vue.css';

new Vue({
    el: '#app',
    components: {
        emojiPicker
    },
    data: {
        target: null,
        isShowEmoji: false,
        triggerCode: '&#x1F600;'
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