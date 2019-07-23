import Vue from 'vue';
//import emojiPicker from '../src/components/emojiPicker/index.vue';
import emojiPicker from '../dist/emoji-picker-vue.min.js';
import '../dist/emoji-picker-vue.min.css';

new Vue({
    el: '#app',
    components: {
        emojiPicker
    },
    data: {
        target: null,
        isShowEmoji: false,
        triggerCode: '&#x1F600;',
        customStyle: {
           // width: '288px',
           // height: '180px'
        }
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